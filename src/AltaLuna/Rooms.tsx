// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mountainRoom from "./assets/mountainroom.avif";
import bed from "./assets/double-bed.png";
import fork from "./assets/fork.png";
import sunset from "./assets/sunset.png";
import wifi from "./assets/wi-fi-icon.png";
import star from "./assets/star.png";

const MainContainer = styled.div`
  min-height: 100%;
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
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const InfoBox1 = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 8px;
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
  display: flex;
  overflow-x: auto;
  margin-bottom: 16px;
  gap: 8px;

  /* Firefox */
  scrollbar-width: none;

  /* Safari and Chrome */
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface AmenityProps {
  image: string;
}

const Amenity = styled.div<AmenityProps>`
  padding: 20px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 14px;
  background: #f0f0f0;
  border: 1px solid #c0c0c0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    height: 20px;
    width: 20px;
    aspect-ratio: 1/1;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-positon: center;
  }
`;

const InfoBox3 = styled.div`
  padding: 16px;

  h2 {
    font-size: 18px;
    margin-bottom: 4px;
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

const RatingBlurb = styled.div`
  display: flex;
  gap: 8px;
`;

const RatingIcon = styled.div`
  height: 12px;
  width: 12px;
  background-image: url(${star});
  background-size: cover;
  background-position: center;
`;

const Rating = styled.div`
  padding: 20px;
  flex-shrink: 0;
  max-width: 300px;
  background: #f0f0f0;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    line-height: 18px;
  }
`;

const RatingProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: cennter;
  padding-bottom: 8px;
  border-bottom: 1px solid #c0c0c0;
  margin-bottom: 16px;

  h3 {
    font-size: 16px;
    line-height: 16px;
  }

  span {
    font-size: 14px;
    line-height: 14px;
  }
`;

const BtnContainer = styled.div`
  padding: 16px;
`;

const BookBtn = styled.div`
  padding: 25px 12px;
  width: 100%;
  background: #303331;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: white;
    font-size: 14px;
    line-height: 14px;
  }
`;

const Rooms = () => {
  // const navigate = useNavigate();

  return (
    <MainContainer>
      <MainImage />

      {/* Pricing and title */}

      <InfoBox1>
        <div>
          <h1>Sopris Room</h1>
          <span>888 Main St, Carbondale, CO 81623</span>
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
          <Amenity image={bed}>
            <div></div>
            <span>Queen Size Bed</span>
          </Amenity>
          <Amenity image={wifi}>
            {" "}
            <div></div>
            <span>Fast Wifi</span>
          </Amenity>
          <Amenity image={fork}>
            {" "}
            <div></div>
            <span>Nearby Restaurants</span>
          </Amenity>
          <Amenity image={sunset}>
            {" "}
            <div></div>
            <span>Scenic Views</span>
          </Amenity>
        </AmenitiesContainer>
        <p>
          Wake up to sweeping views of Mount Sopris from this light-filled hotel
          room, where the iconic twin peaks feel close enough to touch.
          Thoughtfully designed for comfort and calm, the space blends modern
          touches with the laid-back charm of Carbondale. Whether you’re sipping
          coffee at sunrise or winding down at dusk, the mountain backdrop
          steals the show.
        </p>
      </InfoBox2>

      {/* Ratings */}

      <InfoBox3>
        <h2>Ratings</h2>
        <RatingBlurb>
          <RatingIcon />
          <span>4.9 Ratings (250 Reviews)</span>
        </RatingBlurb>
        <RatingsContainer>
          <Rating>
            <RatingProfile>
              <h3>Paul</h3>
              <span>5/5</span>
            </RatingProfile>
            <p>
              Great service and clean facility. Very close to many restaurants
              and nightlife.
            </p>
          </Rating>

          <Rating>
            <RatingProfile>
              <h3>Lindsay</h3>
              <span>4.5/5</span>
            </RatingProfile>
            <p>
              Awesome stay. The staff were very friendly and the room that we
              stayed in had a wonderful view of Mt. Sopris.
            </p>
          </Rating>

          <Rating>
            <RatingProfile>
              <h3>Chris</h3>
              <span>4.5/5</span>
            </RatingProfile>
            <p>
              A real bang for your buck when it comes to hotels in the Roaring
              Fork Valley.
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
