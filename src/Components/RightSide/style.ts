import styled from "styled-components";

export const Container = styled.div`
    margin-top: 150px;
    margin-left: 50px;
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: 250px 250px;
    gap: 15px;

    div{
        border-radius:15px;
        text-align: center;
        color: #fff;

        .shadow{

            display: flex;
            justify-content: center;
            align-items: center;
            margin: 25px auto;
            border-radius: 100%;
            width: 100px;
            height: 100px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }

        img{
            width: 60px;
            height: 60px;
        }
    }
`;

export const Gray = styled.div`
    background-color: #97A2AC;
    

`
export const Green = styled.div`
    background-color: #0EAC6A;

`
export const Yellow = styled.div`
    background-color: #E3B03B;

`
export const Red = styled.div`
    background-color: #C64042;

`