import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  height: 500px;
  margin-top: 150px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Grid = styled.div`
    margin-top: 150px;
    margin-left: 70px;
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: 250px 250px;
    gap: 15px;
`;

type Props = {
    bg: string
}

export const Card = styled.div<Props>`
    border-radius:15px;
    text-align: center;
    color: #fff;
    background-color: ${Props => Props.bg};

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
export const ImcResult = styled.div`
    margin-top: 150px;
    display: flex;

    .Shown {
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .shadow{
        width: 150px;
        height: 150px;
    }
    .up{
        width: 100px;
        height: 100px;
    }
`;

export const Arrow =styled.div`
    position: relative;
    bottom: -210px;
    left: 45px;
    width: 80px;
    height: 80px;
    border-radius: 65px;
    background-color: #29839B; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
        width: 40px;
        height: 40px;
    }
`