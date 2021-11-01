import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #FFFFFF;
  height: 120px;
  text-align: center;
  margin: .5rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #aaa;
  cursor: grab;
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  span {

    font-size: 1.2rem;
  }

  button {
    width: 25px;
    height: 25px;
    font-size: 16px;
    background-color: rgb(238,84,84);;
    color: white;
    border-radius: 50%;
    border: none;
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;