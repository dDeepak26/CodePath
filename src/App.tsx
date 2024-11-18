import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NoPage";
import Auth from "./Pages/Auth";
import CodePath from "./Pages/CodePath";
import { useUser } from "@clerk/clerk-react";

function App() {
  const { isSignedIn } = useUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={isSignedIn ? <Navigate to="codepath" /> : <Home />}
        />
        <Route path="auth" element={<Auth />} />
        <Route path="codepath" element={<CodePath />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
