import List from '../List';

import { Container, Header, ListWrapper } from './styles';

function Board() {
  return (
    <Container>
      <Header>
        <h2>Kanban workplace</h2>
        <span>Muriel Damazio</span>
      </Header>
      <ListWrapper>
        <List title={'Backlog'}/>
        <List title={'Not started'}/>
        <List title={'In process'}/>
        <List title={'Completed'}/>
      </ListWrapper>
    </Container>
  );
}

export default Board;