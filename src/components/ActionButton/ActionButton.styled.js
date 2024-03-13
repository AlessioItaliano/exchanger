import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 150px;

  padding: 30px;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: 0px 3px 26px 0px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h2`
  color: black;
  font-size: 17px;
`;

export const Action = styled.p`
  color: black;
  font-size: 17px;
`;

export const Toggle = styled.div`
  display: flex;
  gap: 15px;
`;

export const Input = styled.input`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 50px;
  margin: 0;
  vertical-align: top;
  background: white;
  border: 1px solid black;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  appearance: none;

  &::after {
    content: "";

    display: inline-block;
    position: absolute;
    left: 3px;
    top: 1.5px;

    width: 45px;
    height: 45px;
    background-color: skyblue;
    border-radius: 50%;

    transform: translateX(0);
  }

  &:checked::after {
    transform: translateX(calc(100% + 3px));
    background-color: skyblue;
  }
  &:checked {
    background-color: white;
  }
`;
