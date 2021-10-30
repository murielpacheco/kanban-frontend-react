import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ddd;
  width: 220px;
  height: 480px;
  margin: 4rem;
  padding: 1rem;
  border-radius: 10px;
  overflow: scroll;

  h2 {
    text-align: left;
    font-size: 22px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

export const ListTag = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
`;

export const Footer = styled.textarea`
  width: 80%;
`;

export const Addtask = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
