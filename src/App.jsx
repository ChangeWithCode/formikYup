import "./App.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./components/Form/inputField";
import TextAreaField from "./components/Form/TextAreaField";

function App() {
  const initialValues = {
    name: "",
    phone: "",
    address: "",
    email: "",
    notes: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    notes: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log(values);
    // Add your submission logic here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="max-w-md mx-auto mt-8">
        <div className="grid grid-cols-1 gap-6">
          <InputField name="name" placeholder="Name" />
          <InputField name="phone" placeholder="Phone" />
          <InputField name="address" placeholder="Address" />
          <InputField name="email" placeholder="Email" />
          <TextAreaField name="notes" placeholder="Notes" />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default App;
