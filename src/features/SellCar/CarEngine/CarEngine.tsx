import { AutoCompleteSingle } from "Components/Filters/AutoCompleteSingle";
import { TextInput } from "Components/SellCar";
import { useCarEngine } from "./useCarEngine";
import "./carEngine.scss";

export const CarEngine = () => {
  const {
    engCapacity,
    engine,
    engines,
    driveUnit,
    driveUnits,
    miles,
    transmission,
    transmissions,
    power,
    handleChangeEngine,
    handleChangeDrive,
    handleChangeMiles,
    handleChangeCapacity,
    handleChangeTransmission,
    handleChangePower,
  } = useCarEngine();
  return (
    <div className="engine_details">
      <h3>Engine Details</h3>
      <AutoCompleteSingle
        options={engines}
        id="car_engine"
        required
        value={engine || null}
        label="Fuel Type"
        onChange={handleChangeEngine}
        className="car_engine"
      />
      <AutoCompleteSingle
        options={driveUnits}
        id="car_drive"
        required
        value={driveUnit || null}
        label="Drive Train"
        onChange={handleChangeDrive}
        className="car_drive"
      />
      <TextInput
        value={miles}
        onChange={handleChangeMiles}
        id="car_description"
        max={6}
        required
        className="car_milage"
        label="Mileage (km)"
      />
      <TextInput
        value={engCapacity}
        onChange={handleChangeCapacity}
        id="car_engCapacity"
        max={4}
        required
        className="car_engCapacity"
        label="Engine Capacity (cc)"
      />
      <AutoCompleteSingle
        options={transmissions}
        id="car_transmission"
        value={transmission || null}
        label="Transmission"
        required
        onChange={handleChangeTransmission}
        className="car_transmission"
      />
      <TextInput
        value={power}
        onChange={handleChangePower}
        id="car_power"
        max={4}
        required
        className="car_power"
        label="Power (hp)"
      />
    </div>
  );
};
