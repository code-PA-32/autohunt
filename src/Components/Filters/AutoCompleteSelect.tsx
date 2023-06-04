import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { AutoCompleteProps } from "interfaces";

export const AutoCompleteSelect = ({
  options,
  onChange,
  disabled,
  id,
  label,
  value
}: AutoCompleteProps) => {
  return (
    <Autocomplete
      multiple
      id={`checkboxes-tags-${id}`}
      className="main_search_panel-model-inner"
      options={options}
      value={value}
      disabled={disabled === null}
      onChange={onChange}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox style={{ marginRight: 8 }} checked={selected} />
          {option}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
