"use client";
import styled from "styled-components";
import Corps from "../myCards/Corps";
import Sidebar from "../sidebar/Sidebar";
import MyNav from "@/app/navbar/Navbar";
import Bienvenu from "@/app/navbar/Bienvenu";

const Display = styled.div`
  // width: 100%;
  background: #f0f0f0;
  display: flex;
  gap: 12%;
`;

const Bar = styled.div`
  background: #ffffff;
  height: 25vh;
  padding-left: 230px;
  // width: 90%;

  @media (max-width: 1108px) {
    padding-left: 180px;
  }

  @media (max-width: 1058px) {
    padding-left: 170px;
  }

  @media (max-width: 999px) {
    padding-left: 160px;
  }

  @media (max-width: 944px) {
    padding-left: 150px;
  }

  @media (max-width: 880px) {
    padding-left: 140px;
  }
`;
const Dash = () => {
  return (
    <main>
      <Display>
        <Sidebar />
        <Bar>
          <MyNav />
          <Bienvenu />
          <Corps />
        </Bar>
      </Display>
    </main>
  );
};

export default Dash;
