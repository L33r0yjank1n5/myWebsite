import styled from "styled-components"

function App() {
  return (
    <MainDiv>
      <StickyHeaderDiv>

      </StickyHeaderDiv>
      <h1>Hello, I'm Adam Smestad</h1>
      <h2>I'm a React JS Front End Developer</h2>
      <div>
        <div>About Me</div>
      </div>
      <div>
        <div>Experience</div>
        <div>Work Experience</div>
        <div>Coding Language Experience</div>
        <div>Tool Experience</div>
      </div>
      <div>
        <div>Contact</div>
      </div>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const StickyHeaderDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export default App