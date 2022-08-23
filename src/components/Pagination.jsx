import { Pagination } from "@mui/material";

const Paginate = ({ count, handlePagination }) => {
  let DefaultPageSize = 10;
  return (
    <div>
      <div className="flex justify-center">
        <Pagination
          onChange={(_e, value) => {
            handlePagination(value);
          }}
          count={Math.ceil(count / DefaultPageSize)}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};
export default Paginate;
