// forme.js
"use client";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useGlobal from "./useConnexion";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { FaBookmark } from "react-icons/fa";

const ConnexionContainer = styled.div`
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

const Lien = styled.a`
  margin-top: 20px;
  color: #ffd964;
  text-decoration: none;
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

const ConnexionPage = () => {
  const router = useRouter();
  const location = router.pathname;
  // const { profileUser, client } = useGlobal();
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   profileUser();
  // });

  const updateShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const updateButtonDisabled = () => {
    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
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
    // setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        formData
      );
      // const token = response.data.token;
      // localStorage.setItem("tokenclient", token);
      // // navigate(-1);
      // // profileUser();

      // const from = location.state?.from || "/";
      // console.log(location);
      // if (from === "/inscription") {
      router.push("/");
      alert("connexion réussi");
    } catch (error) {
      console.error(error);
      alert("Email ou mot de passe incorrect");
      // toast.error("Email ou mot de passe incorrect");
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ConnexionContainer>
      <Entete>
        <EnteteIcon>
          <FaBookmark />
        </EnteteIcon>
        <EnteteTitre>RED PRODUCT</EnteteTitre>
      </Entete>
      <FormContainer>
        <Title>Connectez-vous en tant que Admin </Title>
        <Form onSubmit={handleSubmit}>
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
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
            />
          </FormGroup>
          <CheckText>
            <InputCheckbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBoxChange}
            />
            Gardez-moi connecté
          </CheckText>
          <Button type="submit">Se connecter</Button>
        </Form>
      </FormContainer>
      <Lien href="/mpoublie">Mot de passe oublié ?</Lien>
      <Bas>
        <BasText>Vous n'avez pas de compte ?</BasText>
        <BasLien href="/inscription">s'inscrire</BasLien>
      </Bas>
    </ConnexionContainer>
  );
};

export default ConnexionPage;
