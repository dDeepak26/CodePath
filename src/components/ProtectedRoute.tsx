import { ReactElement } from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingSkeleton from "./LoadingSkeleton";

interface ProtectRouteProps {
    children: ReactElement;
}

export default function ProtectedRoute({ children }: ProtectRouteProps) {
    const { user, loading } = useAuth();

    if (loading) return <LoadingSkeleton />;
    return user ? children : <Navigate to="/auth" replace />;
}
