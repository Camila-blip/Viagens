import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {Container, Logo, Reserva} from "./header.js";


export default function Header(){

    const reserveSize = useSelector(state => state.reserve.length);

    return(
        <Container>
            <Link to="/">
                <Logo src={logo} alt="Logo Projeto" />
            </Link>
            <Reserva  to="/reservas">
                <div>
                    <strong>Minhas reservas</strong>
                    <span>{reserveSize} reservas</span>
                </div>
            </Reserva>
        </Container>
    );
}