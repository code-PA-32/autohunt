export interface TextInputProps {
  value?: string;
  id: string;
  label: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  max: number;
  multiline?: boolean;
  rows?: number;
  type?: string;
  required?: boolean;
  error?: boolean;
  name?: string;
  readOnly?: boolean;
  defaultValue?: string;
}
