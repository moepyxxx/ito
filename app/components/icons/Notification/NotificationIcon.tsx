import { getHtmlCodeFromColorKey } from "../../../utils/color";
import { SvgProps } from "../props";

export const NotificationIcon: React.FC<SvgProps> = ({
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
        d="M15 14.6571H17V7.94269H15V14.6571ZM16 19.3572C16.2667 19.3572 16.5 19.2564 16.7 19.055C16.9 18.8536 17 18.6186 17 18.35C17 18.0814 16.9 17.8464 16.7 17.645C16.5 17.4436 16.2667 17.3428 16 17.3428C15.7334 17.3428 15.5 17.4436 15.3 17.645C15.1 17.8464 15 18.0814 15 18.35C15 18.6186 15.1 18.8536 15.3 19.055C15.5 19.2564 15.7334 19.3572 16 19.3572ZM16 26.7766C18.9556 24.0684 21.1389 21.6121 22.55 19.4075C23.9612 17.203 24.6667 15.2614 24.6667 13.5828C24.6667 10.9418 23.8278 8.78199 22.15 7.10339C20.4723 5.42479 18.4223 4.58549 16 4.58549C13.5778 4.58549 11.5278 5.42479 9.85004 7.10339C8.17226 8.78199 7.33337 10.9418 7.33337 13.5828C7.33337 15.2614 8.0556 17.203 9.50004 19.4075C10.9445 21.6121 13.1112 24.0684 16 26.7766ZM16 29.4288C12.4223 26.3625 9.75004 23.5145 7.98337 20.8847C6.21671 18.2549 5.33337 15.8209 5.33337 13.5828C5.33337 10.2256 6.4056 7.55101 8.55004 5.55907C10.6945 3.56714 13.1778 2.57117 16 2.57117C18.8223 2.57117 21.3056 3.56714 23.45 5.55907C25.5945 7.55101 26.6667 10.2256 26.6667 13.5828C26.6667 15.8209 25.7834 18.2549 24.0167 20.8847C22.25 23.5145 19.5778 26.3625 16 29.4288Z"
        fill={htmlColor}
      />
    </svg>
  );
};
