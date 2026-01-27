import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TripInfo from "./TripInfo";
import Rooms from "./Rooms";
import Confirmation from "./Confirmation";

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    background: green;
`;

const Pages = () => {

    return <MainContainer>
      <Routes>
        <Route path="/" element={<TripInfo />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>
    </MainContainer>
}

export default Pages;