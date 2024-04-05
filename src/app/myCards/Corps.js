"use client";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { TbHotelService } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import CardsFunction from "./Cards";

const DivGlobalCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 45px;
  padding-left: 25px;
  padding-right: 25px;
`;

const DivGlobalBg = styled.div``;

const Corps = () => {
  const [hotels, setHotels] = useState([]);
  const [user, setUser] = useState([]);

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

  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/signup");
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <DivGlobalBg>
      <DivGlobalCards>
        <CardsFunction
          background="#A88ADD"
          icons={FaEnvelopeOpen}
          nombre="121"
          title="Formulaires"
        />

        <CardsFunction
          background="#0CC2AA"
          icons={MdEmail}
          nombre="40"
          title="Message"
        />
        <CardsFunction
          background="#FCC100"
          icons={PiUsersThreeFill}
          nombre={user.length}
          title="Utilisateur"
        />
      </DivGlobalCards>

      <DivGlobalCards>
        <CardsFunction
          background="#F90000"
          icons={MdOutlineAlternateEmail}
          nombre="25"
          title="E-mail"
        />
        <CardsFunction
          background="#9C22B0"
          icons={TbHotelService}
          nombre={hotels.length}
          title="Hotels"
        />

        <CardsFunction
          background="#1565C0"
          icons={FaStar}
          nombre="02"
          title="Etoil"
        />
      </DivGlobalCards>
    </DivGlobalBg>
  );
};

export default Corps;
