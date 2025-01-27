import { useUser } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import CodePath from "./Pages/CodePath";
import ProblemPage from "./Pages/CodePath/ProblemPage";
import NotFoundPage from "./Pages/NoPage";

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
        <Route path="/codepath/problem/:pageid" element={<ProblemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
