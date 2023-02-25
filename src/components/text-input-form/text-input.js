import { useRef, useState } from "react";
import "./_text-input.scss";

function TextInput({ inputType = "email", inputLabel = "Email" }) {
  const inputRef = useRef();
  const [hasText, setHasText] = useState(false);

  return (
    <div className={`text-input `}>
      <input
        ref={inputRef}
        autoComplete="true"
        onMouseLeave={() => {
          setHasText(inputRef.current.value.trim().length > 0);
        }}
        className={`text-input__input ${hasText ? "has-text" : ""}`}
        type={inputType}
        name=""
        id=""
        required
      />
      <label className="text-input__label">{inputLabel}</label>
    </div>
  );
}

export default TextInput;
