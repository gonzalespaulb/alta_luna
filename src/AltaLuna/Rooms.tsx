import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    background: purple;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Rooms = () => {

    const navigate = useNavigate();

    return <MainContainer>
      <button onClick={() => navigate("/")}>Trip Info</button>
      <button onClick={() => navigate("/confirmation")}>Confirmation</button>
    </MainContainer>
}

export default Rooms;