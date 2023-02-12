import styled from "@emotion/styled";

export interface IconProps {
  count?: number;
}

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountWrapper = styled.div`
  color: #1f2244;
  font-size: 14px;
  font-weight: 500;
  padding-left: 4px;
`;
