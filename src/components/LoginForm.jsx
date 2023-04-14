import React from "react";
import usePasswordInput from "./usePasswordInput";
import PasswordIcon from "./PasswordIcon";

const LoginForm = () => {
  const [getInputType, toggleShowPassword] = usePasswordInput();

  return (
    <form>
      <div>
        <label htmlFor="password">Password</label>
        <div className="input-group">
          <input
            id="password"
            type={getInputType()}
            placeholder="Enter password"
          />
          <PasswordIcon
            showPassword={getInputType() === "text"}
            onToggle={toggleShowPassword}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
