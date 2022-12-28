import {MdDelete} from "react-icons/md";
import { useSelector } from "react-redux";
import {Footer,Reserva,Title } from "./reservas";

export default function Reservas(){
    const reserves = useSelector(state => state.reserve);
    console.log("minha ", reserves);
    return(
        <div>
            <Title>Você solicitou 1 reservas</Title>
            <Reserva>
                <img
                    src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
                    alt="Maceio"
                />
                <strong>Viagem Maceio 7 Dias</strong>
                <span>Quantidade 2</span>
                <button
                    type="button"
                    onClick={()=>{}}
                >
                    <MdDelete size={20} color="#191919"/>
                </button>
            </Reserva>
            <Footer>
                <button type="button">
                    Solicitar Reservar
                </button>
            </Footer>
        </div>
    );
}