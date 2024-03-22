import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    notes: Yup.string(),
    select: Yup.string().required("Select an option"),
    radio: Yup.string().required("Select an option"),
    percentage: Yup.number()
      .required("Percentage is required")
      .min(0, "Percentage must be greater than or equal to 0")
      .max(100, "Percentage must be less than or equal to 100"),
  });

export default validationSchema;
