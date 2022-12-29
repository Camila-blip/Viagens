import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {MdDelete} from "react-icons/md";
import { reservaDeleted } from "../../store/modules/reserve/reducer";
import {Footer,Reserva,Title } from "./styles";

export default function Reservas(){
    const dispatch = useDispatch();
    const reserves = useSelector(state => state.reserve);

    const handleRemove = useCallback((id)=>{
        dispatch(reservaDeleted(id));
    });

    return(
        <div>
            <Title>Você solicitou {reserves.length} reservas</Title>
            {reserves.map(reserve =>(
                <Reserva key={reserve.id}>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <span>Quantidade {reserve.amount}</span>
                    <button
                        type="button"
                        onClick={()=> handleRemove(reserve.id)}
                    >
                        <MdDelete size={20} color="#191919"/>
                    </button>
                </Reserva>
            ))}
            
            <Footer>
                <button type="button">
                    Solicitar Reservar
                </button>
            </Footer>
        </div>
    );
}