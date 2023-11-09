import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getByName, sortUsers } from "../../redux/actions";
import "./home.styles.css";
import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9; // Number of users to display per page

  // Calculate the index range for users on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchString));
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="home">
      <h2 className="home-title">Home</h2>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Sort Buttons */}
      <div className="sort-buttons">
        <button onClick={() => dispatch(sortUsers("asc"))}>Sort Ascending</button>
        <button onClick={() => dispatch(sortUsers("desc"))}>Sort Descending</button>
      </div>

      {/* Display Users on the Current Page */}
      <Cards allUsers={allUsers.slice(indexOfFirstUser, indexOfLastUser)} />
    </div>
  );
}

export default Home;
