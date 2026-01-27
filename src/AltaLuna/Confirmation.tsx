import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    background: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Confirmation = () => {

    const navigate = useNavigate()

    return <MainContainer>
      <button onClick={() => navigate("/")}>Trip Info</button>
      <button onClick={() => navigate("/rooms")}>Rooms</button>
      
    </MainContainer>
}

export default Confirmation;