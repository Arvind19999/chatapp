import React, { Suspense,lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";

import { LayoutLoader } from "./components/layout/Loaders";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const Notfound = lazy(() => import("./pages/Notfound"));

let user = true;
const App = () => {
  return (
    <BrowserRouter>
{/* <Route element={<ProtectRoute user={user} />}>
<Route path="/" element={<Home />} />
<Route path="/chat/:chatId" element={<Chat />} />
<Route path="/groups" element={<Groups />} />
</Route> */}
<Suspense fallback={<LayoutLoader />}>
<Routes>
        <Route
          path="/"
          element={
            <ProtectRoute user={user} redirect="/">
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/chat/:chatId"
          element={
            <ProtectRoute user={user} redirect="/chat/:chatId">
              <Chat />
            </ProtectRoute>
          }
        />

        <Route
          path="/groups"
          element={
            <ProtectRoute user={user} redirect="/groups">
              <Groups />
            </ProtectRoute>
          }
        />

        <Route
          path="/login"
          element={
            <ProtectRoute user={!user} redirect="/">
              <Login />
            </ProtectRoute>
          }
        />

        <Route path="*" element={<Notfound />} />
      </Routes>
</Suspense>
     
    </BrowserRouter>
  );
};

export default App;



