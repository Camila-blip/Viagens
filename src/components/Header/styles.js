import styled from "styled-components";
import { Link } from "react-router-dom";

export  const Container =  styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
    padding: 10px;
`;

export  const Logo =  styled.img`
    max-width: 110px;
    max-height: 110px;
`;

export  const Reserva =  styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    div{
        text-align: right;
        margin-right: 10px;
    }
    strong{
        color: #fff;
        display: block;
    }
    span{
        color: #ddd;
        font-size: 15px;
    }
`;
