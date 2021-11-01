import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const NewTask = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: rgb(60, 130, 246);
  padding: 0.6rem 1rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 16px;
    font-weight: bold;
    margin-right: 12px;
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
    margin-left: 8px;
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
