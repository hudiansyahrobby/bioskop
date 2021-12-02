import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteMovie, getMovies } from "../actions/movieAction";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Movies from "../components/Movies/Movies";
import { toast } from "react-toastify";

export default function MoviePage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { movies } = useSelector((state) => state.movie);

  const [search, setSearch] = useState([]);

  const onDeleteMovie = async (id) => {
    const isConfirm = window.confirm("Yakin ingin menghapus?");
    if (isConfirm) {
      dispatch(deleteMovie(id, toast));
      dispatch(getMovies());
    }
  };

  const query = new URLSearchParams(props.location.search);
  const page = query.get("page") || 1;
  const searchQuery = query.get("s") || "";

  useEffect(() => {
    dispatch(
      getMovies({
        search: searchQuery,
        page: +page,
      })
    );
  }, [dispatch, searchQuery, page]);

  const onHandlePagination = (event) => {
    const pageNumber = +event.selected;
    history.push(`movies?s=${searchQuery}&page=${pageNumber + 1}`);
  };

  const onSearchHandler = (e) => {
    e.preventDefault();
    history.push(`movies?s=${search}&page=1`);
  };

  return (
    <Layout>
      <div className="mt-24">
        <Container>
          <h1 className="pt-8 text-4xl font-bold text-primary text-center tracking-wide">
            Daftar Movie
          </h1>

          {/* <Search
            onSearch={onSearchHandler}
            onChange={(e) => setSearch(e.target.value)}
          /> */}

          <div className="mt-6">
            <Movies movies={movies.items} onDelete={onDeleteMovie} />
            {movies.totalPage !== 0 && (
              <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={movies.totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
                onPageChange={onHandlePagination}
                pageClassName={"mr-2 text-gray-500 px-2"}
                previousClassName={"mr-2 text-gray-500"}
                nextClassName={"text-gray-500"}
                containerClassName={
                  "mb-8 flex justify-center mt-8 py-3 text-sm bg-info rounded-md font-bold"
                }
                activeClassName={"text-gray-900 bg-gray-300 rounded-md"}
                forcePage={+page - 1}
              />
            )}
          </div>
        </Container>
      </div>
    </Layout>
  );
}
