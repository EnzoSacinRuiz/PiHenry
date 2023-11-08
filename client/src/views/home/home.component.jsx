import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers,getByName } from "../../redux/actions";
import "./home.styles.css";
import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const [searchString, setSearchString] = useState("");
  //const [filtered, setFiltered] = useState(allUsers); // Initialize with all users

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  //* Filtro con el Backend
  function handleSubmit (e){
    e.preventDefault()
    dispatch(getByName(searchString))
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const filteredUsers = allUsers.filter((user) =>
  //     user.driverRef.toLowerCase().includes(searchString.toLowerCase())
  //   );
  //   setFiltered(filteredUsers);
  // }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
//console.log("filtered",filtered);
console.log("allUsers",allUsers);

  return (
    <div className="home">
      <h2 className="home-title">Home</h2>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      {/* <Cards allUsers={filtered.length === 0 ? allUsers : filtered} /> */}
      <Cards allUsers={allUsers} />
    </div>
  );
}

export default Home;
