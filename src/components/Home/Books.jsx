import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import AppRoutes from "../../Services/AppRoutes";

const Books = () => {
  const history = useNavigate();

  const books = [];

  const { data, isSuccess } = useQuery("books", () => {
    return axios
      .get("http://gutendex.com/books", "books", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        return result.data;
      });
  });

  data?.results.forEach((bookList) => {
    if (books.length < 6) {
      books.push(bookList);
    }
  });

  const handleNavigation = () => {
    history(AppRoutes.books);
  };

  return (
    <>
      <div className="flex flex-row justify-between mb-10 ml-5 mr-5">
        <p className="font-bold text-2xl">Popular Now</p>
        <p
          className="text-lg text-stone-400 cursor-pointer"
          onClick={handleNavigation}
        >
          View All
        </p>
      </div>
      <div className="flex flex-row justify-between m-5">
        {isSuccess &&
          books?.map((book) => {
            return (
              <div>
                <img src={book.formats["image/jpeg"]} width="180px" alt="img" />
                <p className="font-bold w-36">{book?.title}</p>
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
    </>
  );
};
export default Books;
