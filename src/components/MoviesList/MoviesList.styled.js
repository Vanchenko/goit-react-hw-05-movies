import styled from "@emotion/styled";

export const Wrapper = styled.ul`
  display: block;
  margin-top: 20px;
 
`;

export const LinkWrapper = styled.li`
  display: flex;
  justify-items: center;
  align-items: center;
  color: blue;
  > a {
     text-decoration: none;
  }
  :hover {
    border-bottom: 2px solid blue;
  }
`;

export const MoviesTitle = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  font-size: 16px;
  :hover {
    color: blue;
    text-transform: uppercase;
  }
`;
