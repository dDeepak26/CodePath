import { useUser } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import CodePath from "./Pages/CodePath";
import ProblemPage from "./Pages/CodePath/ProblemPage";
import CreateProblemPage from "./Pages/CodePath/CreateProblemPage";
import NotFoundPage from "./Pages/NoPage";
import { ToastContainer } from "react-toastify";
import UpdateProblemPage from "./Pages/CodePath/UpdateProblemPage";

function App() {
  const { isSignedIn } = useUser();
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={isSignedIn ? <Navigate to="codepath" /> : <Home />}
          />
          <Route path="auth" element={<Auth />} />
          <Route path="codepath" element={<CodePath />} />
          <Route path="/codepath/problem/:pageId" element={<ProblemPage />} />
          <Route
            path="/codepath/create-problem"
            element={<CreateProblemPage />}
          />
          <Route
            path="/codepath/edit-problem/:pageId"
            element={<UpdateProblemPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
