import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { api } from "../utils/api";
import BooksPageComponent from "../components/Books/Books";
import ReusableIntro from "../components/Intro";

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
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);
  const [search, setSearch] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [category, setCategory] = React.useState<string[]>([])
  const [debouncedSearch, setDebouncedSearch] = React.useState('')
  const [debouncedCategory, setDebouncedCategory] = React.useState<string[]>([])
  const [uniqueCategory, setUniqueCategory] = React.useState<string[]>()
  const [authorData, setAuthorData] = React.useState<string[]>()
  const [author, setAuthor] = React.useState<string[]>([])
  const [debouncedAuthor, setDebouncedAuthor] = React.useState<string[]>([])
  const token = useAppSelector(s => s.auth.token)


  const loadUniqueCategories = async () => {
    try {
      const data = await api.get("/book/categories", token ? token : '')
      if (data) {
        setUniqueCategory(data.categories)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const loadAuthorsData = async () => {
    try {
      const data = await api.get("/book/authors", token ? token : '')
      if (data) {
        setAuthorData(data.data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const loadBooks = async () => {
    try {
      const data = await api.post(`/book`, { page: page, limit: rowsPerPage, search: debouncedSearch, category: category, author: author }, token ? token : '');
      const withIds = data.data.map((item: book) =>
        item._id ? item : { ...item, _id: item._id },
      );
      setBooks(withIds);
      setTotal(data.totalCount);
      setLoading(false)
    } catch (error) {
      if (error) {
        console.log({ message: error });
      }
    }
  };

  useEffect(() => {
    if (search !== '' || category.length > 0 || author.length > 0) {
      setLoading(true)
      const timer = setTimeout(() => {
        search ? setDebouncedSearch(search) : ''
        category ? setDebouncedCategory([...debouncedCategory, ...category]) : []
        author ? setDebouncedAuthor([...debouncedAuthor, ...author]) : []
      }, 2500)
      return () => clearTimeout(timer)
    } else {
      loadBooks()
    }
  }, [search, category, page, rowsPerPage, author]);

  useEffect(() => {
    setLoading(true)
    loadUniqueCategories()
    loadAuthorsData()
  }, [])

  useEffect(() => {
    if (debouncedCategory.length > 0 || debouncedSearch.length > 0 || debouncedAuthor?.length > 0) {
      loadBooks();
      setDebouncedSearch('')
      setDebouncedCategory([])
      setDebouncedAuthor([])
    }
  }, [debouncedCategory, debouncedSearch, debouncedAuthor])

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-2!">
        <ReusableIntro pageName="Books" pageTitle="Books" previousPage="Home " path="books" />
        <BooksPageComponent
          data={books}
          serverSide={true}
          total={total}
          page={page}
          search={search}
          rowsPerPage={rowsPerPage}
          uniqueCategory={uniqueCategory}
          authorsData={authorData ? authorData : []}
          onPageChange={(newPage: number) => setPage(newPage)}
          onRowsPerPageChange={(newRows: number) => {
            setRowsPerPage(newRows);
            setPage(0);
          }}
          onSearch={(term: string) => {
            setSearch(term);
            setPage(0);
          }}
          setCategory={setCategory}
          setPage={setPage}
          setAuthor={setAuthor}
          loading={loading}
        />
      </div>
    </>
  );
}
