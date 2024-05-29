import JoinMitra from "./JoinMitra/JoinMitra";
import Jumbotron from "./Jumbotron/Jumbotron";
import NavBar from "./NavBar/NavBar";
import Product from "./Product/Product";

const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
            <JoinMitra />
            <Product />
		</>
	);
};

export default Home;
