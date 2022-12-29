import styled from "styled-components";

export const Box =  styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    list-style: none;
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: #fff;
        border-radius: 4px;
        padding: 13px;
        width: 100%;
        max-width: 280px;
    }
    img{
        max-width: 280px;
        max-height: 220px;
        border-radius: 4px;
    }
    strong{
        font-size: 16px;
        line-height: 20px;
        color: #191919;
        margin-top: 10px;
    }
    button{
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        background: #191919;
        border: 0;
        border-radius: 4px;
        padding: 10px;
        gap: 10px;
    }
`;