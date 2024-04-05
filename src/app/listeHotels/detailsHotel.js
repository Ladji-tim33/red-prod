import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HotelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  margin-top: 7%;
  text-align: center;
  margin-bottom: 7%;
`;

const HotelDetailImage = styled.img`
  width: 40%;
  border-radius: 10px;
  margin-left: 7%;
  // margin-top: 10px;
  margin-bottom: 4%;
`;

const HotelDetailInfo = styled.div`
  margin-top: 2px;
  text-align: center;
  margin-left: 5%;
`;

const TextStyle = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 15.35px;
  color: #222222;
  width: 100%;
  margin-top: 10px;
  padding: 7px;
`;

const TitleStyle = styled.h2`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 25.59px;
  color: #222222;
  margin-top: 5px;
  margin-top: 10px;
  padding: 7px;
`;

const ButtonBack = styled.h2`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 25.59px;
  color: white;
  border: 1px solide balck;
  background: black;
  margin-top: 20px;
  width: 70px;
  position: absolut;
  top: 2%;
  left: 12%;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
`;

const StyleText = styled.h2`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 15.35px;
  color: #222222;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 7px;
`;

const ButtModifier = styled.h2`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 25.59px;
  color: white;
  // border: 1px solide balck;
  background: green;
  margin-top: 20px;
  width: 100px;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
`;
const HotelDetail = ({ hotel, moddifer }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <>
      <ButtonBack onClick={handleBackClick}>Back</ButtonBack>
      <HotelDetailsContainer>
        <HotelDetailImage src={hotel.image} alt={hotel.name} />
        <HotelDetailInfo>
          <TitleStyle>
            <b>Nom: </b>
            {hotel.name}
          </TitleStyle>
          <TextStyle>
            <b>Adresse: </b>
            {hotel.address}
          </TextStyle>
          <StyleText>
            <b>Telephone: </b>
            {hotel.telephone}
          </StyleText>
          <StyleText>
            <b>Email: </b>
            {hotel.email}
          </StyleText>
          <StyleText>
            <b>Prix: </b>
            {hotel.price} {hotel.devise} par nuit
          </StyleText>
          <ButtModifier onClick={moddifer}>Modifier</ButtModifier>
        </HotelDetailInfo>
      </HotelDetailsContainer>
    </>
  );
};

export default HotelDetail;
