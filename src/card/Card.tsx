import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";

import { SeatIcon } from "./icons/SeatIcon";
import { ToiletIcon } from "./icons/ToiletIcon";
import { ShowerIcon } from "./icons/ShowerIcon";
import { BedIcon } from "./icons/BedIcon";
import { BoltIcon } from "./icons/BoltIcon";
import { CaravanType } from "../filter/Filter";

export interface CardType {
  pictures: string[];
  name: string;
  passengersCapacity: number;
  sleepCapacity: number;
  toilet: boolean;
  shower: boolean;
  vehicleType: CaravanType;
  price: number;
  location: string;
  instantBookable: boolean;
}

const Container = styled.div`
  width: 424px;
  min-width: 343px;
  @media (max-width: 400px) {
    padding: 0px 16px;
  }
`;

const CardWrapper = styled.div`
  width: 392px;
  min-width: 343px;
  border-radius: 8px;
  border: 1px solid #edeae3;
  @media (max-width: 400px) {
    width: 343px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 190px;
  padding: 16px;
  border-radius: 0px 0px 8px 8px;
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px 8px 0px 0px;
`;

const VehicleType = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 1px;
  color: #ff5e55;
  text-transform: uppercase;
  text-align: left;
`;

const Name = styled.div`
  font-size: 24px;
  margin-top: 2px;
  font-weight: bold;
  line-height: 32px;
`;

const Location = styled.div`
  font-size: 14px;
  color: #1f2244;
  font-weight: 500;
  margin-bottom: 9px;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 12px;
  align-items: center;
`;

const Divider = styled.hr`
  margin: 9px 0px;
`;

const IconsContainer = styled.div`
  display: flex;
  margin-bottom: 9px;
`;

const PriceContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PriceWrapper = styled.div`
  display: flex;

  align-items: center;
`;

export const Card = ({
  pictures,
  name,
  passengersCapacity,
  sleepCapacity,
  toilet,
  shower,
  vehicleType,
  price,
  location,
  instantBookable,
}: CardType) => {
  return (
    <Container>
      <CardWrapper>
        <Carousel
          sx={{ width: "100%", height: "190px", borderRadius: "8px 8px 0px 0px" }}
          mx="auto"
          withIndicators
          loop
          withControls={false}
          height={200}
        >
          {pictures.map((picture, i) => {
            return (
              <Carousel.Slide key={i}>
                <ImageContainer>
                  <Image
                    loader={() => picture}
                    src={picture}
                    alt={""}
                    width={394}
                    height={190}
                    style={{ width: "394px", height: "190px", objectFit: "cover" }}
                  />
                </ImageContainer>
              </Carousel.Slide>
            );
          })}
        </Carousel>

        <InfoContainer>
          <VehicleType>{vehicleType}</VehicleType>
          <Name>{name}</Name>

          <Divider />

          <Location>{location}</Location>
          <IconsContainer>
            <IconWrapper>
              <SeatIcon count={passengersCapacity} />
            </IconWrapper>
            <IconWrapper>
              <BedIcon count={sleepCapacity} />
            </IconWrapper>
            {toilet && (
              <IconWrapper>
                <ToiletIcon />
              </IconWrapper>
            )}
            {shower && (
              <IconWrapper>
                <ShowerIcon />
              </IconWrapper>
            )}
          </IconsContainer>

          <Divider />

          <PriceContainer>
            <div style={{ fontSize: "16px", lineHeight: "21px", color: "#9C8C8C" }}>Cena od</div>
            <PriceWrapper>
              <div style={{ fontSize: "16px", fontWeight: "bold", color: "black", marginRight: "8px" }}>
                {price + " Kč/den"}
              </div>
              {instantBookable && <BoltIcon />}
            </PriceWrapper>
          </PriceContainer>
        </InfoContainer>
      </CardWrapper>
    </Container>
  );
};
