import styled from "@emotion/styled";
import { InstantBookableFilter } from "./components/InstantBookableFilter";
import { PriceFilter } from "./components/PriceFilter";
import { TypeFilter } from "./components/TypeFilter";

export const RESULTS_PER_PAGE = 6;
export const MIN_PRICE = 100;
export const MAX_PRICE = 10_000;

export type CaravanType = "Campervan" | "Intergrated" | "BuiltIn" | "Alcove";

export interface Filter {
  page: number;
  price?: {
    min?: number;
    max?: number;
  };
  vehicleType?: CaravanType[];
  instantBookable?: boolean;
}

export const defaultFilters: Filter = {
  page: 1,
  price: {
    min: 1200,
    max: 7600,
  },
  instantBookable: true,
};

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Divider = styled.div`
  border-left: 1px solid #edeae3;
  @media (max-width: 1200px) {
    border-left: 0px;
  }
`;

export const Filter = (): JSX.Element => {
  return (
    <FilterWrapper>

      <PriceFilter />

      <Divider />

      <TypeFilter />

      <Divider />

      <InstantBookableFilter />

    </FilterWrapper>
  );
};
