import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HotelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding-left: 20px;
  padding-right: 20px;
  gap: 10px;
`;

const HotelItem = styled.div`
  margin-top: 30px;
  cursor: pointer;
`;

const HotelImage = styled.img`
  width: 100%;
  height: 30vh;
  border-radius: 10px 10px 0px 0px;
  background: #fff;
`;

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0px 0px 10px 10px;
  padding: 7px;
`;

const TextStyle = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 15.35px;
  color: #8d4b38;
  width: 100%;
`;

const TitleStyle = styled.h2`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 25.59px;
  color: #222222;
  margin-top: 5px;
`;
const PrixStyle = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 15.35px;
  color: #222222;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ListHotels = ({ onSelectHotel }) => {
  const [hotels, setHotels] = useState([]);

  const fetchHotels = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/stuff");
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <HotelContainer>
      {hotels.map((hotel, index) => (
        <HotelItem key={index} onClick={() => onSelectHotel(hotel)}>
          <HotelImage src={hotel.image} alt={hotel.name} />
          <HotelInfo>
            <TextStyle>{hotel.address}</TextStyle>
            <TitleStyle>{hotel.name}</TitleStyle>
            <PrixStyle>
              {hotel.price} {hotel.devise} par nuit
            </PrixStyle>
          </HotelInfo>
        </HotelItem>
      ))}
    </HotelContainer>
  );
};

export default ListHotels;
