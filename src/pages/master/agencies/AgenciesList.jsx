import React, { useEffect, useMemo, useState } from 'react'
import Layout from "../../../layout/Layout"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../../../base/BaseUrl';
import { IconEdit, IconEye, IconPlus } from '@tabler/icons-react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';

const AgenciesList = () => {
  const [agenciesData, setAgenciesData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const fetchAgenciesData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/api/web-fetch-agencies-list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAgenciesData(response.data?.agencies);
    } catch (error) {
      console.error("Error fetching Agencies data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgenciesData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "agency_name",
        header: "Agency",
        size:150,
       
      },
      {
        accessorKey: "agency_branch",
        header: "Branch",
        size: 150,
      },
      {
        accessorKey: "agency_rt_km",
        header: "Rt Km",
        size: 50,
      },
      {
        accessorKey: "agency_city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "agency_state",
        header: "State",
        size: 50,
      },
      {
        accessorKey: "agency_mobile",
        header: "Mobile",
        size: 50,
      },
      {
        accessorKey: "agency_status",
        header: "Status",
        size: 50,
      },
      {
        id: "id",
        header: "Action",
        size: 20,
        enableHiding: false,
        Cell: ({ row }) => {
          const id = row.original.id;

          return (
            <div className="flex gap-2">
              
              <div
                // onClick={toggleViewerDrawer(true, id)}
                className="flex items-center space-x-2"
                title="Edit"
              >
                <IconEdit className="h-5 w-5 text-blue-500 cursor-pointer" />
              </div>
              <div
                // onClick={toggleViewerDrawer(true, id)}
                className="flex items-center space-x-2"
                title="View"
              >
                <IconEye className="h-5 w-5 text-blue-500 cursor-pointer" />
              </div>
              
              
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data: agenciesData || [],
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableColumnActions: false,
    enableHiding: false,
    enableStickyHeader: true,
    enableStickyFooter: true,
    mantineTableContainerProps: { sx: { maxHeight: "400px" } },
 
    initialState: { columnVisibility: { address: false } },
  });

  
  return (
    <Layout>
             <div className="max-w-screen">
        
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
            <h1 className="border-b-2 font-[400] border-dashed border-orange-800 text-center md:text-left">
            Agencies List
            </h1>
            <div className="flex gap-2">
              <button
                className=" flex flex-row items-center gap-1 text-center text-sm font-[400] cursor-pointer  w-[7rem] text-white bg-blue-600 hover:bg-red-700 p-2 rounded-lg shadow-md"
              
              >
                <IconPlus className='w-4 h-4'/> Agencies
              </button>
              </div>
          </div>
        </div>

        <div className=" shadow-md">
          <MantineReactTable table={table} />
        </div>
      </div>
    </Layout>
  )
}

export default AgenciesList