import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaBoxOpen } from "react-icons/fa";
import { Button, Theme, withStyles } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

export const Nav = styled.nav`
	background: #000;
	height: 66px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	z-index: 10;
`;

export const Logo = styled(FaBoxOpen)`
	color: #fff;
	font-size: 2.2rem;
`;

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		color: #15cdfc;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #fff;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -25px;

	white-space: nowrap;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: #256ce1;
//     padding: 10px 22px;
//     margin: 10px;
//     color: #fff;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #010606
//     }
// `;
