"use client";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

// import { ToastContainer, toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";

const InscriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #555555;
`;

const Entete = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const EnteteIcon = styled.p`
  color: white;
  padding-top: 3px;
`;

const EnteteTitre = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 800;
`;

const Bas = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const BasText = styled.p`
  display: flex;
  gap: 20px;
  color: white;
`;

const BasLien = styled.a`
  display: flex;
  gap: 20px;
  color: #ffd964;
  text-decoration: none;
`;

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 95%;
  margin: auto;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #55595c;
  background: transparent;
  outline: none;
`;

const InputCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 6px;
  margin-bottom: 20px;
`;

const CheckText = styled.p`
  font-size: 13px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #555555;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// NONE
const InscriptionPage = () => {
  const router = useRouter();
  const location = router.pathname;
  // const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
  });

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const updateButtonDisabled = () => {
    if (
      formData.nom.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  useEffect(() => {
    updateButtonDisabled();
  }, [formData.email, formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        formData
      );
      console.log(response.data);
      // Afficher un message de succès à l'utilisateur
      await Swal.fire({
        icon: "success",
        title: "Inscription réussie!",
        showConfirmButton: false,
        timer: 2000,
      });
      // alert("inscription reussi");

      router.push("/connexion");
    } catch (error) {
      console.error("Error submitting data:", error);
      // Afficher un message d'erreur à l'utilisateur
      alert("inscription non reussi");
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <InscriptionContainer>
      <Entete>
        <EnteteIcon>
          <FaBookmark />
        </EnteteIcon>
        <EnteteTitre>RED PRODUCT</EnteteTitre>
      </Entete>
      <FormContainer>
        <Title>Inscrivez-vous en tant que Admin</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              required
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom "
            />
          </FormGroup>
          <FormGroup>
            <Input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
            />
          </FormGroup>
          <FormGroup>
            <Input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
            />
            {showPassword ? (
              <FaEye
                onClick={updateShowPassword}
                className="absolute right-7 bottom-3 flex flex-col justify-center items-center cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={updateShowPassword}
                className="absolute right-7 bottom-3 flex flex-col justify-center items-center cursor-pointer"
              />
            )}
          </FormGroup>
          <CheckText>
            <InputCheckbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBoxChange}
            />
            Gardez-moi connecté
          </CheckText>
          <Button type="submit">Sinscrire</Button>
        </Form>
      </FormContainer>
      <Bas>
        <BasText>Vous avez déjà un compte ?</BasText>
        <BasLien href="/connexion">se connecter</BasLien>
      </Bas>
    </InscriptionContainer>
  );
};

export default InscriptionPage;
