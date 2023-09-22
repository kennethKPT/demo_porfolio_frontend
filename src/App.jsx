import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import WelcomePage from "./pages/Welcome";
import HomePage from "./pages/Home";
import Cars from "./pages/Cars";
import P1 from "./pages/P1";
import P2 from "./pages/P2";
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
        path: "Parts",
        children: [
          { path: "P1", element: <P1 /> },
          { path: "P2", element: <P2 /> },
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
