import { IconProps, IconWrapper, CountWrapper } from "./Icon";

export const BedIcon = ({ count }: IconProps) => {
  return (
    <IconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <g id="Hotel_Double_Bed_1" data-name="Hotel Double Bed 1" transform="translate(0 2)">
          <path
            id="Combined_Shape"
            data-name="Combined Shape"
            d="M18.757,15.718l-.007-.093V13.75H1.25v1.875a.625.625,0,0,1-1.243.093L0,15.625V9.167A2.3,2.3,0,0,1,1.875,6.913V1.875A1.876,1.876,0,0,1,3.6.005L3.75,0h12.5A1.876,1.876,0,0,1,18.12,1.729l.005.146V6.913A2.3,2.3,0,0,1,20,9.167v6.458a.625.625,0,0,1-1.243.093ZM1.25,9.167V12.5h17.5V9.167a1.039,1.039,0,0,0-.928-1.035l-.113-.006H2.291A1.042,1.042,0,0,0,1.25,9.167ZM16.875,6.875V5.625a.625.625,0,0,0-.533-.618L16.25,5h-5a.625.625,0,0,0-.618.532l-.006.093v1.25Zm-7.5,0V5.625a.625.625,0,0,0-.533-.618L8.75,5h-5a.625.625,0,0,0-.618.532l-.007.093v1.25ZM8.75,3.75A1.868,1.868,0,0,1,10,4.228a1.867,1.867,0,0,1,1.1-.472l.147-.005h5a1.871,1.871,0,0,1,.625.107V1.875a.626.626,0,0,0-.533-.618L16.25,1.25H3.75a.625.625,0,0,0-.618.533l-.007.092V3.857a1.868,1.868,0,0,1,.479-.1L3.75,3.75Z"
            transform="translate(0 -0.125)"
            fill="#9c8c8c"
          />
        </g>
      </svg>
      <CountWrapper>{count}</CountWrapper>
    </IconWrapper>
  );
};
