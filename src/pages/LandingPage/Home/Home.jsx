import Cta from "./Cta/Cta";
import Footer from "./Footer/Footer";
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
            <Footer />
		</>
	);
};

export default Home;
