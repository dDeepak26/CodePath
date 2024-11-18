import { AuthNavBar } from "./components/AuthNavBar";
import { LoginPage } from "./components/LoginPage";

function Auth() {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthNavBar />
      <div className="flex-grow flex items-center justify-center">
        <LoginPage />
      </div>
    </div>
  );
}

export default Auth;
