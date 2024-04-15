import Home from "./pages/Home";
import InspirationPage from "./pages/InspirationPage";
import FindWorkPage from "./pages/FindWorkPage";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LearnDesignPage from "./pages/LearnDesignPage";
import GoProPage from "./pages/GoProPage";
import HireDesignersPage from "./pages/HireDesignersPage ";
import SelectPage from "./pages/SelectPage";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/select",
    element: <SelectPage />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/inspiration",
        element: <InspirationPage />,
      },
      {
        path: "/find-work",
        element: <FindWorkPage />,
      },
      {
        path: "/learn-design",
        element: <LearnDesignPage />,
      },
      {
        path: "/go-pro",
        element: <GoProPage />,
      },
      {
        path: "/hire-designers",
        element: <HireDesignersPage />,
      },
    ],
  },
]);

export default function App() {
  // State for user's avatar URL // Callback function to update avatar URL  };
  return <RouterProvider router={router}></RouterProvider>;
}
