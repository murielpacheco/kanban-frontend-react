// import Board from "./components/Board"
import Board from "./components/Board"
import { MessageProvider } from "./contexts/MessageContext"
import GlobalStyle from "./styles/global"



function App() {
  return (
    <>
    <MessageProvider>
      <Board/>
      <GlobalStyle/>
    </MessageProvider>
    </>
  )
}

export default App
