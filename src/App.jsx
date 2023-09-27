import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import WelcomePage from "./pages/Welcome";
import HomePage from "./pages/Home";
import Cars from "./pages/Cars";
import DemoAPI from "./pages/Demo/API";
import DemoSPA from "./pages/Demo/SPA";
import DemoResponsiveness from "./pages/Demo/Responsiveness";
import DemoCloud from "./pages/Demo/Cloud";
import Service from "./pages/Service";
import About from "./pages/About";

const router = createBrowserRouter([
  { path: "", element: <WelcomePage /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "Home", element: <HomePage /> },
      { path: "Cars", element: <Cars /> },
      {
        path: "Demo",
        children: [
          { path: "API", element: <DemoAPI /> },
          { path: "SPA", element: <DemoSPA /> },
          { path: "Responsiveness", element: <DemoResponsiveness /> },
          { path: "Cloud", element: <DemoCloud /> },
        ],
      },
      { path: "Service", element: <Service /> },
      { path: "About", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
