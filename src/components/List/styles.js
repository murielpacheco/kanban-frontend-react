import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F3F4F6;
  width: 260px;
  height: 440px;
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 4px 4px 10px #333;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(74, 73, 70);
    background: linear-gradient(
      135deg,
      rgba(74, 73, 70, 1) 2%,
      rgba(160, 157, 152, 1) 96%,
      rgba(165, 162, 157, 1) 100%
    );
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ddd;
  }

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
  width: 45px;
  height: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.tag === 0
      ? 'black'
      : props.tag === 1
      ? 'red'
      : props.tag === 2
      ? 'green'
      : 'blue'};
`;

export const Footer = styled.textarea`
  width: 80%;
`;

export const Addtask = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
