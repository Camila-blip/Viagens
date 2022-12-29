import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setReserva } from "../../store/modules/reserve/reducer";
import { MdFlightTakeoff } from "react-icons/md";
import api from "../../services/api";
import { Box } from "./styles";

export default function Home(){
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);

    useEffect(()=>{
        async function loadApi(){
            const response = await api.get("trips");
            setTrips(response.data);
        }
        loadApi();
    },[]);

    const handleAdd = useCallback((trip)=>{
        dispatch(setReserva(trip));
    });

    return(
        <div>
            <Box>
                {trips.map(trip =>(
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title} />
                        <strong>{trip.title}</strong>
                        <span>Status: {trip.status ? "Disponivel" : "insponivel"}</span>
                        <button type="button" onClick={() => handleAdd(trip)}>
                            <MdFlightTakeoff size={16} color="#FFF" />
                            SOLICITAR RESERVA
                        </button>
                    </li>
                ))}
            </Box>
        </div>
    );
}