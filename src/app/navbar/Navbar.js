"use client";
import styled from "styled-components";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Link from 'next/link';



const Dashboard = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 70.66px;
  text-align: left;
  padding-left: 25px;
  color: black;
`;

// Le style de Div icons

const DivIcone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 50px;
  font-size: 22px;
  padding-right: 25px;
`;


// Le style de input

const SearchInput = styled.input`
  font-size: 16px;
  padding: 8px 12px 8px 40px;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 250px;
  height: 17px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 10px 50%;
  background-size: 20px 20px;

  ::placeholder {
    color: #aaa;
  }
`;

const DivProfil = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000000;
`;

const DisplayDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f0f0f0;
`;


const MyNav = () => {
    return ( 
        <>
          <DisplayDiv>
            <Dashboard>Dashboard</Dashboard>
            <DivIcone>
              <SearchInput placeholder="Recherche..." />
              <IoMdNotificationsOutline />
              <DivProfil />
              <Link href="/connexion">
              <FaArrowRightFromBracket />
              </Link>
            </DivIcone>

          </DisplayDiv>
          <hr/>
        </>
     );
}
 
export default MyNav;