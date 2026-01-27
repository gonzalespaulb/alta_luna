import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TripInfo = () => {

    const navigate = useNavigate();

  return (
    <MainContainer>
      <button onClick={() => navigate("/rooms")}>Rooms</button>
      <button onClick={() => navigate("/confirmation")}>Confirmation</button>
    </MainContainer>
  );
};

export default TripInfo;
