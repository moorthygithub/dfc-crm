import {
  IconCopy,
  IconHierarchy,
  IconChartDots2,
  IconLayoutDashboard,
  IconUser,
  IconLanguage,
  IconBriefcase,
  IconMessages,
  IconTypography,
  IconCash,
  IconCardboards,
  IconUsers,
  IconReceipt,
  IconSchool,
  IconListDetails,
  IconRepeat,
  IconComponents,
  IconReport,
  IconDownload,
  IconPeace,
  IconBell,
  IconTruckDelivery,
  IconTruck,
  IconSettings,
  IconBuilding,
  IconCircleDot,
  IconPin,
  IconTool,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = () => [
  // {
  //   navlabel: true,
  //   subheader: "Home",
  // },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/home",
  },
  // {
  //   navlabel: true,
  //   subheader: "Operation",
  // },

  {
    id: uniqueId(),
    title: "Master",
    icon: IconUsers,
    subItems: [
      {
        id: uniqueId(),
        title: "Comapany",
        icon: IconBuilding,
        href: "/master/company-list",
      },
      {
        id: uniqueId(),
        title: "Branch",
        icon: IconPin,
        href: "/master/branch-list",
      },
      {
        id: uniqueId(),
        title: "Tyre Position",
        icon: IconCircleDot,
        href: "/master/tyreposition-list",
      },
      {
        id: uniqueId(),
        title: "Tyre Make",
        icon: IconCircleDot,
        href: "/master/tyremake-list",
      },
      {
        id: uniqueId(),
        title: "Service Type",
        icon: IconTool,
        href: "/master/servicetype-list",
      },
      {
        id: uniqueId(),
        title: "Team",
        icon: IconUsers,
        href: "/master/team-list",
      },
      {
        id: uniqueId(),
        title: "Driver",
        icon: IconUsers,
        href: "/master/driver-list",
      },
      {
        id: uniqueId(),
        title: "Agencies",
        icon: IconUsers,
        href: "/master/agencies-list",
      },
      {
        id: uniqueId(),
        title: "Vendor",
        icon: IconUsers,
        href: "/master/vendor-list",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Vehicles",
    icon: IconTruck,
    href: "/vechiles-list",
  },
  {
    id: uniqueId(),
    title: "Tyre",
    icon: IconSettings,
    subItems: [
      {
        id: uniqueId(),
        title: "Purchase",
        icon: IconRepeat,
        href: "/tyre/purchase-list",
      },
      {
        id: uniqueId(),
        title: "Stock",
        icon: IconRepeat,
        href: "/tyre/stock-list",
      },
      {
        id: uniqueId(),
        title: "Assign Tyre",
        icon: IconRepeat,
        href: "/tyre/assign-list",
      },
      {
        id: uniqueId(),
        title: "Unassign Tyre",
        icon: IconRepeat,
        href: "/tyre/unassign-list",
      },
      {
        id: uniqueId(),
        title: "Inspection",
        icon: IconRepeat,
        href: "/tyre/inspection-list",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Service",
    icon: IconTool,
    href: "/service-list",
  },
  {
    id: uniqueId(),
    title: "Trip",
    icon: IconTruckDelivery,
    href: "/form-trip",
  },
  // {
  //   navlabel: true,
  //   subheader: "Summary",
  // },
  {
    id: uniqueId(),
    title: "Payment",
    icon: IconReport,
    subItems: [
      {
        id: uniqueId(),
        title: "Branch",
        icon: IconCopy,
        href: "/payment/branch-list",
      },
      {
        id: uniqueId(),
        title: "Advance",
        icon: IconCopy,
        href: "/payment/advance-list",
      },
      {
        id: uniqueId(),
        title: "Details",
        icon: IconCopy,
        href: "/payment/details-list",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Todo",
    icon: IconReceipt,
    href: "/todo-list",
  },
  {
    id: uniqueId(),
    title: "Report",
    icon: IconDownload,
    subItems: [
      {
        id: uniqueId(),
        title: "Agencies",
        icon: IconCopy,
        href: "/report-agencies-form",
      },
      {
        id: uniqueId(),
        title: "Team",
        icon: IconCopy,
        href: "/report-team-form",
      },
      {
        id: uniqueId(),
        title: "Driver",
        icon: IconCopy,
        href: "/report-driver-form",
      },
      {
        id: uniqueId(),
        title: "Vendor",
        icon: IconCopy,
        href: "/report-vendor-form",
      },
      {
        id: uniqueId(),
        title: "Vechiles",
        icon: IconCopy,
        href: "/report-vechiles-form",
      },
      {
        id: uniqueId(),
        title: "V-Details",
        icon: IconCopy,
        href: "/report-vdetails-form",
      },
      {
        id: uniqueId(),
        title: "Tyre",
        icon: IconCopy,
        href: "/report-tyre-form",
      },
      {
        id: uniqueId(),
        title: "Services",
        icon: IconCopy,
        href: "/report-services-form",
      },
      {
        id: uniqueId(),
        title: "Trip",
        icon: IconCopy,
        href: "/report-trip-form",
      },
      {
        id: uniqueId(),
        title: "Salary",
        icon: IconCopy,
        href: "/report-salary-form",
      },
      {
        id: uniqueId(),
        title: "Payment",
        icon: IconCopy,
        href: "/report-payment-form",
      },
    ],
  },
];

export default Menuitems;
