export const columns = [
    {
      field: "id",
      headerName: "Id",
      headerClassName: "super-app-theme--header",
      width: 0,
      hide: true,
      cellClassName: "super-app-theme--cell"
    },
    {
      field: "Order_Date",
      headerName: "Order Date",
  
      headerClassName: "super-app-theme--header",
      // width: 200,
      flex: 2,
      cellClassName: "super-app-theme--cell",
      alignItems: "center"
    },
    {
      field: "Approved_By",
      headerName: "Approved By",
      // width: 190,
      flex: 1.3,
      headerClassName: "super-app-theme--header",
      alignItems: "center"
      //  cellClassName: 'super-app-theme--cell',
    },
  
    {
      field: "Order_Id",
      headerName: "Order Id",
      headerClassName: "super-app-theme--header",
      // width: 110,
      flex: 1,
      cellClassName: "super-app-theme--cell"
    },
    {
      field: "Company_Name",
      headerName: "Company_Name",
      headerClassName: "super-app-theme--header",
      // width: 160,
      flex: 1.5,
  
      cellClassName: "super-app-theme--cell"
    },
  
    {
      field: "company_Id",
      headerClassName: "super-app-theme--header",
      headerName: "Company ID",
      //   type: 'number',
      // width: 160
      flex: 1.2
    },
    {
      field: "Order_amount",
      headerName: "Order Amount",
      headerClassName: "super-app-theme--header",
      description: "This column has a value getter and is not sortable.",
      //   sortable: false,
      // width: 170,
      flex: 1.5,
      cellClassName: "super-app-theme--cell"
    },
  
    {
      field: "Approval_status",
      headerName: "Approval Status",
      headerClassName: "super-app-theme--header",
      // width: 180,
      flex: 1.5,
      cellClassName: "super-app-theme--cell"
    },
    {
      field: "Notes",
      headerClassName: "super-app-theme--header",
      headerName: "Notes",
      // width: 180
      flex: 2
      //  cellClassName: 'super-app-theme--cell'
    }
  ];
  
  export const rows = [
    {
      Order_Id: 958245,
      company_Id: 665,
      id: 1,
      Company_Name: "BrightStar Pvt Ltd",
      Approval_status: "Rejected",
      Approved_By: "David Lee",
      Notes: "Blocked Order",
      Order_Date: "2020-09-20 00:00:00",
      Order_amount: "INR 7180"
    },
    {
      Order_Id: 958293,
      company_Id: 931,
      id: 2,
      Company_Name: "CityBank",
      Approval_status: "Approved",
      Approved_By: "Matthew Vance",
      Order_Date: "2019-10-03 00:00:00",
      Order_amount: "INR 98445"
    },
    {
      Order_Id: 958317,
      company_Id: 825,
      id: 3,
      Company_Name: "Xinex",
      Approval_status: "Approved",
      Approved_By: "David Lee",
      Notes: "Order Approved",
      Order_Date: "2019-12-06 00:00:00",
      Order_amount: "INR 8780"
    },
    {
      Order_Id: 958318,
      company_Id: 984,
      id: 4,
      Company_Name: "HP",
      Approval_status: "Rejected",
      Approved_By: "Matthew Vance",
      Order_Date: "2019-10-04 00:00:00",
      Order_amount: "INR 51074"
    },
    {
      Order_Id: 958341,
      company_Id: 1074,
      id: 5,
      Company_Name: "Livingston",
      Approval_status: "Rejected",
      Approved_By: "Laura Smith",
      Notes: "Order rejected by Laura",
      Order_Date: "2020-10-30 00:00:00",
      Order_amount: "INR 11164"
    },
    {
      Order_Id: 958365,
      company_Id: 1164,
      id: 6,
      Company_Name: "Puma",
      Approval_status: "Approved",
      Approved_By: "Laura Smith",
      Order_Date: "2020-10-31 00:00:00",
      Order_amount: "INR 21254"
    },
    {
      Order_Id: 958389,
      company_Id: 1254,
      id: 7,
      Company_Name: "Crocs",
      Approval_status: "Approved",
      Approved_By: "Laura Smith",
      Order_Date: "2020-11-01 00:00:00",
      Order_amount: "INR 41344"
    },
    {
      Order_Id: 958700,
      company_Id: 1064,
      id: 8,
      Company_Name: "Nike",
      Approval_status: "Approved",
      Approved_By: "Matthew Vance",
      Notes: "Approved",
      Order_Date: "2020-09-18 00:00:00",
      Order_amount: "INR 111700"
    },
    {
      Order_Id: 958768,
      company_Id: 718,
      id: 9,
      Company_Name: "WPOLogistics",
      Approval_status: "Rejected",
      Approved_By: "Laura Smith",
      Notes: "On Hold",
      Order_Date: "2020-09-21 00:00:00",
      Order_amount: "INR 34771"
    },
    {
      Order_Id: 958792,
      company_Id: 878,
      id: 10,
      Company_Name: "Sysmex",
      Approval_status: "Approved",
      Approved_By: "David Lee",
      Order_Date: "2019-10-02 00:00:00",
      Order_amount: "INR 9310"
    },
    {
      Order_Id: 959413,
      company_Id: 1434,
      id: 11,
      Company_Name: "Johnson & Johnson",
      Approval_status: "Approved",
      Approved_By: "Laura Smith",
      Order_Date: "2020-11-05 00:00:00",
      Order_amount: "INR 15240"
    },
    {
      Order_Id: 960413,
      company_Id: 90,
      id: 12,
      Company_Name: "Garnier",
      Approval_status: "Approved",
      Approved_By: "David Lee",
      Notes: "Approved on 12.09.20",
      Order_Date: "2020-11-06 00:00:00",
      Order_amount: "INR 6187"
    },
    {
      Order_Id: 961511,
      company_Id: 187,
      id: 13,
      Company_Name: "Apollo Pvt Ltd",
      Approval_status: "Approved",
      Approved_By: "David Lee",
      Notes: "Approved on 18.09.20",
      Order_Date: "2020-11-07 00:00:00",
      Order_amount: "INR 277"
    },
    {
      Order_Id: 962609,
      company_Id: 277,
      id: 14,
      Company_Name: "MaxTerm",
      Approval_status: "Approved",
      Approved_By: "David Lee",
      Notes: "Approved on 22.09.20",
      Order_Date: "2020-11-08 00:00:00",
      Order_amount: "INR 4367"
    }
  ];
  