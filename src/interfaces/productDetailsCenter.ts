export interface ProductDetailsCenterProps {
  description: string;
  features: Array<string>;
  length: boolean;
  height: boolean;
  setLength: () => void;
  setHeight: () => void;
}
