import { Select } from "@mantine/core";
import React from "react";
import styled from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import { BoltIcon } from "../../card/icons/BoltIcon";
import { Filter, defaultFilters } from "../Filter";

const InstantBookableWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: flex-start;
  margin: 23px 0px;
  padding-left: 16px;
  @media (max-width: 400px) {
    width: 100%;
    margin-top: 0px;
    padding-left: 21px;
  }
`;

export const Text = styled.div`
  display: flex;
  gap: 8px;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #9c8c8c;
  opacity: 1;
  padding-bottom: 10px;
`;

export const InstantBookableFilter = () => {
  const [filter, setFilter] = useLocalStorage<Filter | undefined>("filters", defaultFilters);

  const handleClick = (value: string) => {
    const instantBookable = value === "true";
    console.log(instantBookable);
    setFilter({ ...filter, ...{ page: 1, instantBookable } });
  };

  return (
    <InstantBookableWrapper>
      <Text>
        Okamžitá rezervace <BoltIcon />
      </Text>
      <Select
        radius={8}
        defaultValue={String(filter?.instantBookable) ?? "true"}
        styles={{
          input: {
            width: "176px",
            height: "48px",
            borderColor: "#edeae3",
          },
        }}
        onChange={handleClick}
        data={[
          { value: "true", label: "Ano" },
          { value: "false", label: "Ne" },
        ]}
      />
    </InstantBookableWrapper>
  );
};
