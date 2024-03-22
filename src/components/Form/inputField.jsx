import { Field } from "formik";
import ErrorMessage from "../Errors/ErrorMessage";

const InputField = ({ name, placeholder }) => (
  <Field name={name}>
    {({ field, meta }) => (
      <div className="relative">
        <input
          {...field}
          id={name}
          type="text"
          placeholder={placeholder}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <ErrorMessage meta={meta}></ErrorMessage>
      </div>
    )}
  </Field>
);

export default InputField;
