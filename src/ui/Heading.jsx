import styled, { css } from "styled-components";
// the helper function to generate CSS from a template literal with interpolation (vist style-components.com (css function for more info))
// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;
// we use as instead of type to put the html name of that like that name not just the prop
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  line-height: 1.4
`;

export default Heading;
