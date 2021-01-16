import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import NavbarPage from "./components/NavbarPage";
import FooterPage from "./components/FooterPage";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="page-container">
				<div className="content-wrap">
					<NavbarPage />
					<Switch>
						<Route path="/" component={HomePage} exact />
						<Route path="/about" component={AboutPage} />
						<Route path="/project" component={ProjectPage} />
						<Route path="/contact" component={ContactPage} />
					</Switch>
				</div>
				<FooterPage />
			</div>
		</Router>
	);
}
export default App;
