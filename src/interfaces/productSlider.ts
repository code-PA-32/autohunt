export interface ProductSliderProps {
  images: string[];
  currentIndex: number;
  goToSlide: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  views?: number | null;
}
