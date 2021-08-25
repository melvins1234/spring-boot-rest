import React from "react";

export const Input = ({ field, fieldChanged, type, value, required, placeholder, className }) => {
  return (
    <div key={field._uid} className="sign-up__input-group">
      <input
        type={type || field.component}
        id={field._uid}
        name={field._uid}
        value={value}
        required={required}
        placeholder={placeholder}
        // onChange={e => fieldChanged(field._uid, e.target.value)}
      />
      <label className={className} htmlFor={field._uid}>{field.label}</label>
    </div>
  );
};

export const Button = ({ className, type, value }) => {
  return (
    <button 
        className={className} 
        type={type}
        >
        {value}
    </button>
  );
};
