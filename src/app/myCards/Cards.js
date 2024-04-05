"use client";
import styled from "styled-components";

const Cards = styled.div`
  background: #ffffff;
  height: 75px;
  margin-top: 50px;
  width: 90%;
  border: 2px solid #f0f0f0;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

// Le style de le text dans les cards

const DivTextCards = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`;

const TextCards = styled.div`
display: flex;
flex-direction: row;
`;

const TextNumber = styled.h1`
 opacity: 0.7;
 font-weight: 300;
`;

const TextP = styled.p`
 margin-top: 15px;
 margin-left: 10px;
 opacity: 0.5;
`;

const TextPara = styled.p`
 opacity: 0.5;
`;

const DivEnvlop = styled.div`
  font-size: 1.2em;
  background: ${props => props.background || "#0000"};
  color: #fff;
  width: 50px;
  padding-top: 13px;
  padding-bottom: 13px;
  border-radius: 50%;
  text-align: center;
`;

const CardsFunction = ({background, title, nombre, icons}) => {
    const Icons = icons
  return (
    <main>

      <Cards>
        <DivEnvlop background={background} >
            {Icons && <Icons/>}
        </DivEnvlop>    
        <DivTextCards>
        <TextCards>
            <TextNumber>
            {nombre}
            </TextNumber>
            <TextP>
                {title}
            </TextP>
        </TextCards>
        <TextPara>
        Je ne sais pas quoi mettre
        </TextPara>
        </DivTextCards>
      </Cards>
      
    </main>
  );
}

export default CardsFunction