import styled from "@emotion/styled";
import { useLocalStorage } from "usehooks-ts";
import { Filter, defaultFilters, CaravanType } from "../Filter";

interface CaravanFilterType {
  value: CaravanType;
  title: string;
  description: string;
}

const SelectTypeWrapper = styled.div`
  min-width: 400px;
  margin: 23px 0px;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    padding: 16px 32px;
    border-top: 1px solid #edeae3;
    border-bottom: 1px solid #edeae3;
  }
`;

const TypeWrapper = styled.div`
  width: fit-content;
  min-height: 88px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  gap: 20px;
`;

const Type = styled.div<{ selected: boolean }>`
  width: 156px;
  min-height: 88px;
  border-radius: 8px;
  border: ${(props) => (props.selected ? "2px solid #119383" : "1px solid #EDEAE3")};
  cursor: pointer;
`;

const TypeHeading = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: black;
  padding: 12px 12px 4px 12px;
  @media (max-width: 1280px) {
    border-left: 0px;
  }
`;

const TypeDescription = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #9c8c8c;
  padding: 0px 0px 12px 12px;
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

const caravanTypes: CaravanFilterType[] = [
  {
    value: "Campervan",
    title: "Campervan",
    description: "Obytka s rozměry osobáku, se kterou dojedete všude.",
  },
  {
    value: "Intergrated",
    title: "Integrál",
    description: "Král mezi karavany. Luxus na kolech.",
  },
  {
    value: "BuiltIn",
    title: "Vestavba",
    description: "Celý byt geniálně poskládaný do dodávky.",
  },
  {
    value: "Alcove",
    title: "Přívěs",
    description: "Tažný karavan za vaše auto. Od kapkovitých až po rodinné.",
  },
];

export const TypeFilter = () => {
  const [filter, setFilter] = useLocalStorage<Filter | undefined>("filters", defaultFilters);

  const handleClick = (value: CaravanType) => {
    if (filter?.vehicleType?.find((i) => i == value)) {
      setFilter({ ...filter, ...{ page: 1, vehicleType: (filter?.vehicleType ?? []).filter((i) => i !== value) } });
    } else {
      setFilter({ ...filter, ...{ page: 1, vehicleType: [...(filter?.vehicleType ?? []), value] } });
    }
  };

  return (
    <SelectTypeWrapper>
      <Text>Typ karavanu</Text>
      <TypeWrapper>
        {caravanTypes.map((item) => {
          const selected = filter?.vehicleType && filter?.vehicleType?.find((i) => i === item.value) ? true : false;

          return (
            <Type selected={selected} onClick={() => handleClick(item.value)} key={item.value}>
              <TypeHeading>{item.title}</TypeHeading>
              <TypeDescription>{item.description}</TypeDescription>
            </Type>
          );
        })}
      </TypeWrapper>
    </SelectTypeWrapper>
  );
};
