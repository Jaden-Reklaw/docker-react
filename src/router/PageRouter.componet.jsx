
import Home from "../pages/Home/Home.component";
import Invertebrates from "../pages/Invertebrates/Invertebrates.component";
import Vertebrates from "../pages/Vertebrates/Vertebrates.component";
import Others from "../pages/Others/Others.component";

const PageRouter = [
    {name: "Home", path: "/", element: <Home />},
    {name: "invertebrates", path: "/invertebrates", element: <Invertebrates />},
    {name: "vertebrates", path: "/vertebrates", element: <Vertebrates />},
    {name: "others", path: "/others", element: <Others />},
];

export default PageRouter;