import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { appRoutes } from "./config/appRoutesConfig";

function App() {
  const router = createBrowserRouter(appRoutes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
