import { SellCar, CardCars } from "types";

export interface CarCardProps extends CardCars {
  user?: boolean;
  carDetails?: string;
  carReview?: string;
  style?: React.CSSProperties;
  addCompare?: (id: string) => void;
  deleteCompare?: (id: string) => void;
  isInCompare?: (id: string) => boolean;
  canEdit?: boolean;
  canDelete?: boolean;
  onEditCar?: (car: string) => void;
  car?: SellCar;
  onDeleteCar?: (id: string) => void;
  isLiked?: (id: string) => boolean;
  setLikedCar?: (id: string) => void;
}
