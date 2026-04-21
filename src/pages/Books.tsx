import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { api } from "../utils/api";
import AllBooks from "../components/Books/Books";
import bg1 from '../assets/hobbitbg.jpg'
import Intro from "../components/Intro";
export interface book {
  _id: string;
  book_name: string;
  description: string;
  author: string;
  category: string;
  quantity: string;
  book_image: string;
  book_image_filename: string
}

export default function Books() {
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
      book_image_filename: ''
    },
  ]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [category, setCategory] = React.useState("")
  const [uniqueCate, setUniqueCate] = React.useState<string[]>()

  const token = useAppSelector(s => s.auth.token)
  const loadBooks = async () => {
    try {
      setLoading(true)
      const data = await api.get(`/book?page=${page + 1}&limit=${rowsPerPage}&search=${search}&category=${category}`, token ? token : '');
      const withIds = data.Books.map((item: book) =>
        item._id ? item : { ...item, _id: item._id },
      );
      setBooks(withIds);
      setTotal(data.totalCount);
      setUniqueCate(data.category)
      setLoading(false)
    } catch (error) {
      if (error) {
        console.log({ message: error });
      }
    }
  };

  useEffect(() => {
    loadBooks()
  }, [search, category, page]);

  return (
    <>
      <div className="w-full justify-center mt-2!">
        <Intro title={'Books'} content={'Browse Books And Request them and Read them...'} src={bg1} />
          <AllBooks
            data={books}
            serverSide={true}
            total={total}
            page={page}
            search={search}
            rowsPerPage={rowsPerPage}
            uniqueCategory={uniqueCate}
            onPageChange={(newPage: number) => setPage(newPage)}
            onRowsPerPageChange={(newRows: number) => {
              setRowsPerPage(newRows);
              setPage(0);
            }}
            onSearch={(term: string) => {
              setSearch(term);
              setPage(0);
            }}
            onCategory={(term: string) => {
              setCategory(term)
              setPage(0)
            }}
            loading={loading}
          />
        </div>
    </>
  );
}
