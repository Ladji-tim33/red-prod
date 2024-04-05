"use client";
import styled from "styled-components";
import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import MyNav from "@/app/navbar/Navbar";
import ListHotels from "./Hotels";
import NmbHotels from "../navbar/NmbHotels";
import HotelDetail from "./detailsHotel";

const Display = styled.div`
  background: #f0f0f0;
`;

const Bar = styled.div`
  background: #ffffff;
  height: 25vh;
  margin-left: 230px;
  // margin-bottom: 20px;
`;

const Hotels = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <>
      <Display>
        <Sidebar />
        <Bar>
          <MyNav />
          <NmbHotels />
          {selectedHotel ? (
            <HotelDetail hotel={selectedHotel} />
          ) : (
            <ListHotels onSelectHotel={handleHotelSelect} />
          )}
        </Bar>
      </Display>
    </>
  );
};

export default Hotels;
