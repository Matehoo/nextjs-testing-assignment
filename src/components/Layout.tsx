import styled from "@emotion/styled";
import Image from "next/image";
import { Card, CardType } from "../card/Card";
import { useLocalStorage } from "usehooks-ts";
import { defaultFilters, Filter, RESULTS_PER_PAGE, MIN_PRICE, MAX_PRICE } from "../filter/Filter";
import { useEffect, useState } from "react";
import React from "react";

const LayoutContainer = styled.div`
  width: 100%;
  min-width: 400px;
`;

const HeaderWrapper = styled.div`
  border-top: 1px solid #edeae3;
  border-bottom: 1px solid #edeae3;
  padding: 0px 10px;
`;

const LogoContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0px auto;
  height: 80px;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 0px 10px;
`;

const LogoWrapper = styled.div`
  width: 100%;
  min-width: 400px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: start;
  @media (max-width: 400px) {
    justify-content: center;
  }
`;

const CardWrapper = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(343px, 394px));
  grid-gap: 32px;
  justify-content: space-evenly;
  margin-top: 32px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  padding-top: 48px;
`;

const Button = styled.button`
  width: 155px;
  height: 48px;
  background: #119383;
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #ffffff;
  border-radius: 8px;
  border: none;
`;

const filterData = (data: CardType[], filters: Filter): CardType[] => {
  let filteredData = data || [];

  if (filters?.price?.min) {
    filteredData = filteredData.filter((item) => item.price >= (filters.price!.min ?? MIN_PRICE));
  }
  if (filters?.price?.max) {
    filteredData = filteredData.filter((item) => item.price <= (filters?.price?.max ?? MAX_PRICE));
  }
  if (filters?.vehicleType && filters?.vehicleType.length > 0) {
    filteredData = filteredData.filter((item) =>
      filters.vehicleType!.find((type: string) => type === item.vehicleType)
    );
  }
  if (filters?.instantBookable !== undefined) {
    filteredData = filteredData.filter((item) => item.instantBookable === filters.instantBookable);
  }

  filteredData.length = RESULTS_PER_PAGE * filters.page;

  return filteredData;
};

interface LayoutType {
  data: CardType[];
}

export const Layout = ({ data }: LayoutType): JSX.Element => {
  const [filter, setFilter] = useLocalStorage<Filter>("filters", defaultFilters);
  const [cardData, setCardData] = useState<CardType[]>([]);
  const handleMore = () => {
    setFilter({ ...filter, ...{ page: filter.page + 1 } });
  };

  useEffect(() => {
    setCardData(filterData(data, filter));
  }, [data, filter, setCardData]);

  return (
    <LayoutContainer>
      <LogoContainer>
        <LogoWrapper>
          <Image src={"/logo.png"} alt="logo" width={201} height={35.19} />
        </LogoWrapper>
      </LogoContainer>
      <HeaderWrapper>
        <Filter />
      </HeaderWrapper>
      <CardWrapper>
        {cardData.map((item, i) => {
          return <Card {...item} key={i} />;
        })}
      </CardWrapper>
      <ButtonWrapper>
        <Button onClick={() => handleMore()}>Načíst další</Button>
      </ButtonWrapper>
    </LayoutContainer>
  );
};
