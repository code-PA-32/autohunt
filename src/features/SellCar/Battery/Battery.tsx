import "./battery.scss";
import { useBattery } from "./useBattery";
import { AutoCompleteSingle } from "Components/Filters/AutoCompleteSingle";
export const CarBattery = () => {
  const {
    batteries,
    battery,
    handleChangeBatteryCap,
    chargeTime,
    chargeTimes,
    chargeType,
    chargeTypes,
    handleChangeChargeTime,
    handleChangeChargeType,
    flag,
  } = useBattery();
  return (
    <>
      {flag && (
        <div className="car_battery">
          <h3>Battery Details</h3>
          <AutoCompleteSingle
            options={batteries}
            value={battery || null}
            id="battery_select"
            label="Battery Capacity"
            required
            onChange={handleChangeBatteryCap}
            className="battery_select"
          />
          <AutoCompleteSingle
            options={chargeTimes}
            value={chargeTime || null}
            id="battery_time"
            label="Charging Time"
            required
            onChange={handleChangeChargeTime}
            className="battery_time"
          />
          <AutoCompleteSingle
            options={chargeTypes}
            value={chargeType || null}
            id="charging_type"
            label="Charging Type"
            required
            onChange={handleChangeChargeType}
            className="charging_type"
          />
        </div>
      )}
    </>
  );
};
