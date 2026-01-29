// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mountainRoom from "./assets/mountainroom.avif";
import bed from "./assets/double-bed.png";
import fork from "./assets/fork.png";
import sunset from "./assets/sunset.png";
import wifi from "./assets/wi-fi-icon.png";
import star from "./assets/star.png";
import key from "./assets/key.png";
import cancel from "./assets/cancel-booking.png";
import right from "./assets/chevron.png";
import left from "./assets/left-chevron.png";
import { getCalendarMonth } from "./Calendar";
import {
  format,
  isSameDay,
  isAfter,
  isBefore,
  addMonths,
  subMonths,
} from "date-fns";
import { useState } from "react";

const MainContainer = styled.div`
  min-height: 100%;
  width: 100%;
  background: #edebe3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #303331;
  padding: 24px;
`;

const MainImage = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background-image: url(${mountainRoom});
  background-size: cover;
  background-position: bottom;
  border-radius: 10px;
`;

const InfoBox1 = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c0c0c0;

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
  padding: 16px 0px 24px 0px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c0c0c0;
  overflow: hidden;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
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
  padding: 16px 0px 24px 0px;
  border-bottom: 1px solid #c0c0c0;

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
    line-height: 22px;
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
  padding: 16px 0px;
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

const InfoBox4 = styled.div`
  padding: 16px 0px 24px 0px;

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const Policies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Policy = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const PolicyInfo = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`;

interface PolicyIconProps {
  image: string;
}

const PolicyIcon = styled.div<PolicyIconProps>`
  height: 20px;
  width: 20px;
  aspect-ratio: 1/1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-positon: center;
`;

const InfoBox5 = styled.div`
  padding: 16px 0px 24px 0px;
  border-bottom: 1px solid #c0c0c0;

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const WeekDayRow = styled.div`
  width: 100%;
  display: grid;
  height: 40px;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #c0c0c0;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      border-right: 1px solid #c0c0c0;
    }
  }
`;

const DaysGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #c0c0c0;
  border-top: none;
`;

const Calendar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
`;

const Days = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #c0c0c0;
  }

  span {
    font-size: 14px;
    line-height: 14px;
  }
`;

const MonthUI = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(min-content, max-content) 1fr minmax(
      min-content,
      max-content
    );
  border: 1px solid #c0c0c0;
  border-bottom: none;

  span {
    font-size: 14px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface MonthToggleButtonProps {
  icon: string;
}

const MonthToggleButton = styled.div<MonthToggleButtonProps>`
  height: 40px;
  width: 40px;
  background-image: url(${(props) => props.icon});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Rooms = () => {
  // const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const days = getCalendarMonth(currentMonth);
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const handleDayClick = (day: Date) => {
    // No dates selected yet
    if (!startDate) {
      setStartDate(day);
      setEndDate(null);
      return;
    }

    // Start date selected, no end date yet
    if (startDate && !endDate) {
      if (isAfter(day, startDate)) {
        setEndDate(day);
      } else {
        // Clicked before start → reset start
        setStartDate(day);
      }
      return;
    }

    // Both selected → reset and start new range
    setStartDate(day);
    setEndDate(null);
  };

  const isInRange = (day: Date) => {
    if (!startDate || !endDate) return false;
    return isAfter(day, startDate) && isBefore(day, endDate);
  };

  const isRangeStart = (day: Date) => startDate && isSameDay(day, startDate);

  const isRangeEnd = (day: Date) => endDate && isSameDay(day, endDate);

  const renderCalendarDays = days.map((day) => {
    const isStart = isRangeStart(day);
    const isEnd = isRangeEnd(day);
    const inRange = isInRange(day);

    return (
      <Days
        key={day.toISOString()}
        onClick={() => handleDayClick(day)}
        style={{
          background:
            isStart || isEnd ? "#303331" : inRange ? "#c0c0c0" : "transparent",
          color: isStart || isEnd ? "#fff" : "#303331",
          cursor: "pointer",
        }}
      >
        <span>{format(day, "d")}</span>
      </Days>
    );
  });

  const renderWeekDays = weekDays.map((day) => {
    return <div>{day}</div>;
  });

  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  return (
    <MainContainer>
      <MainImage />

      {/* ------------------------------------------------------------------------------- Pricing and title */}

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

      {/* ------------------------------------------------------------------------------- Amenities */}

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

      {/* ------------------------------------------------------------------------------- Ratings */}

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

      {/* ------------------------------------------------------------------------------- Things to know */}

      <InfoBox4>
        <h2>Things to know</h2>
        <Policies>
          <Policy>
            <PolicyIcon image={cancel} />
            <PolicyInfo>
              <h3>Cancellation policy</h3>
              <p>
                Free cancellation before June 30. Cancel check in on July 5 for
                a partial refund.
              </p>
            </PolicyInfo>
          </Policy>

          <Policy>
            <PolicyIcon image={key} />
            <PolicyInfo>
              <h3>House rules</h3>
              <p>Check-in: 4:00 PM - 6:00PM</p>
              <p>Checkout before 11:00 AM</p>
              <p>2 guests maximum</p>
            </PolicyInfo>
          </Policy>
        </Policies>
      </InfoBox4>

      {/* ------------------------------------------------------------------------------- Calendar */}
      <InfoBox5>
        <h2>Select Dates</h2>
        <Calendar>
          <MonthUI>
            <MonthToggleButton icon={left} onClick={handlePrevMonth}></MonthToggleButton>
            <span>{format(currentMonth, "MMMM")}</span>
            <MonthToggleButton icon={right} onClick={handleNextMonth}></MonthToggleButton>
          </MonthUI>

          <WeekDayRow>{renderWeekDays}</WeekDayRow>
          <DaysGrid>{renderCalendarDays}</DaysGrid>
        </Calendar>
      </InfoBox5>

      <BtnContainer>
        <BookBtn>
          <span>BOOK THIS ROOM</span>
        </BookBtn>
      </BtnContainer>
    </MainContainer>
  );
};

export default Rooms;
