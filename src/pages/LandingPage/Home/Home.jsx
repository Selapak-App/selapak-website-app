import JoinMitra from "./JoinMitra/JoinMitra";
import Jumbotron from "./Jumbotron/Jumbotron";
import NavBar from "./NavBar/NavBar";
import Pillar from "./Pillar/Pillar";
import Product from "./Product/Product";

const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
            <JoinMitra />
            <Product />
            <Pillar />
		</>
	);
};

export default Home;
