import useProblemDataFB from "@/hooks/useProblemDataFB";
import { useNavigate, useParams } from "react-router-dom";
import { Problem } from "../../../Data/problems";
import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import { Form } from "formik";
import CreateProblemNavBar from "../CreateProblemPage/components/CreateProblemNavBar";
import { ProblemSchema, initialValues } from "../CreateProblemPage/utils/main";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase/firebase";

const UpdateProblemPage = () => {
  const navigate = useNavigate();
  const { pageId } = useParams();
  const problemData = useProblemDataFB();

  const [formInitialValues, setFormInitialValues] =
    useState<Problem>(initialValues);

  useEffect(() => {
    // Only attempt to find the problem if problemData is not empty
    if (problemData && problemData.length > 0) {
      const currentProblemData = problemData.find(
        (object) => object.pageId === pageId
      );

      // If a problem is found, update the initial values
      if (currentProblemData) {
        console.log("Found problem data:", currentProblemData);
        setFormInitialValues(currentProblemData);
      }
    }
  }, [pageId, problemData]);

  // to update the problem data into firebase
  const updateProblemToFirebase = async (values: Problem) => {
    try {
      await setDoc(doc(db, "problems", pageId || ""), values);
      toast.success("Problem successfully Updated to Firebase! 🎉", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error adding document:", error);
      toast.error("Failed to add problem. Please try again.");
    }
  };

  return (
    <div className="pb-10">
      <CreateProblemNavBar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-6">
          Update {formInitialValues?.title} Problem
        </h1>

        <Formik
          key={formInitialValues.pageId || "new"}
          enableReinitialize
          initialValues={formInitialValues}
          validationSchema={ProblemSchema}
          onSubmit={(values, actions) => {
            // Handle the form submission
            console.log("submitted data:");
            console.log(values);

            updateProblemToFirebase(values);
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 5000);
            navigate("/codepath");
          }}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="pageId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Page ID
                  </label>
                  <Field
                    name="pageId"
                    type="text"
                    className="mt-1 p-1 block w-full rounded-md shadow-sm"
                  />
                  <ErrorMessage
                    name="pageId"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <Field
                    name="title"
                    type="text"
                    className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="difficulty"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Difficulty
                  </label>
                  <Field
                    as="select"
                    name="difficulty"
                    className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </Field>
                  <ErrorMessage
                    name="difficulty"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <Field
                    name="category"
                    type="text"
                    className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="order"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Order
                  </label>
                  <Field
                    name="order"
                    type="number"
                    className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                  />
                  <ErrorMessage
                    name="order"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="videoId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Video ID (optional)
                  </label>
                  <Field
                    name="videoId"
                    type="text"
                    className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                  />
                  <ErrorMessage
                    name="videoId"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="problemStatement"
                  className="block text-sm font-medium text-gray-700"
                >
                  Problem Statement
                </label>
                <Field
                  as="textarea"
                  name="problemStatement"
                  rows={4}
                  className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                />
                <ErrorMessage
                  name="problemStatement"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  HTML formatting is allowed
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Examples
                </label>

                <FieldArray name="examples">
                  {({ remove, push }) => (
                    <div className="space-y-4">
                      {values.examples.length > 0 &&
                        values.examples.map((example, index) => (
                          <div
                            key={index}
                            className="border p-4 rounded-md bg-gray-200"
                          >
                            <div className="flex justify-between mb-2">
                              <h3 className="text-md font-medium">
                                Example {index + 1}
                              </h3>
                              {index > 0 && (
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="bg-red-600 p-1  rounded-md text-white hover:bg-red-800"
                                >
                                  Remove
                                </button>
                              )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label
                                  htmlFor={`examples.${index}.inputText`}
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Input
                                </label>
                                <Field
                                  as="textarea"
                                  name={`examples.${index}.inputText`}
                                  rows={2}
                                  className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                                />
                                <ErrorMessage
                                  name={`examples.${index}.inputText`}
                                  component="div"
                                  className="text-red-500 text-sm mt-1"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor={`examples.${index}.outputText`}
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Output
                                </label>
                                <Field
                                  as="textarea"
                                  name={`examples.${index}.outputText`}
                                  rows={2}
                                  className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                                />
                                <ErrorMessage
                                  name={`examples.${index}.outputText`}
                                  component="div"
                                  className="text-red-500 text-sm mt-1"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor={`examples.${index}.explanation`}
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Explanation (optional)
                                </label>
                                <Field
                                  as="textarea"
                                  name={`examples.${index}.explanation`}
                                  rows={2}
                                  className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor={`examples.${index}.img`}
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Image URL (optional)
                                </label>
                                <Field
                                  name={`examples.${index}.img`}
                                  type="text"
                                  className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                                />
                              </div>
                            </div>
                          </div>
                        ))}

                      <button
                        type="button"
                        onClick={() =>
                          push({
                            id: values.examples.length,
                            inputText: "",
                            outputText: "",
                            explanation: "",
                            img: "",
                          })
                        }
                        className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                      >
                        Add Example
                      </button>
                    </div>
                  )}
                </FieldArray>
              </div>

              <div>
                <label
                  htmlFor="constraints"
                  className="block text-sm font-medium text-gray-700"
                >
                  Constraints
                </label>
                <Field
                  as="textarea"
                  name="constraints"
                  rows={3}
                  className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                />
                <ErrorMessage
                  name="constraints"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  HTML formatting is allowed
                </p>
              </div>

              <div>
                <label
                  htmlFor="starterCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Starter Code
                </label>
                <Field
                  as="textarea"
                  name="starterCode"
                  rows={5}
                  className="mt-1 p-1 block w-full rounded-md  shadow-sm   font-mono"
                />
                <ErrorMessage
                  name="starterCode"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="starterFunctionName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Starter Function Name
                </label>
                <Field
                  name="starterFunctionName"
                  type="text"
                  className="mt-1 p-1 block w-full rounded-md  shadow-sm  "
                />
                <ErrorMessage
                  name="starterFunctionName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="handlerFunction"
                  className="block text-sm font-medium text-gray-700"
                >
                  Handler Function
                </label>
                <Field
                  as="textarea"
                  name="handlerFunction"
                  rows={8}
                  className="mt-1 p-1 block w-full rounded-md  shadow-sm   font-mono"
                />
                <ErrorMessage
                  name="handlerFunction"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  {isSubmitting ? "Saving..." : "Save Problem"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateProblemPage;
