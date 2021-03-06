import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, Logo } from "./NavBarElements";
import { BtnLinkPrimary } from "../Buttons";
import { useSelector } from "react-redux";

const NavBar = () => {
	const isLogged = useSelector((state) => state.auth.isLogged);

	return (
		<>
			<Nav>
				<NavLink to="/">
					<Logo />
					<h1 style={{ margin: "0.5rem" }}>It</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/services" activeStyle>
						Services
					</NavLink>
					<NavLink to="/contact-us" activeStyle>
						Contact Us
					</NavLink>
					{!isLogged ? (
						<NavLink to="/signUp" activeStyle>
							Sign Up
						</NavLink>
					) : (
						<div></div>
					)}
					{isLogged ? (
						<NavLink to="/projects" activeStyle>
							Projects
						</NavLink>
					) : (
						<div></div>
					)}
				</NavMenu>
				{!isLogged ? (
					<NavBtn>
						<BtnLinkPrimary to="/login">Login</BtnLinkPrimary>
					</NavBtn>
				) : (
					<div></div>
				)}
			</Nav>
		</>
	);
};

export default NavBar;
