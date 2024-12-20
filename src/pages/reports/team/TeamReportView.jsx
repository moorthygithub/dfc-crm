import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  IconInfoCircle,
  IconArrowBack,
  IconPrinter,
  IconFileTypeXls,
} from "@tabler/icons-react";
import axios from "axios";
import BASE_URL from "../../../base/BaseUrl";
import Layout from "../../../layout/Layout";
import { useReactToPrint } from "react-to-print";
import SkeletonLoading from "../agencies/SkeletonLoading";
import { IconFileTypePdf } from "@tabler/icons-react";
import { toast } from "sonner";
import moment from "moment";
import { NumericFormat } from "react-number-format";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
const printStyles = `
  @media print {




    /* Print content with 20px margin */
    .print-content {
      margin: 10px !important; /* Apply 20px margin to the printed content */
  padding: 3px;
      }

.page-break {
      page-break-before: always;
      margin-top: 10mm;
    }




  }
`;
const ServiceReportView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const componentRef = React.useRef();
  const tableRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
          @page {
              size: A4;
              margin: 4mm;
          }
          @media print {
              body {
                  margin: 0;
                  font-size: 12px; 
                  min-height:100vh
              }
              table {
                  width: 100%;
                  border-collapse: collapse;
              }
              th, td {
                  border: 1px solid #ddd;
                  padding: 4px;
              }


.trademark {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // padding: 0 10mm;
  font-size: 8px;
  color: gray;
}

              th {
                  background-color: #f4f4f4;
              }
              .text-center {
                  text-align: center;
              }
                  .margin-first{
                  margin:10px
                  }
                  
          }
        `,
  });
  const mergeRefs =
    (...refs) =>
    (node) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      });
    };

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = printStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  useEffect(() => {
    const fetchServicesData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        let data = {
          service_date_from: localStorage.getItem("service_date_from"),
          service_date_to: localStorage.getItem("service_date_to"),
          service_garage: localStorage.getItem("service_garage"),
          service_company: localStorage.getItem("service_company"),
          service_branch: localStorage.getItem("service_branch"),
          service_truck_no: localStorage.getItem("service_truck_no"),
        };
        const Response = await axios.post(
          `${BASE_URL}/api/fetch-services-report`,
          data,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setService(Response.data.services);
        console.log(Response.data, "resposne");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchServicesData();
  }, []);

  if (loading) {
    return <SkeletonLoading />;
  }
  const handleSavePDF = () => {
    const tableBody = [
      [
        { text: "Date", bold: true },
        { text: "Vehicle No", bold: true },
        { text: "Company", bold: true },
        { text: "Branch", bold: true },
        { text: "Garage", bold: true },
        { text: "Amount", bold: true },
        { text: "No of Changes", bold: true },
      ],
      ...service.map((item) => [
        moment(item.service_date).format("DD-MM-YYYY") || "-",
        item.service_truck_no || "-",
        item.service_company || "-",
        item.service_branch || "-",
        item.service_garage || "-",
        item.service_amount
          ? `₹${Number(item.service_amount).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`
          : "-",
        item.service_count || "-",
      ]),
    ];

    const docDefinition = {
      pageSize: "A4",
      pageMargins: [10, 10, 10, 10],
      content: [
        { text: "Services Report", style: "header", alignment: "center" },
        {
          table: {
            headerRows: 1,
            widths: ["15%", "15%", "10%", "auto", "auto", "10%", "9%"], // Adjust column widths
            body: tableBody,
          },
          layout: {
            fillColor: (rowIndex) => (rowIndex === 0 ? "#CCCCCC" : null), // Header background color
            hLineWidth: () => 0.3,
            vLineWidth: () => 0.3,
          },
        },
      ],
      styles: {
        header: {
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 10],
        },
      },
      defaultStyle: {
        fontSize: 8,
      },
      footer: (currentPage, pageCount) => ({
        columns: [
          {
            text: "DFC",
            style: "footerText",
            alignment: "left",
            margin: [10, 0],
          },
          {
            text: new Date().toLocaleDateString("en-GB"),
            style: "footerText",
            alignment: "right",
            margin: [0, 0, 10, 0],
          },
        ],
        margin: [10, 0, 10, 10],
      }),
    };
    toast.success("PDF Report is Downloaded Successfully");

    pdfMake.createPdf(docDefinition).download("Service_report.pdf");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let data = {
      service_date_from: localStorage.getItem("service_date_from"),
      service_date_to: localStorage.getItem("service_date_to"),
      service_garage: localStorage.getItem("service_garage"),
      service_company: localStorage.getItem("service_company"),
      service_branch: localStorage.getItem("service_branch"),
      service_truck_no: localStorage.getItem("service_truck_no"),
    };

    axios({
      url: BASE_URL + "/api/download-services-report",
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log("data : ", res.data);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "team.csv");
        document.body.appendChild(link);
        link.click();
        toast.success("team Report is Downloaded Successfully");
      })
      .catch((err) => {
        toast.error("Team Report is Not Downloaded");
      });
  };
  return (
    <Layout>
      <div className="bg-[#FFFFFF] p-2 rounded-lg ">
        <div className="sticky top-0 p-2 mb-4 border-b-2 border-red-500 rounded-lg bg-[#E1F5FA]">
          <h2 className="px-5 text-[black] text-lg flex flex-row justify-between items-center rounded-xl p-2">
            <div className="flex items-center gap-2">
              <IconInfoCircle className="w-4 h-4" />
              <span> Services Summary</span>
            </div>
            <div className="flex items-center space-x-4">
              <IconFileTypeXls
                className="cursor-pointer text-gray-600 hover:text-blue-600"
                onClick={onSubmit}
                title="Excel"
              />
              <IconFileTypePdf
                className="cursor-pointer text-gray-600 hover:text-blue-600"
                onClick={handleSavePDF}
                title="Pdf"
              />
              <IconPrinter
                className="cursor-pointer text-gray-600 hover:text-blue-600"
                onClick={handlePrint}
                title="Print"
              />
              <IconArrowBack
                className="cursor-pointer text-gray-600 hover:text-red-600"
                onClick={() => navigate("/report-services-form")}
                title="Go Back"
              />
            </div>
          </h2>
        </div>
        <div className=" grid sm:grid-cols-1 overflow-x-auto">
          <div
            ref={mergeRefs(componentRef, tableRef)}
            className="print-padding width margin-first"
          >
            <div className="mb-4 width">
              <h3 className="text-xl font-bold mb-2 text-center">
                SERVICES SUMMARY
              </h3>
              {service.length > 0 ? (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      {[
                        "Date",
                        "Vehicle No",
                        "Company",
                        "Branch",
                        "Garage",
                        "Amount",
                        "No of Changes",
                      ].map((header) => (
                        <th
                          key={header}
                          className="p-1 text-xs border border-black"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {service.map((item, index) => (
                      <tr key={index}>
                        <td className="p-1 text-xs border border-black text-center">
                          {moment(item.service_date).format("DD-MM-YYYY")}
                        </td>
                        <td className="p-1 text-xs border border-black text-center">
                          {item.service_truck_no || "-"}
                        </td>
                        <td className="p-1 text-xs border border-black">
                          {item.service_company || "-"}
                        </td>
                        <td className="p-1 text-xs border border-black">
                          {item.service_branch || "-"}
                        </td>
                        <td className="p-1 text-xs border border-black">
                          {item.service_garage || "-"}
                        </td>

                        <td className="p-1 text-xs border border-black text-center">
                          <NumericFormat
                            value={item.service_amount}
                            displayType="text"
                            thousandSeparator={true}
                            prefix="₹"
                            thousandsGroupStyle="lakh"
                          />
                        </td>
                        <td className="p-1 text-xs border border-black text-center">
                          {item.service_count || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center text-gray-500 py-4">
                  No Servive Data Available
                </div>
              )}
            </div>
            <div className="hidden print:block">
              <div className="trademark flex justify-between items-center mt-4 ">
                <h2 className="text-xs font-medium px-1">DFC</h2>
                <h2 className="text-xs font-medium px-5">
                  {new Date().toLocaleDateString("en-GB")}{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceReportView;
