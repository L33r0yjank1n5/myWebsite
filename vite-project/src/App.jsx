import styled from "styled-components"
import { Sidebar } from "./Components/Sidebar.jsx"

function App() {
  return (
    <MainDiv>
      <Sidebar/>
      <MainContent>

      </MainContent>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export default App
