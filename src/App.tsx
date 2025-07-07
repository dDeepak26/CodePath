import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import CodePath from "./Pages/CodePath";
import ProblemPage from "./Pages/CodePath/ProblemPage";
import CreateProblemPage from "./Pages/CodePath/CreateProblemPage";
import NotFoundPage from "./Pages/NoPage";
import { ToastContainer } from "react-toastify";
import UpdateProblemPage from "./Pages/CodePath/UpdateProblemPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              path="/"
              element={<Home />}
            />
            <Route path="auth" element={<Auth />} />
            <Route path="codepath" element={<ProtectedRoute><CodePath /></ProtectedRoute>
            } />
            <Route path="/codepath/problem/:pageId" element={
              <ProtectedRoute><ProblemPage /></ProtectedRoute>
            } />
            <Route
              path="/codepath/create-problem"
              element={<ProtectedRoute><CreateProblemPage /></ProtectedRoute>}
            />
            <Route
              path="/codepath/edit-problem/:pageId"
              element={<ProtectedRoute><UpdateProblemPage /></ProtectedRoute>}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
