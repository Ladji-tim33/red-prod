"use client";
import styled from "styled-components";
import { useState } from "react";
import AddHotelForm from "./form";

const Text = styled.h1`
  font-size: 1.5em;
  color: #000;
  margin-top: 20px;
  opacity: 0.5;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 20px;
`;

// Le style de input

const ButtonClick = styled.button`
  font-size: 17px;
  padding: 15px 20px 30px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 250px;
  height: 20px;
  margin-top: 15px;
  cursor: pointer;
`;

// Styled components pour le modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const Modal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <AddHotelForm onClose={onClose} />
      </ModalContent>
    </ModalOverlay>
  );
};

const NmbHotels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TextDiv>
        <Text>Hotels 8</Text>
        <ButtonClick onClick={handleModalOpen}>
          + Créer un nouveaux hotels
        </ButtonClick>
      </TextDiv>
      {isModalOpen && <Modal onClose={handleModalClose} />}
    </>
  );
};

export default NmbHotels;
