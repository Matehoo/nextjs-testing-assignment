import styled from "@emotion/styled";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { CardType } from "../src/card/Card";
import { Layout } from "../src/components/Layout";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export type FilterOption = {
  title: string;
  content: string;
  type: string;
};

export type ResponseDataType = {
  location: string;
  instantBookable: boolean;
  name: string;
  passengersCapacity: number;
  sleepCapacity: number;
  price: number;
  toilet: boolean;
  shower: boolean;
  vehicleType: string;
  pictures: string[];
};

export type ResponseAPI = {
  count: number;
  items: ResponseDataType[];
};

export const fetchData = async (): Promise<ResponseAPI | undefined> => {
  try {
    const response = await axios.post("http://localhost:3000/api/data");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {
  const [data, setData] = useState<CardType[]>([]);
  const initializeData = useCallback(async () => {
    const apiResponse = await fetchData();
    apiResponse && setData(apiResponse.items as CardType[]);
  }, [setData]);

  useEffect(() => {
    initializeData();
  }, [initializeData]);

  return (
    <PageWrapper>
      <Layout data={data}/>
    </PageWrapper>
  );
};

export default Home;
