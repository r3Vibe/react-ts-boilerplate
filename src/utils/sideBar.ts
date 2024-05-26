import {
  faBarsProgress,
  faEnvelope,
  faFile,
  faHouse,
  faLayerGroup,
  faList,
  faMagnifyingGlass,
  faPlus,
  faQuestion,
  faShieldHalved,
  faSignsPost,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const sideBarContent = [
  {
    title: "Dashboard",
    link: "/",
    icon: faHouse,
    hasChild: false,
  },
  {
    title: "Users",
    link: "/users",
    icon: faUser,
    hasChild: false,
  },
  {
    title: "Posts",
    link: "/posts",
    icon: faSignsPost,
    hasChild: true,
    children: [
      {
        title: "Add",
        link: "/posts/add",
        icon: faPlus,
      },
      {
        title: "List",
        link: "/posts/list",
        icon: faList,
      },
    ],
  },
  {
    title: "Email",
    link: "/email",
    icon: faEnvelope,
    hasChild: false,
  },
  {
    title: "Inquiry",
    link: "/inquiry",
    icon: faMagnifyingGlass,
    hasChild: false,
  },
  {
    title: "CMS",
    link: "/cms",
    icon: faBarsProgress,
    hasChild: true,
    children: [
      {
        title: "Category",
        link: "/cms/category",
        icon: faLayerGroup,
      },
      {
        title: "About Us",
        link: "/cms/about-us",
        icon: faUsers,
      },
      {
        title: "Term & Condition",
        link: "/cms/term-and-condition",
        icon: faFile,
      },
      {
        title: "Privacy & Security",
        link: "/cms/privacy-and-security",
        icon: faShieldHalved,
      },
      {
        title: "FAQ",
        link: "/cms/faq",
        icon: faQuestion,
      },
    ],
  },
];
