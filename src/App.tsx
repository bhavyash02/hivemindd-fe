import { RouterProvider, createHashRouter } from "react-router-dom";
import { appRoutes } from "./config/appRoutesConfig";

function App() {
  const router = createHashRouter(appRoutes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
