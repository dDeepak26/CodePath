import { Problem } from "@/types/problems";
import * as Yup from "yup";

// Validation schema
export const ProblemSchema = Yup.object().shape({
  pageId: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  difficulty: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  order: Yup.number().required("Required").positive("Must be positive"),
  videoId: Yup.string(),
  problemStatement: Yup.string().required("Required"),
  examples: Yup.array()
    .of(
      Yup.object().shape({
        inputText: Yup.string().required("Input is required"),
        outputText: Yup.string().required("Output is required"),
        explanation: Yup.string(),
        img: Yup.string(),
      })
    )
    .min(1, "At least one example is required"),
  constraints: Yup.string().required("Required"),
  starterCode: Yup.string().required("Required"),
  starterFunctionName: Yup.string().required("Required"),
  handlerFunction: Yup.string().required("Required"),
});

// Initial values for the form
export const initialValues: Problem = {
  id: 0,
  pageId: "",
  title: "",
  difficulty: "Easy",
  category: "",
  order: 0,
  videoId: "",
  problemStatement: "",
  examples: [
    {
      id: 0,
      inputText: "",
      outputText: "",
      explanation: "",
      img: "",
    },
  ],
  constraints: "",
  starterCode: "",
  starterFunctionName: "",
  handlerFunction: "",
};
