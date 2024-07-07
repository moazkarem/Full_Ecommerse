import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import RootLayout from "../../pages/Layout/Layout";
import Home from '../../pages/Home/Home'
import About from "../../pages/About/About";

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}  >
            <Route index element={<Home />}  />
            <Route path="about" element={<About />}  />
        </Route>
    )

  )

  export default router