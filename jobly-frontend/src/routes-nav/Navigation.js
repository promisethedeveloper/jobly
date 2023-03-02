import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";

/** Navigation bar for the site. Shows up on every page
 *
 * When User is logged in, shows links to the main areas of the site.
 * When User is not logged in, show links to Login and Signup forms.
 *
 */

const Navigation = ({ logout }) => {
	const { currentUser } = useContext(UserContext);

	const loggedInNav = () => {
		return (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/companies">
						Companies
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/jobs">
						Jobs
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/profile">
						Profile
					</NavLink>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/" onClick={logout}>
						Log Out {currentUser.first_name || currentUser.username}
					</Link>
				</li>
			</ul>
		);
	};

	const loggedOutNav = () => {
		return (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/login">
						Login
					</NavLink>
				</li>
				<li className="nav-item mr-4">
					<NavLink className="nav-link" to="/signup">
						Sign Up
					</NavLink>
				</li>
			</ul>
		);
	};

	return (
		<nav className="Navigation navbar navbar-expand-md">
			<Link className="navbar-brand" to="/">
				Jobly
			</Link>
			{currentUser ? loggedInNav() : loggedOutNav()}
		</nav>
	);
};

export default Navigation;
