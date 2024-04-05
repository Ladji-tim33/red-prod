"use client";
import styled from "styled-components";
import Corps from "../myCards/Corps";
import Sidebar from "../sidebar/Sidebar";
import MyNav from "@/app/navbar/Navbar";
import Bienvenu from "@/app/navbar/Bienvenu";

const Display = styled.div`
  // width: 100%;
  background: #f0f0f0;
`;

const Bar = styled.div`
  background: #ffffff;
  height: 25vh;
  margin-left: 230px;
  // width: 100%;
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
