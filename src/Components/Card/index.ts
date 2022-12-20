import styled from 'styled-components';

type Props = {
    bg: string;
}

const Card = styled.div<Props>`
    border-radius:15px;
    text-align: center;
    color: #fff;
    background-color: ${p => p.bg};

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

`
export default Card;