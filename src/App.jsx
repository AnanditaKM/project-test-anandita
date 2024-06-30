import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Ideas from "./pages/Ideas"
import Work from "./pages/Work"
import './App.css'

const MainLayout = ({ children }) => (
	<>
		<Navbar />
		{children}
	</>
)

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default function App() {
	return (
		<BrowserRouter>
			<Helmet>
				<title>Suitmedia</title>
			</Helmet>
			<Routes>
				<Route
					path="/project-test-anandita"
					element={
						<MainLayout>
							<Banner/>
							<Ideas/>
						</MainLayout>
					}
				/>
				<Route
					path="/work"
					element={
						<MainLayout>
							<Banner/>
							<Work />
						</MainLayout>
					}
				/>
				{/* <Route
					path="/about"
					element={
						<MainLayout>
							<Banner/>
							<About />
						</MainLayout>
					}
				/>
				<Route
					path="/services"
					element={
						<MainLayout>
							<Banner/>
							<Services />
						</MainLayout>
					}
				/>
				<Route
					path="/careers"
					element={
						<MainLayout>
							<Banner/>
							<Careers />
						</MainLayout>
					}
				/>
				<Route
					path="/contact"
					element={
						<MainLayout>
							<Banner/>
							<Contact />
						</MainLayout>
					}
				/>
		 */}
			</Routes>
		</BrowserRouter>
	)
}