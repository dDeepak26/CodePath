import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-24 h-24 text-red-500" />
        </div>
        
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>404 - Page Not Found</AlertTitle>
          <AlertDescription>
            Oops! The page you're looking for doesn't exist or has been moved.
          </AlertDescription>
        </Alert>
        
        <div className="flex flex-col space-y-4">
          <Button asChild variant="default" size="lg" className="w-full">
            <Link to="/">Return to Home</Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;