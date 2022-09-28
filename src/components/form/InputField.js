import { useField } from "formik/dist/index";

const InputField = ({ label, ...props }) => {
  const [field, meta, onChangeEvent] = useField(props);

  const onChangeFile = (val) => {
    onChangeEvent(val);
  };
  return (
    <>
      {label !== undefined && <label className="form-label">{label}</label>}
      {/* {prepend !== undefined && (
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            {prepend}
          </span>
        </div>
      )} */}
      <input
        style={{ display: "inline-block" }}
        onChange={(e) => {
          if (onChangeEvent !== undefined) {
            onChangeFile(e.target.files[0]);
          }
        }}
        {...props}
        {...field}
        className={`form-control  ${meta.touched && meta.error ? "is-invalid" : ""
          } `}
        onWheel={(event) => {
          return props.type === "number" ? event.currentTarget.blur() : "";
        }}
      />
      <div className="invalid-feedback">{meta.error}</div>
    </>
  );
};

export default InputField;
