import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "@/layouts/main-layout";
import { PublicLayout } from "../src/layouts/public-layout";

import HomePage  from "@/routes/home";
import AuthenticationLayout from "@/layouts/auth-layout";

import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";

import ProtectRoutes from "./layouts/protected-routes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes*/}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />}/> 
        </Route>
        {/*authentication */} 
        <Route element={<AuthenticationLayout />}>
          <Route path="/signup/*" element={<SignUpPage />} /> 
          <Route path="/signin/*" element={<SignInPage />}/> 
        </Route>

        {/*protected routes*/} 
        <Route
          element={
            <ProtectRoutes>
          <MainLayout />
        </ProtectRoutes>
        }>
         
        </Route>

      </Routes>
      </Router>
  )
}

export default App