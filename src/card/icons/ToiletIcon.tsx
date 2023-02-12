import { IconProps, IconWrapper, CountWrapper } from "./Icon";

export const ToiletIcon = ({ count }: IconProps) => {
  return (
    <IconWrapper>
      <svg
        id="Icon_Bed_Copy_2"
        data-name="Icon/Bed Copy 2"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20.004"
        viewBox="0 0 20 20.004"
      >
        <path
          id="Shape"
          d="M5,20a.62.62,0,0,1-.489-.237.627.627,0,0,1-.116-.533l.515-2.163A7.422,7.422,0,0,1,1.272,11.15a1.875,1.875,0,0,1,.6-3.65H11.25V1.875A1.879,1.879,0,0,1,13.125,0h2.5A1.879,1.879,0,0,1,17.5,1.875v7.5a1.869,1.869,0,0,1-1.3,1.784,3.129,3.129,0,0,1-2.076,2.428.613.613,0,0,0-.374.587v5.2a.626.626,0,0,1-.625.625H5Zm-2.467-8.75a6.231,6.231,0,0,0,3.379,4.943.625.625,0,0,1,.324.7l-.442,1.855H12.5V14.193a1.865,1.865,0,0,1,1.19-1.778l.036-.012a1.87,1.87,0,0,0,1.165-1.151H2.531Zm10.594-10a.625.625,0,0,0-.625.625V10h3.125a.626.626,0,0,0,.625-.625v-7.5a.626.626,0,0,0-.625-.625ZM1.875,8.75a.625.625,0,0,0,0,1.25H11.25V8.75Z"
          transform="translate(1.417 0.002)"
          fill="#9c8c8c"
        />
      </svg>
      <CountWrapper>{count}</CountWrapper>
    </IconWrapper>
  );
};
