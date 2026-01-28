import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mountainRoom from "./assets/mountainroom.avif";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #edebe3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #303331;
`;

const MainImage = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-image: url(${mountainRoom});
  background-size: cover;
  background-position: bottom;
`;

const InfoBox1 = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    line-height: 24px;
  }

  div:nth-child(1) {
  }

  div:nth-child(2) {
  }
`;

const InfoBox2 = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 18px;
  }
`;

const AmenitiesContainer = styled.div`
  width: 100%;
  background: white;
  display: flex;
  overflow-x: auto;
  margin-bottom: 16px;

    /* Firefox */
  scrollbar-width: none;

  /* Safari and Chrome */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Amenity = styled.span`
  padding: 20px;
  border-radius: 4px;
  background: #f0f0f0;
  flex-shrink: 0;
`;

const InfoBox3 = styled.div`
  padding: 16px;

  h2 {
    font-size: 18px;
  }

  span {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 8px;
  }
`;

const RatingsContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 8px;
  margin-top: 16px;

    /* Firefox */
  scrollbar-width: none;

  /* Safari and Chrome */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Rating = styled.div`
  padding: 20px;
  flex-shrink: 0;
  max-width: 300px;
  background: #f0f0f0;

  p {
    font-size: 14px;
    line-height: 18px;
  }
`;

const BtnContainer = styled.div`
  padding: 16px;
`;

const BookBtn = styled.div`
  height: 44px;
  width: 100%;
  background: #303331;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: white;
    font-size: 12px;
    line-height: 12px;
  }
`;

const Rooms = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <MainImage />

      {/* Pricing and title */}

      <InfoBox1>
        <div>
          <h1>Sopris Room</h1>
          <span>Cardbonale, CO</span>
        </div>
        <div>
          <span>$175</span>
          <span>/night</span>
        </div>
      </InfoBox1>

      {/* Amenities */}

      <InfoBox2>
        <h2>Amenities</h2>
        <AmenitiesContainer>
          <Amenity>Queen Size Bed</Amenity>
          <Amenity>Fast Wifi</Amenity>
          <Amenity>Nearby Restaurants</Amenity>
          <Amenity>Scenic Views</Amenity>
        </AmenitiesContainer>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          minima blanditiis explicabo alias veniam aliquam sit, possimus
          mollitia ipsum! Ad atque at iste similique eligendi amet aut iusto
          magni impedit!
        </p>
      </InfoBox2>

      {/* Ratings */}

      <InfoBox3>
        <h2>Ratings</h2>
        <span>4.9 Ratings (250 Reviews)</span>
        <RatingsContainer>
          <Rating>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              facilis veniam itaque voluptates iusto, perferendis, reiciendis
              nemo tempore, fugiat adipisci facere voluptate amet repellat? Eos
              molestias vero consectetur eligendi ipsam.
            </p>
          </Rating>

          <Rating>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              facilis veniam itaque voluptates iusto, perferendis, reiciendis
              nemo tempore, fugiat adipisci facere voluptate amet repellat? Eos
              molestias vero consectetur eligendi ipsam.
            </p>
          </Rating>

          <Rating>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              facilis veniam itaque voluptates iusto, perferendis, reiciendis
              nemo tempore, fugiat adipisci facere voluptate amet repellat? Eos
              molestias vero consectetur eligendi ipsam.
            </p>
          </Rating>
        </RatingsContainer>
      </InfoBox3>
      <BtnContainer>
        <BookBtn>
          <span>BOOK THIS ROOM</span>
        </BookBtn>
      </BtnContainer>
    </MainContainer>
  );
};

export default Rooms;
