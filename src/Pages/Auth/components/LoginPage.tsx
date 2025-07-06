import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialValues, UserSchema } from "@/types/user";
import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/utils/firebase/firebase";
import profileImage from "@/assets/avatar.png"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const inputClasses =
  "block w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50";

export function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isError, setError] = useState<string>("");

  // create/register user
  const handleRegister = async (values: any, actions: any) => {
    await setPersistence(auth, browserLocalPersistence);
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: values.fullName,
          photoURL: profileImage
        })
          .then(() => {
            const currentUser = auth.currentUser;
            console.log(currentUser?.displayName);
            toast.success(`Welcome, ${currentUser?.displayName || "user"}!`);
            setError("");
            navigate('/auth');
          })
          .catch((error) => {
            console.error("Error in updating the user profile", error);
          })
      })
      .catch((error) => {
        console.error("Error in Registering", error);
        setError(error.message);
      })
    actions.setSubmitting(false);
    actions.resetForm();
    console.log(values)
  }

  // login user
  const handleLogin = async (values: any, actions: any) => {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(`Welcome back, ${user.displayName || "user"}!`)
        setError("");
        navigate('/codepath')
      })
      .catch((error) => {
        console.error("Error in logging", error);
        setError("Invalid email or password");
      })
    actions.setSubmitting(false);
    actions.resetForm();
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center">
      <Card className="w-80 shadow-xl">
        <CardHeader className="font-bold">{isLogin ? "Login into your account" : "Create a new account"}</CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
              if (isLogin) {
                handleLogin(values, actions);
              } else {
                handleRegister(values, actions);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Full Name */}
                {!isLogin && <div className="grid gap-2 mb-4">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className={inputClasses}
                    required
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>}

                {/* Email */}
                <div className="grid gap-2 mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@mail.com"
                    disabled={isSubmitting}
                    className={inputClasses}
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password */}
                <div className="grid gap-2 mb-4">
                  <Label htmlFor="password">Password</Label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="******"
                    disabled={isSubmitting}
                    className={inputClasses}
                    required
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* error message */}
                <div className="grid gap-2 mb-4">
                  {isError &&
                    <span className="text-red-500 text-sm mt-1">{isError}</span>
                  }
                </div>

                {isLogin && <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Logging" : "Login"}
                </Button>
                }
                {!isLogin && <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Registering" : "Register"}
                </Button>}
                <Button variant="outline" type="button" className="w-full">
                  {isLogin ? "Login" : "Register"} with Google
                </Button>
                <div className="mt-4 text-center text-sm">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button disabled={isSubmitting} className="underline cursor-pointer" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Register" : "Login"}</button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
