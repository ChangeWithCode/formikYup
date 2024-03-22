const ErrorMessage = ({ ...props }) => {
  return (
    <>
      {props.meta.touched && props.meta.error && (
        <div className="mt-1 inset-x-0 bottom-0 text-red-500 text-xs">
          {props.meta.error}
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
