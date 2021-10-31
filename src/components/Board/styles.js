import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 85vh;
  border-radius: 15px;
`;

export const Header = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 34px;
  }

  span {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;
