import { SyntheticEvent } from "react";

export interface AutoCompleteProps {
  options: string[];
  onChange: (e: any, v: string[]) => void;
  disabled?: string;
  id: string;
  label: string;
  value: string[];
}

export interface AutoCompleteSingleProps {
  value?: string | null;
  className?: string;
  id: string;
  label: string;
  onChange: (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ) => void;
  options: string[];
  disabled?: boolean;
  required?: boolean;
}
