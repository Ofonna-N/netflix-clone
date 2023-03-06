import React, { useRef, useState } from "react";
import "./_text-input.scss";

const TextInput = React.forwardRef(
  (
    { inputType = "email", inputLabel = "Email", id, hasDefault = false },
    inputRef
  ) => {
    // const inputRef = useRef();
    const [hasText, setHasText] = useState(hasDefault);

    return (
      <div className={`text-input `}>
        <input
          ref={inputRef}
          autoComplete="true"
          onMouseLeave={() => {
            setHasText(inputRef.current.value.trim().length > 0);
          }}
          onChange={() => {
            setHasText(inputRef.current.value.trim().length > 0);
          }}
          className={`text-input__input ${hasText ? "has-text" : ""}`}
          type={inputType}
          id={id}
          required
        />
        <label className="text-input__label" htmlFor={id}>
          {inputLabel}
        </label>
      </div>
    );
  }
);

export default TextInput;
