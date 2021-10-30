import styled from 'styled-components';

export const Container = styled.div`
  width: 95vw;
  height: 85vh;
  margin: 2rem;
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(245, 230, 245, 0.5);
`;

export const Header = styled.header`
  background-color: #19f;
  width: 100%;
  height: 4rem;
  border-top-right-radius: 0.86rem;
  border-top-left-radius: 0.86rem;

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