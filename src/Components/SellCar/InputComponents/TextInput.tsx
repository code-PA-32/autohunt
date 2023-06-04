import { TextField } from "@mui/material";
import { TextInputProps } from "interfaces";

export const TextInput = ({
  value,
  id,
  label,
  className,
  onChange,
  max,
  multiline,
  rows,
  type,
  required,
  name,
  readOnly,
  defaultValue
}: TextInputProps) => {
  return (
    <TextField
      value={value}
      id={id}
      name={name}
      required={required}
      type={type}
      label={label}
      className={className}
      onChange={onChange}
      variant="outlined"
      multiline={multiline}
      rows={rows}
      disabled={readOnly}
      inputProps={{ maxLength: max }}
      defaultValue={defaultValue}
    />
  );
};
