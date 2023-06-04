import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProps {
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  count: number;
  style?: React.CSSProperties;
}

export const PaginationBox = ({
  page,
  onChange,
  count,
  style,
}: PaginationProps) => {
  return (
    <div className="pagination" style={style}>
      <Stack spacing={2} className="pagination-inner">
        <Pagination
          page={page}
          size="large"
          onClick={() => window.scrollTo(0, 0)}
          onChange={onChange}
          count={count}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </div>
  );
};
