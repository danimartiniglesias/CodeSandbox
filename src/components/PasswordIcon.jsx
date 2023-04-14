import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordIcon = ({ showPassword, onToggle }) => {
  return (
    <div className="input-icon" onClick={onToggle}>
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </div>
  );
};

export default PasswordIcon;
