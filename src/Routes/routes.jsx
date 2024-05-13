import SiteRoot from "../Page/site/SiteRoot"
import Home from "../Page/site/Home/Home"
import Details from "../Page/site/Details/Detail"
import AdminRoots from "../Page/admin/AdminRoots";
import Add from "../Page/admin/Add/Add";
const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },{
        path:"/details/:id",
        element:<Details/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoots />,
    children: [{
      path: "add",
      element: <Add />,
    }]
  }
];

export default ROUTES
