import { PageLogos } from "Components/PageLogos";
import { useMainPageLogos } from "./useMainPageLogos";

export const MainPageLogos = () => {
  const { logos, onSetBrandFilter } = useMainPageLogos();

  return <PageLogos logos={logos} onSetFilter={onSetBrandFilter} />;
};
