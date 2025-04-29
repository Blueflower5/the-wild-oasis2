import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

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
        <Row>
          <Row type="horizontal">
            <div>
              <Heading as="h1">Hello World h1</Heading>
              <Heading as="h2">Hello World h2</Heading>
              <Heading as="h3">Hello World h3</Heading>
              {/* we can pass the props in button like regular botton when use styled css */}
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Button
                varitation="primary"
                size="small"
                onClick={() => alert("Check out")}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <div>
              <Input type="number" placeholder="number of guest" />
              <Input type="number" placeholder="number of guest" />
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
export default App;
