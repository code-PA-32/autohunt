import { SelectChangeEvent, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ViewPanelProps {
  term: string;
  view: string;
  onChangeTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  total: number;
  onSortChange: (event: SelectChangeEvent<string>) => void;
  sort: string;
  onViewChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
