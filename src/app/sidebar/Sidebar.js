"use client";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import Link from "next/link";

// Le style de sidebar
const SideBar = styled.div((props) => ({
  background: props.$background,
  height: "100vh",
  width: "17%",
  position: "fixed",
}));

// Le style du titre

const Entete = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  margin-left: 20px;
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

const Paragraph = styled.p`
  margin-top: 20px;
  padding-left: 15px;
  color: #fff;
`;

const List = styled.div`
  font-size: 1.1em;
  margin-top: 10px;
  color: #fff;
  list-style: none;
  padding: 0;
`;

const ListlI = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  text-decoration: none;
  margin-top: 25px;
  color: white;
`;

const Span = styled.span`
  margin-right: 20px;
`;

const Sidebar = () => {
  return (
    <>
      <SideBar $background="#555555">
        <Entete>
          <EnteteIcon>
            <FaBookmark />
          </EnteteIcon>
          <EnteteTitre>RED PRODUCT</EnteteTitre>
        </Entete>
        <Paragraph>Principal</Paragraph>
        <List>
          <Link href="/home">
            <ListlI>
              <Span>
                <MdDashboard />
              </Span>
              <p>Dashboard</p>
            </ListlI>
          </Link>

          <Link href="/listeHotels">
            <ListlI>
              <Span>
                <FaHotel />
              </Span>
              <p>List des hotels</p>
            </ListlI>
          </Link>
        </List>
      </SideBar>
    </>
  );
};

export default Sidebar;
