"use client";
import styled from "styled-components";


const Text = styled.h1`
  font-size: 1.5em;
  color: #000;
  margin-top: 25px;
`;

const TextLorem = styled.p`
  color: #000;
  opacity: 0.5;
`;

const TextDiv = styled.div`
  padding-left: 25px;
`;
const Bienvenu = () => {
    return ( 
        <>
        <TextDiv>
            <Text>Bienvenu sur RED Product</Text>
            <TextLorem>Lorem ipsum dolor sit amet consectetur</TextLorem>
          </TextDiv>
        </>
     );
}
 
export default Bienvenu;