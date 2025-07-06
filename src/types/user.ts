import * as Yup from "yup";

export type User = {
  username: string;
  createdAt: string;
  solvedProblem: string[];
};

export type UserType = {
  fullName?: string;
  email: string;
  password: string;
}

export const initialValues: UserType = {
  fullName: "",
  email: "",
  password: ""
}

export const UserSchema = Yup.object().shape({
  fullName: Yup.string().matches(/^[A-Za-z\s]+$/, "Full name can contain only letters and spaces"),
  email: Yup.string().email("Invalid e-mail address").required("Email is Required"),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    "Must include upper & lower case, number, and special character").required("Password is Required")
})
