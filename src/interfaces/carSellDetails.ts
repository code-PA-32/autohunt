export interface CarDetailsProps {
    carLabel: string;
    onChangeTextLabel: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeBody: (event: any, newValue: string | null) => void;
    bodies: Array<string>;
    body: string;
    onChangeBrand: (event: any, newValue: string | null) => void;
    brands: Array<string>;
    brand: string;
    years: Array<string>;
    year: string;
    onChangeYear: (event: any, newValue: string | null) => void;
    onChangePass: (event: any, newValue: string | null) => void;
    passengers: string;
    condition: boolean;
    onChangeCondition: (event: React.ChangeEvent<HTMLInputElement>) => void;
    models: Array<string>;
    model: string;
    onChangeModel: (event: any, newValue: string | null) => void;
    color: string;
    colors: Array<string>;
    onChangeColor: (event: any, newValue: string | null) => void;
    description: string;
    onChangeDescription: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }