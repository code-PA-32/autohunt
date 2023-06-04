import { ChangeEvent, SyntheticEvent, useState } from "react";

export const useCreditCalc = (price: number) => {
  const [inputData, setInputData] = useState({
    month: "12",
    rate: 2,
    pay: 10000,
  });
  const months: string[] = ["12", "18", "24", "30", "36", "42", "54", "60"];

  const computeLoan = (): string => {
    const interest =
      ((price - inputData.pay) * (inputData.rate * 0.01)) / +inputData.month;

    const payment = ((price - inputData.pay) / +inputData.month + interest)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return inputData.pay > price ? "0" : payment;
  };
  const payment = computeLoan();

  const updateInputData = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: +event.target.value,
    }));
  };
  const setMonth = (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    if (value)
      setInputData((prev) => ({
        ...prev,
        month: value,
      }));
  };
  return {
    months,
    setMonth,
    updateInputData,
    payment,
    month: inputData.month.toString(),
    rate: inputData.rate,
    pay: inputData.pay,
  };
};
