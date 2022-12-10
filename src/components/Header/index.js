import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {Container, Logo, Reserva} from "./header.js";

export default function Header(){
	return(
		<Container>
			<Link to="/">
				<Logo src={logo} alt="Logo Projeto" />
			</Link>
			<Reserva  to="/reservas">
				<div>
					<strong>Minhas reservas</strong>
					<span>0 reservas</span>
				</div>
			</Reserva>
		</Container>
	);
}