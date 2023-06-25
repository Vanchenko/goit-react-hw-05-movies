import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MoviesCard = styled.div`
display: flex;
`;

export const MoviesInfo = styled.div`
display: flex;
flex-direction: column;
margin-left: 25px;
`;

export const ListLinks = styled.li`
list-style: none;
`;

export const Links = styled(Link)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  :hover {
    text-transform: uppercase;
    text-decoration: dashed;
  }
`;

export const Text = styled.p`
margin: 0;
margin-bottom: 10px;
// background-color: white;
opacity: 0.95;
`;

export const MoviesTitle = styled.h2`
margin-top: 10px;
margin-bottom: 10px;
`;

export const Subtitle = styled.h4`
margin-top: 10px;
margin-bottom: 10px; 
`;

export const LableBox = styled.div`
width: 960px;
border-bottom: 2px solid tomato;
margin-bottom: 10px;
`;