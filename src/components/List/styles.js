import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #f3f4f6; */
  width: 260px;
  height: 440px;
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  overflow-y: auto;
  position: relative;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(60, 130, 246);
    border-radius: 4px;
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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
