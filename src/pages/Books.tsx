import { FaBook } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useAppSelector } from "../redux/hooks";
import { FaBookBookmark } from "react-icons/fa6";
import { api } from "../utils/api";
import { BookCard, SearchBar } from "../components/Books";

interface book<T> {
  _id: T;
  book_name: T;
  description: T;
  author: T;
  category: T;
  quantity: T;
  book_image: null;
}

// function FilterSection() {
//   return (
//     <div className="filter-category">
//       <select
//         name="role"
//         className="select-role"
//         style={{
//           height: "50px",
//           border: "0px",
//           borderBottom: "2px solid grey",
//           borderRadius: "none",
//         }}
//         id="role"
//       >
//         <option value="">--Select Role--</option>
//         <option value="Fantasy">Fantasy</option>
//         <option value="Engineer">Engineer</option>
//         <option value="Finance">Finance</option>
//         <option value="Higher">Higher</option>
//         <option value="Management">Management</option>
//       </select>
//     </div>
//   );
// }

export default function Books() {
  const [handleRequest, setHandleRequest] = React.useState([
    {
      user_id: "",
      book_id: "",
      timestamp: "",
      req_status: "",
    },
  ]);
  const token = useAppSelector((s) => s.auth.token);
  const handleRequestSubmission = async <T extends string>(id: T) => {
    try {

      const result = await api.post(
        `/request/add/${id}`,
        { id },
        token ? token : "",
      );
      setHandleRequest(result);
    } catch (error) {
      console.log(error);
    }
  };

  const [books, setBooks] = useState([
    {
      _id: "",
      book_name: "",
      quantity: '',
      description: "",
      author: "",
      category: "",
      shelf_name: "",
      book_image: "",
    },
  ]);
  const [page, setPage] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredData = React.useMemo(() => {
    if (!searchTerm) return books;
    const lowercasedTerm = searchTerm.toLowerCase();

    return books.filter((row) => {
      return Object.values(row).some((val) =>
        String(val).toLowerCase().includes(lowercasedTerm),
      );
    });
  }, [books, searchTerm]);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const displayedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const LoadBooks = async () => {
    try {
      const data = await api.get("/book", token ? token : "");
      const withIds = data.Books.map((item: book<string>) =>
        item._id ? item : { ...item, _id: item._id ?? nanoid() },
      );
      setBooks(withIds);
    } catch (error) {
      if (error) {
        console.log({ message: error });
      }
    }
  };

  useEffect(() => {
    LoadBooks();
  }, []);

  const bookCardsData = displayedData.map((b) => {
    return (
      <BookCard key={b._id} id={b._id} src={`${import.meta.env.VITE_SERVER_URL}img/${b._id}`} category={b.category} bookName={b.book_name} description={b.description} quantity={b.quantity} handleRequestSubmission={handleRequestSubmission} />
    );
  });

  return (
    <>
      <div className="w-full justify-center">
        <div
          className="filter-Section mt-25! flex-col! w-310! p-6 mr-auto! ml-auto! justify-items-start items-start"
          style={{ gap: "20px" }}
        >
          <h1 className="text-4xl w-full! p-3 mb-5 flex gap-3 border-2 rounded-2xl border-gray-500 justify-center font-bold text-gray-400">
            <FaBookBookmark />
            Requested Books Inventory
          </h1>

          <SearchBar
            key={nanoid()}
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
          {/* <FilterSection /> */}
        </div>
        {displayedData.length == 0 ? (
          <div className="w-full! flex  gap-2 justify-center! mb-10 text-7xl p-50">
            <FaBook /> Book Not Found
          </div>
        ) : (
          <section className="book-card-containers w-310! ml-auto! mr-auto!">
            {bookCardsData}
          </section>
        )}
      </div>
    </>
  );
}
