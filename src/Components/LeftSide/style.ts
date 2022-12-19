import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  height: 500px;
  margin-top: 150px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  .ageInput, .weightInput {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #3a3a3a;
    outline: 0;
    font-size: 1.3rem;
    color: #000;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    input::-webkit-outer-spin-button, ::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
  }

  button{
    margin-top: 80px;
    width: 100%;
    background-color: #164f6e;
    border: 1px solid;
    border-radius: 15px;
    height: 55px;
    color: white;
    font-size: 1.3em;
    cursor: pointer;
  }
`;
