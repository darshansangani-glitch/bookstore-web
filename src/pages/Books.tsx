import { FaBook } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

interface book {
  _id: string;
  book_name: string;
  description: string;
  author: string;
  category: string;
  quantity: number;
  book_image: null;
}

interface props<T> {
  searchTerm: string;
  handleSearchChange: HTMLInputElement;
  handleRequestSubmission: (row: T) => void;
}

function SearchBar<T extends { _id?: string | number; id?: string | number }>({
  searchTerm,
  handleSearchChange,
}: props<T>) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search Books..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

function FilterSection() {
  return (
    <div className="filter-category">
      <select
        name="role"
        className="select-role"
        style={{
          height: "50px",
          border: "0px",
          borderBottom: "2px solid grey",
          borderRadius: "none",
        }}
        id="role"
      >
        <option value="">--Select Role--</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Engineer">Engineer</option>
        <option value="Finance">Finance</option>
        <option value="Higher">Higher</option>
        <option value="Management">Management</option>
      </select>
    </div>
  );
}

function BookCards<T>({ handleRequestSubmission }:props<T>) {
  const token = localStorage.getItem("token-info");

  const [books, setBooks] = useState([
    {
      _id: "",
      book_name: "",
      quantity: 0,
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
      const url = `${import.meta.env.VITE_API_URL}/book`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token ? ` ${token}` : "",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const withIds = data.Books.map((item: book) =>
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
      <div
        className="w-62.5 flex flex-col gap-2 justify-center! mb-10"
        key={b._id}
      >
        <div className="w-62.5 relative">
          {/* <img
            className="w-60 rounded-xl h-80"
            src={`${import.meta.env.VITE_SERVER_URL}img/${b._id}`}
            // alt={b.book_image}
          />
          <p style={{ color: "orange", fontWeight: "700", fontSize: "24px" }}>
            {b.category}
          </p> */}
          <img
            src={`${import.meta.env.VITE_SERVER_URL}img/${b._id}`}
            alt=""
            className="w-60 rounded-xl h-80"
          />
          <span className="absolute left-2  top-2 text-white font-extrabold text-[12px] bg-orange-300  rounded-2xl pl-2 pr-2    ">
            {b.category}
          </span>
        </div>
        <div className="flex flex-col p-3">
          <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis  font-bold text-gray-500 text-xl">
            {b.book_name}
          </p>
          <p className="whitespace-nowrap overflow-hidden text-ellipsis ">
            {b.description}
          </p>

          <p className="font-semibold text-[18px]">
            Quantity: <span className="font-medium">{b.quantity}</span>
          </p>
          {/* <p
            className="flex gap-2 items-center text-[20px] "
            style={{ color: b.quantity > 1 ? "green" : "red" }}
          >
            <FaRegCheckCircle />
            {b.quantity > 1 ? "In Stock" : "Out Of Stock"}
          </p> */}
        </div>
        <button
          className="w-full border p-4 rounded-2xl bg-orange-300 text-xl text-white hover:bg-amber-500 font-bold"
          type="submit"
          onClick={()=>handleRequestSubmission(b._id)}
        >
          Request Book
        </button>
      </div>
    );
  });

  return (
    <>
      <section
        className="filter-Section mt-25! justify-items-start"
        style={{ gap: "20px" }}
      >
        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <FilterSection />
      </section>
      {displayedData.length == 0 ? (
        <div className="w-full! flex  gap-2 justify-center! mb-10 text-7xl p-50">
          <FaBook /> Book Not Found
        </div>
      ) : (
        <section className="book-card-containers">{bookCardsData}</section>
      )}
    </>
  );
}

export default function Books() {
  const [handleRequest, setHandleRequest] = React.useState([
    {
      user_id: "",
      book_id: "",
      timestamp: "",
      req_status: "",
    },
  ]);
  const token = localStorage.getItem("token-info");
  const handleRequestSubmission = async <T extends string>(id:T) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/request/add/${id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token ? ` ${token}` : "",
        },
        // body: JSON.stringify(handleRequest),
      });
      console.log('response', response)
      if(!response.ok){
        const errorText = await response.text();
        console.error("Server error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      
      setHandleRequest(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main>
        <FilterSection />
        <BookCards handleRequestSubmission={handleRequestSubmission} />
      </main>
    </>
  );
}
