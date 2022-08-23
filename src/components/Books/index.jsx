import axios from "axios";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Rating } from "@mui/material";
import { useQuery } from "react-query";
import Paginate from "../Pagination";

const Books = () => {
  const [pageNumber, setpageNumber] = useState(1);

  const { isLoading, data, isSuccess } = useQuery(["books", pageNumber], () => {
    return axios
      .get(`http://gutendex.com/books/?page=${pageNumber}`, "books", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        return result.data;
      });
  });

  const handlePagination = (page) => {
    setpageNumber(page);
  };

  return (
    <div>
      {isLoading && (
        <div className="grid justify-center mt-28">
          <CircularProgress color="inherit" />
        </div>
      )}
      <div className="grid grid-cols-3 gap-4 ml-36 mt-28">
        {isSuccess &&
          data?.results?.map((book) => {
            return (
              <div className="w-96 mb-10">
                <img
                  src={book.formats["image/jpeg"]}
                  width="200px"
                  height="200px"
                  alt="img"
                />
                <p className="font-bold text-sm w-56">{book?.title}</p>
                <p className="text-stone-400">
                  {book?.authors?.map((author) => author?.name)}
                </p>
                <Rating
                  name="read-only"
                  value={Math.floor(Math.random() * 5) + 1}
                  readOnly
                />
              </div>
            );
          })}
      </div>
      <Paginate count={data?.count} handlePagination={handlePagination} />
    </div>
  );
};
export default Books;
