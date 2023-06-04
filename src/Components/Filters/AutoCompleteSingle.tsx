import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { AutoCompleteSingleProps } from "interfaces";

export const AutoCompleteSingle = ({
  value,
  options,
  onChange,
  id,
  label,
  disabled,
  required,
  className
}: AutoCompleteSingleProps) => {
  return (
    <Autocomplete
      className={`main_search_panel-brand-inner ${className}`}
      disablePortal
      id={`brand-select-${id}`}
      value={value}
      options={options}
      disabled={disabled}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} label={label} required={required} />
      )}
    />
  );
};
