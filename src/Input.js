import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        id={props.id}
        ref={ref}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;
