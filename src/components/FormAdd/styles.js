import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;
export const NewTask = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 80%;
  background-color: #aaaaff;
  padding: 0.5rem;
  border-radius: 10px;



  display: flex;
    align-items: center;
    justify-content: space-between;
  justify-content: space-between;

  span {
    font-size: 16px;
    font-weight: bold;
  }

  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 38px;
    background-color: #aaaadf;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(1.15);
    }
  }
`;
export const TextArea = styled.textarea``;
export const AddTask = styled.div`
  width: 30px;
    height: 30px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 38px;
    background-color: #aaaadf;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(1.15);
    }
`;
