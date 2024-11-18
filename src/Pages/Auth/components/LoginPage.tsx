import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <Tabs
            defaultValue="signin"
            value={isLogin ? "signin" : "signup"}
            onValueChange={(value) => setIsLogin(value === "signin")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          {isLogin ? (
            <SignIn forceRedirectUrl={"/codepath"} />
          ) : (
            <SignUp forceRedirectUrl={"/codepath"} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
