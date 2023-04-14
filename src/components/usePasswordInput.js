import { useState } from "react";

const usePasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    return showPassword ? "text" : "password";
  };

  return [getInputType, toggleShowPassword];
};

export default usePasswordInput;
