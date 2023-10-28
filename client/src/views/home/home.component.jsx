import "./home.styles.css"
import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";


function Home() {
    return(
        <div>
            <p>Estás en el home page</p>
            <Navbar />
            <Cards/>
        </div>
    );    
}

export default Home;