import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

//
const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;
function App() {
  return (
    <StyledApp>
      <H1>Hello World</H1>
      {/* we can pass the props in button like regular botton when use styled css */}
      <Button onClick={() => alert("Check in")}>Check in</Button>
      <Button onClick={() => alert("Check out")}>Check out</Button>
      <Input type="number" placeholder="number of guest" />
    </StyledApp>
  );
}
export default App;
