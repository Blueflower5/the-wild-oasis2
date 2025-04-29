import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

//
const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* this global style cant accpet any props */}
      <GlobalStyles />
      <StyledApp>
        <H1>Hello World</H1>
        {/* we can pass the props in button like regular botton when use styled css */}
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        <Input type="number" placeholder="number of guest" />
      </StyledApp>
    </>
  );
}
export default App;
