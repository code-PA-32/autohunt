import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ViewPanelProps } from "interfaces";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";

import "./viewPanel.scss";

export const ViewPanel = ({
  term,
  onChangeTerm,
  total,
  view,
  onSortChange,
  sort,
  onViewChange,
}: ViewPanelProps) => {
  const sortOptions = [
    {
      name: "yearHight",
      value: "yearHight",
      label: "Year",
      icon: <ArrowDownwardIcon />,
    },
    {
      name: "yearLow",
      value: "yearLow",
      label: "Year",
      icon: <ArrowUpwardIcon />,
    },
    {
      name: "priceHight",
      value: "priceHight",
      label: "Price",
      icon: <ArrowDownwardIcon />,
    },
    {
      name: "priceLow",
      value: "priceLow",
      label: "Price",
      icon: <ArrowUpwardIcon />,
    },
  ];

  const buttons = [
    {
      name: "flex",
      icon: <TableRowsRoundedIcon fontSize="inherit" />,
      className: "flex",
    },
    {
      name: "grid",
      icon: <AppsRoundedIcon fontSize="inherit" />,
      className: "grid",
    },
  ];

  return (
    <div className="tiny_panel_view">
      <Paper
        className="tiny_panel_view-search"
        component="form"
        onSubmit={(e) => e.preventDefault()}
        sx={{
          color: "white",
          backgroundColor: "#071620",
        }}
      >
        <SearchIcon />
        <InputBase
          onInput={onChangeTerm}
          value={term}
          sx={{ ml: 1, flex: 1, color: "white" }}
          placeholder="Search"
          type="search"
        />
      </Paper>
      <div className="tiny_panel_view-results">
        {total} {+total <= 1 ? "Result" : "Results"}
      </div>
      <FormControl className="tiny_panel_view-select">
        <InputLabel id="sort-by">Sort By</InputLabel>
        <Select
          labelId="sort-by"
          id="sort-by"
          value={sort}
          label="Sort By"
          onChange={onSortChange}
        >
          {sortOptions.map((item) => {
            return (
              <MenuItem
                key={item.name}
                value={item.value}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {item.label} {item.icon}
                </div>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <div className="tiny_panel_view-buttons">
        {buttons.map((item) => (
          <button
            className={`${item.className} ${
              view === item.name ? "active" : ""
            }`}
            onClick={onViewChange}
            key={item.name}
            name={item.name}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};
