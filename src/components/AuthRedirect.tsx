import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const AuthRedirect = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <Alert variant="destructive" className="bg-red-50">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <AlertTitle>Authentication Required</AlertTitle>
          <AlertDescription>
            You need to sign in to access this page.
          </AlertDescription>
        </Alert>

        <div className="flex flex-col space-y-4">
          <Button asChild variant="default" size="lg" className="w-full">
            <Link to="/auth">Sign In Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthRedirect;
