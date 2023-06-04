import "./mainPageFilters.scss";
import { Link } from "react-router-dom";
import { useCarFilters } from "./useCarFiltersSlice";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Slider } from "@mui/material";
import { AutoCompleteSelect } from "Components/Filters";
import { AutoCompleteSingle } from "Components/Filters/AutoCompleteSingle";

export const MainPageFilters = () => {
  const {
    brand,
    price,
    term,
    brands,
    models,
    model,
    location,
    locations,
    condition,
    handleChangePrice,
    handleChangeBrand,
    handleChangeModel,
    handleChangeTerm,
    handleChangeLocation,
    handleSetNew,
    handleSetUsed,
    handleSetAll,
    handleOnSearch,
  } = useCarFilters();

  return (
    <div className="main_search_panel">
      <div className="main_search_panel-radio">
        <label htmlFor="all" className={condition === "" ? `active-label` : ""}>
          All
        </label>
        <input
          type="radio"
          id="all"
          name="condition"
          value=""
          defaultChecked
          onClick={handleSetAll}
        />
        <label
          htmlFor="new"
          className={condition === true ? `active-label` : ""}
        >
          New
        </label>
        <input type="radio" id="new" name="condition" onClick={handleSetNew} />
        <label
          htmlFor="used"
          className={condition === false ? `active-label` : ""}
        >
          Used
        </label>
        <input
          type="radio"
          id="used"
          name="condition"
          onClick={handleSetUsed}
        />
      </div>
      <div className="main_search_panel-brand">
        <AutoCompleteSingle
          id="brand"
          label="Brand"
          onChange={handleChangeBrand}
          value={brand as string}
          options={brands}
        />
      </div>
      <div className="main_search_panel-model">
        <AutoCompleteSelect
          options={models}
          value={model}
          disabled={brand as string}
          id="model"
          label="Model"
          onChange={handleChangeModel}
        />
      </div>
      <div className="main_search_panel-search">
        <Paper
          className="main_search_panel-search-inner"
          component="form"
          onSubmit={handleOnSearch}
          sx={{
            color: "white",
            backgroundColor: "#152836",
          }}
        >
          <SearchIcon />
          <InputBase
            onChange={handleChangeTerm}
            value={term}
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search"
            type="search"
          />
        </Paper>
      </div>
      <div className="main_search_panel-location">
        <AutoCompleteSelect
          id="location"
          value={location}
          label="Location"
          onChange={handleChangeLocation}
          options={locations}
        />
      </div>
      <div className="main_search_panel-range">
        <Box className="main_search_panel-range-inner">
          <div className="main_search_panel-range-inner-price">
            <span>Price Range</span>
            <div>
              {Array.isArray(price) && (
                <>
                  <span>${price[0]}</span> - <span>${price[1]}</span>
                </>
              )}
            </div>
          </div>

          <Slider
            value={price}
            min={0}
            max={300000}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
      <div className="main_search_panel-button">
        <Link to={"/search-results"}>Search</Link>
      </div>
    </div>
  );
};
