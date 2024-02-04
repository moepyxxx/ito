import { getHtmlCodeFromColorKey } from "../../../utils/color";
import { SvgProps } from "../props";

export const FaqIcon: React.FC<SvgProps> = ({
  color,
  size,
  className = "",
}) => {
  const htmlColor = getHtmlCodeFromColorKey(color);
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.1667 29.3333L16.8333 25.6666H15.5C12.3222 25.6666 9.61111 24.5444 7.36667 22.3C5.12222 20.0555 4 17.3444 4 14.1666C4 10.9889 5.12778 8.27774 7.38333 6.03329C9.63889 3.78885 12.3667 2.66663 15.5667 2.66663C17.1444 2.66663 18.6056 2.94996 19.95 3.51663C21.2944 4.08329 22.4667 4.87774 23.4667 5.89996C24.4667 6.92218 25.25 8.12774 25.8167 9.51663C26.3833 10.9055 26.6667 12.4222 26.6667 14.0666C26.6667 15.5333 26.45 17 26.0167 18.4666C25.5833 19.9333 24.9556 21.3333 24.1333 22.6666C23.3111 24 22.3111 25.2333 21.1333 26.3666C19.9556 27.5 18.6333 28.4889 17.1667 29.3333ZM18.8333 25.7333C20.6556 24.2 22.0833 22.3944 23.1167 20.3166C24.15 18.2389 24.6667 16.1555 24.6667 14.0666C24.6667 11.3111 23.8056 9.05552 22.0833 7.29996C20.3611 5.5444 18.1889 4.66663 15.5667 4.66663C12.9 4.66663 10.6389 5.5944 8.78333 7.44996C6.92778 9.30552 6 11.5444 6 14.1666C6 16.7889 6.92778 19.0277 8.78333 20.8833C10.6389 22.7389 12.8778 23.6666 15.5 23.6666H18.8333V25.7333ZM15.5667 21.9C15.9222 21.9 16.2222 21.7777 16.4667 21.5333C16.7111 21.2889 16.8333 20.9889 16.8333 20.6333C16.8333 20.2777 16.7111 19.9777 16.4667 19.7333C16.2222 19.4889 15.9222 19.3666 15.5667 19.3666C15.2111 19.3666 14.9111 19.4889 14.6667 19.7333C14.4222 19.9777 14.3 20.2777 14.3 20.6333C14.3 20.9889 14.4222 21.2889 14.6667 21.5333C14.9111 21.7777 15.2111 21.9 15.5667 21.9ZM14.6667 17.3666H16.3333C16.3333 16.8111 16.4278 16.35 16.6167 15.9833C16.8056 15.6166 17.2 15.1333 17.8 14.5333C18.4 13.9333 18.8222 13.3833 19.0667 12.8833C19.3111 12.3833 19.4333 11.8444 19.4333 11.2666C19.4333 10.2666 19.0944 9.44441 18.4167 8.79996C17.7389 8.15552 16.8333 7.83329 15.7 7.83329C14.7667 7.83329 13.9333 8.07774 13.2 8.56663C12.4667 9.05552 11.9222 9.72218 11.5667 10.5666L13.1 11.2C13.3444 10.6222 13.6833 10.1944 14.1167 9.91663C14.55 9.63885 15.0444 9.49996 15.6 9.49996C16.2667 9.49996 16.7889 9.66107 17.1667 9.9833C17.5444 10.3055 17.7333 10.7333 17.7333 11.2666C17.7333 11.6889 17.6111 12.1166 17.3667 12.55C17.1222 12.9833 16.6889 13.5222 16.0667 14.1666C15.4667 14.7889 15.0833 15.2889 14.9167 15.6666C14.75 16.0444 14.6667 16.6111 14.6667 17.3666V17.3666Z"
        fill={htmlColor}
      />
    </svg>
  );
};
