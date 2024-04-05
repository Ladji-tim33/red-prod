"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaImage } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";
import HotelDetail from "../listeHotels/detailsHotel";

const Form = styled.form``;

const ContainerInput = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ImageInput = styled.input`
  display: none;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 27.79px;
  text-align: left;
`;

const Input = styled.input`
  font-family: Roboto;
  font-size: 18.53px;
  font-weight: 500;
  line-height: 21.71px;
  text-align: left;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #dddddd;
  outline: none;
`;

const Select = styled.select`
  font-size: 16px;
  font-weight: 500;
  line-height: 21.71px;
  text-align: left;
  padding: 6px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #dddddd;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #555555;
  color: #fff;
  border: none;
  border-radius: 14px;
  cursor: pointer;
`;

const Title = styled.h1`

  display: flex;
  align-items: center;
  cursor: pointer;
  gap:15px;
  border-bottom: 2px dashed #DDDDDD;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-family: Roboto;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  line-height: 34.17px;
  text-align: left;
  color: #555555:
`;

const DivImage = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  padding: 2rem;
  border-radius: 12px;
  flex-direction: column;

  justify-content: center;
`;

const ImageWrapper = styled.label`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #dddddd;
`;

const ImageDefault = styled.span`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #dddddd;
`;

const ImageText = styled.p`
  margin-left: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  background-color: #555555;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
`;

const AddHotelForm = ({ onClose, moddifer, handleModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    telephone: "",
    price: "",
    devise: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/stuff",
        formDataToSend
      );
      console.log(response.data);
      await Swal.fire({
        icon: "success",
        title: "Inscription réussie!",
        showConfirmButton: false,
        timer: 2000,
      });
      setFormData({
        name: "",
        address: "",
        email: "",
        telephone: "",
        price: "",
        devise: "",
        image: null,
      });
      setSelectedImage(null);
      // onClose();
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };


  // moddifier
  const updateProduit = async (produit) => {

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/stuff",
        formDataToSend
      );

      console.log(response.data);

        await Swal.fire({
          icon: "success",
          title: "Produit modifié avec succès!",
          showConfirmButton: false,
          timer: 2000,
        });
        setShowModal(false);
      
    } catch (error) {
      console.error('Erreur lors de la modification du produit:', error);
      toast.error('Erreur lors de la modification du produit!');
    }
  }  

  const hanldleUpdate = async (id) => {
    setShowModal(true)
    setTitreModal('Modification du produit')
    try {
      const response = await axiosInstance.get("/produits/" + id);
      const datasUpdates = response.data
        // Pré-remplir les champs du formulaire avec les données de l'hôtel
    setFormData({
      name: hotelData.name,
      address: hotelData.address,
      email: hotelData.email,
      telephone: hotelData.telephone,
      price: hotelData.price,
      devise: hotelData.devise,
      // Assurez-vous d'avoir l'URL de l'image si nécessaire
      image: hotelData.image,
    });
  } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
  }


  return (
    <>
    <HotelDetail updateProduit={updateProduit} />
    
    <Form onSubmit={handleSubmit}>
      <Title>
        {" "}
        <FaArrowLeft onClick={onClose} /> Créer un nouveau hôtel{" "}
      </Title>

      <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">Nom de l'hôtel:</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Adresse:</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Adresse de l'hôtel"
            required
          />
        </InputWrapper>
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Telephone:</Label>
          <Input
            type="number"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Téléphone de l'hôtel"
            required
          />
        </InputWrapper>
      </ContainerInput>
      <ContainerInput>
        <InputWrapper>
          <Label htmlFor="nom">prix par nuit:</Label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Prix de l'hôtel"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="nom">Devise:</Label>
          <Select
            name="devise"
            value={formData.devise}
            onChange={handleChange}
            required
          >
            <option value="XOF">F CFA</option>
            <option value="EUR">Euro</option>
            <option value="USD">Dollar</option>
          </Select>
        </InputWrapper>
      </ContainerInput>
      
      <DivImage>
        <Label htmlFor="nom">Ajouter une photo:</Label>
        <FileInputContainer>
          <ImageWrapper>
            <ImageText>
              {selectedImage ? (
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="selected-img"
                />
              ) : (
                // selectedImage.name
                <ImageDefault>
                  <FaImage size={40} />
                  <ImageText>Ajouter une photo</ImageText>
                </ImageDefault>
              )}
            </ImageText>
            <ImageInput
              type="file"
              name="image"
              onChange={handleImageChange}
              required
            />
          </ImageWrapper>
        </FileInputContainer>
      </DivImage>
      <ButtonContainer>
        <SubmitButton type="submit">Ajouter l'hôtel</SubmitButton>
      </ButtonContainer>
    </Form>
    </>
  );
};

export default AddHotelForm;
