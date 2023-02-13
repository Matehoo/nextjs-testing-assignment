import { NumberInput, RangeSlider } from "@mantine/core";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import { Filter, defaultFilters, MIN_PRICE, MAX_PRICE } from "../Filter";

const PriceWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin: 23px 0px;
  padding-right: 16px;
  @media (max-width: 400px) {
    margin-bottom: 0px;
  }
`;

const PriceInputWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Text = styled.div`
  display: flex;
  gap: 8px;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #9c8c8c;
  opacity: 1;
  padding-bottom: 16px;
`;

export const PriceFilter = () => {
  const [filter, setFilter] = useLocalStorage<Filter | undefined>("filters", defaultFilters);
  const [minPrice, setMinPrice] = useState<number>(filter?.price?.min ?? 1200);
  const [maxPrice, setMaxPrice] = useState<number>(filter?.price?.max ?? 7200);

  useEffect(() => {
    setFilter(defaultFilters);
  }, []);

  useEffect(() => {
    setFilter({ ...filter, ...{ page: 1, price: { min: minPrice, max: maxPrice } } });
  }, [minPrice, maxPrice]);

  const handleMinPriceChange = (min: number) => {
    if (min && min <= maxPrice) {
      setMinPrice(min);
    }
  };
  
  const handleMaxPriceChange = (max: number) => {
    if (max && max >= minPrice) {
      setMaxPrice(max);
    }
  };
  
  const handlePriceUpdate = ({ min, max }: { min?: number; max?: number }) => {
    min && handleMinPriceChange(min);
    max && handleMaxPriceChange(max);
  };
  
  return (
    <PriceWrapper>
      <Text>Cena za den</Text>
      <RangeSlider
        thumbSize={24}
        styles={{
          root: { width: "328px", height: "24px" },
          thumb: {
            backgroundColor: "#119383",
            borderWidth: 0,
          },
          track: {
            height: "4px",
          },
          bar: {
            backgroundColor: "#119383",
          },
        }}
        min={MIN_PRICE}
        max={MAX_PRICE}
        value={[minPrice, maxPrice]}
        onChange={([min, max]) => handlePriceUpdate({ min, max })}
      />
      <PriceInputWrapper>
        <NumberInput
          hideControls
          styles={{
            wrapper: {
              width: "154px",
              height: "48px",
            },
            input: {
              borderRadius: "8px",
            },
          }}
          value={minPrice}
          min={MIN_PRICE}
          max={maxPrice - 1}
          onChange={(value) => handleMinPriceChange(Number(value))}
        />
        <NumberInput
          hideControls
          styles={{
            wrapper: {
              width: "154px",
              height: "48px",
            },
            input: {
              borderRadius: "8px",
            },
          }}
          value={maxPrice}
          min={minPrice + 1}
          max={MAX_PRICE}
          onChange={(value) => handleMaxPriceChange(Number(value))}
        />
      </PriceInputWrapper>
    </PriceWrapper>
  );
};
