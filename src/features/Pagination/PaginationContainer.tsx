import { PaginationBox } from "Components/Pagination";
import { usePagination } from "./usePagination";

export const PaginationContainer = () => {
  const { currentPage, handleChangePagination, totalPages } = usePagination();

  return (
    <PaginationBox
      page={currentPage}
      onChange={handleChangePagination}
      count={totalPages}
    />
  );
};
