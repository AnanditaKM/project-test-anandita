import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const route = useLocation();
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <nav className={`navbar navbar-expand fixed-top ${visible ? "navbar-show" : "navbar-hide"} ${prevScrollPos < 10 ? "bg-orange" : "bg-orange-transparent"}`}>
            <div className="container">
                <div className="col-lg-1"> 
                    <Link to="/">
                        <img src="/asset/logo.png" className="img-fluid " alt="this is logo image" />
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> 
                <div className="collapse navbar-collapse gap-4" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center gap-2">
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${route.pathname === "/work" ? "active" : ""}`}
                                aria-current="page"
                                to="/"
								style={{ color: route.pathname === "/" ? "white" : "" }}
                            >
                                Work
                            </Link>
                        </li>
						<li className="nav-item">
                            <Link
                                className={`nav-link ${route.pathname === "/about" ? "active" : ""}`}
                                aria-current="page"
                                to="/"
								style={{ color: route.pathname === "/" ? "white" : "" }}
                            >
                                About
                            </Link>
                        </li>
						<li className="nav-item">
                            <Link
                                className={`nav-link ${route.pathname === "/services" ? "active" : ""}`}
                                aria-current="page"
                                to="/"
								style={{ color: route.pathname === "/" ? "white" : "" }}
                            >
                                Services
                            </Link>
                        </li>
						<li className="nav-item">
                            <Link
                                className={`nav-link ${route.pathname === "/" ? "active" : ""}`}
                                aria-current="page"
                                to="/"
								style={{ color: route.pathname === "/" ? "white" : "" }}
                            >
                                Ideas
                            </Link>
                        </li>
						<li className="nav-item">
                            <Link
                                className={`nav-link ${route.pathname === "/careers" ? "active" : ""}`}
                                aria-current="page"
                                to="/"
								style={{ color: route.pathname === "/" ? "white" : "" }}
                            >
                                Careers
                            </Link>
                        </li>
						<li className="nav-item">
                            <Link
                                className={`nav-link ${route.pathname === "/contact" ? "active" : ""}`}
                                aria-current="page"
                                to="/"
								style={{ color: route.pathname === "/" ? "white" : "" }}
                            >
                                Contact
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}
