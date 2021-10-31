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
        <List tag={0} title={'Backlog'}/>
        <List tag={1} title={'Not started'}/>
        <List tag={2} title={'In process'}/>
        <List tag={3} title={'Completed'}/>
      </ListWrapper>
    </Container>
  );
}

export default Board;