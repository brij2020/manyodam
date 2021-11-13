const leftSideBarMenu = [
  {
    name: "Dashboard",
    isActive: true,
    dataToggle: "",
    isExpand: false,
    link: "/" ,
    iconClass: "icon-grid",
    subMenuid: "ui-basic",
    submenu:[],
    isHover: false
  },
  {
    name: "OTT Platform",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "javascript:void(0)" ,
    iconClass: "icon-layout",
    submenu: [
        {
          name: "Video",
          isActive: true,
          dataToggle: "",
          isExpand: false,
        },
        {
          name: "Audio",
          isActive: true,
          dataToggle: "",
          isExpand: false,
        },
        {
          name: "Live",
          isActive: true,
          dataToggle: "",
          isExpand: false,
        }
      ],
      isHover: false
  },
  {
    name: "E-com",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "javascript:void(0)" ,
    iconClass: "icon-columns",
    submenu: [
      {
        name: "Orders",
        isActive: true,
        dataToggle: "",
        isExpand: false,
        subLink: "/orders"

      },
      {
        name: "Products",
        isActive: true,
        dataToggle: "",
        isExpand: false,
        subLink: "/products"
      },
      {
        name: "Sells",
        isActive: true,
        dataToggle: "",
        isExpand: false,
        subLink: "/sells"

      }
    ],
    isHover: false

  },
  {
    name: "Charts to be discuss?",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "javascript:void(0)" ,
    iconClass: "icon-bar-graph",
    submenu: [],
    isHover: false

  },
  {
    name: "Settings",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "javascript:void(0)" ,
    iconClass: "icon-contract",
    submenu: [],
    isHover: false

  },
  {
    name: "Users List",
    isActive: false,
    dataToggle: "",
    isExpand: false,
    link: "/lists" ,
    iconClass: "icon-head ",
    submenu: [],
    isHover: false

  },
];
export { leftSideBarMenu };
