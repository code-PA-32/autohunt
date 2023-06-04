import { ViewPanel } from "Components/ViewPanel";
import { useViewPanel } from "./useViewPanel";

export const ViewPanelContainer = () => {
  const {
    sort,
    total,
    view,
    term,
    handleChangeTerm,
    handleChangeView,
    handleSortChange,
  } = useViewPanel();
  return (
    <ViewPanel
      term={term}
      view={view}
      onChangeTerm={handleChangeTerm}
      total={total}
      onSortChange={handleSortChange}
      sort={sort}
      onViewChange={handleChangeView}
    />
  );
};
