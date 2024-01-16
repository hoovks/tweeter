import { ChangeEvent } from "react";
import { InputAdornment, TextField } from "@mui/material";
interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: any;
}

export const InputField = ({
  placeholder,
  type,
  value,
  onChange,
  icon,
}: InputProps) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
};
