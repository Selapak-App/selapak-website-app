import NavBar from "../Home/NavBar/NavBar";
import About from "./About/About";
import Jumbotron from "./Jumbotron/Jumbotron";
import Footer from "../Home/Footer/Footer";
import Benefit from "./Benefit/Benefit";

const AboutUs = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<About />
			<Benefit />
			<Footer />
		</>
	);
};

export default AboutUs;
