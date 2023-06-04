import "./credit.scss";
import { AutoCompleteSingle } from "Components/Filters/AutoCompleteSingle";
import { TextInput } from "Components/SellCar";
import { ChangeEvent, SyntheticEvent } from "react";

interface CreditProps {
  price: number;
  rate: number;
  updateInputData: (event: ChangeEvent<HTMLInputElement>) => void;
  months: string[];
  setMonth: (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => void;
  month: string;
  pay: number;
  toPay: string;
}

export const Credit = ({
  price,
  rate,
  updateInputData,
  months,
  setMonth,
  month,
  pay,
  toPay,
}: CreditProps) => {
  console.log(price);
  return (
    <div className="credit">
    <h3>Credit Simulation</h3>
    <div className="credit_simulation">
      <div className="credit_simulation-left">
        <TextInput
          defaultValue={
            price.toString()
          }
          readOnly
          id={"car_price"}
          className="car_price"
          type="string"
          label={"Price"}
          onChange={() => {}}
          max={10}
        />

        <TextInput
          value={rate.toString()}
          id={"car_rate"}
          className="car_rate"
          label={"Interest Rate %"}
          name="rate"
          onChange={updateInputData}
          max={2}
        />
        <AutoCompleteSingle
          value={month}
          id={"car_month"}
          className="car_month"
          label={"Period in Month"}
          onChange={setMonth}
          options={months}
        />

        <TextInput
          value={pay.toString()}
          className="car_payment"
          id={"car_payment"}
          label={"Down Payment"}
          name="pay"
          onChange={updateInputData}
          max={6}
        />
      </div>
      <div className="credit_simulation-right">
        <h4>Monthly Payment</h4>
        <span>$ &nbsp;&nbsp; {toPay} </span>
      </div>
    </div>
    </div>

  );
};
