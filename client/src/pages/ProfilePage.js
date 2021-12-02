import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { getTicket } from "../actions/ticketAction";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner/Spinner";
import Tickets from "../components/Tickets/Tickets";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";

export default function ProfilePage(props) {
  const { user, authenticated } = useSelector((state) => state.user);
  const { ticket, loading, totalPage } = useSelector((state) => state.ticket);

  const dispatch = useDispatch();
  const history = useHistory();

  const query = new URLSearchParams(props.location.search);
  const page = query.get("page") || 1;

  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);

  const onHandlePagination = (event) => {
    const pageNumber = +event.selected;
    history.push(`profil?page=${pageNumber + 1}`);
  };

  if (!authenticated) {
    return <Redirect to="/masuk" />;
  }

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <h1 className="mt-32 text-center font-extrabold tracking-wider uppercase text-xl text-gray-600">
            Profil Saya
          </h1>
          <div className="mt-5">
            <div className="w-40 h-40 mx-auto">
              <img
                src={user?.profilPic || "https://picsum.photos/536/354"}
                alt={user?.nama}
                className="block w-full h-full rounded-full "
              />
            </div>
            <div>
              <h2 className="mt-8 text-center font-bold tracking-wider capitalize text-lg text-gray-600">
                {capitalizeFirstLetter(user.nama)}
              </h2>

              <div>
                <h2 className="mt-8 font-semibold tracking-wider text-gray-600">
                  Tiket Saya
                </h2>
                <Tickets data={ticket} />
              </div>
            </div>
          </div>

          {totalPage !== 0 && (
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              pageCount={totalPage}
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
        </Container>
      )}
    </Layout>
  );
}
