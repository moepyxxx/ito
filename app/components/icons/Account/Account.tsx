import { getHtmlCodeFromColorKey } from "../../../utils/color";
import { SvgProps } from "../props";

export const AccountIcon: React.FC<SvgProps> = ({
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
        d="M16 15.9667C14.5334 15.9667 13.3334 15.5 12.4 14.5667C11.4667 13.6333 11 12.4333 11 10.9667C11 9.50001 11.4667 8.30001 12.4 7.36667C13.3334 6.43334 14.5334 5.96667 16 5.96667C17.4667 5.96667 18.6667 6.43334 19.6 7.36667C20.5334 8.30001 21 9.50001 21 10.9667C21 12.4333 20.5334 13.6333 19.6 14.5667C18.6667 15.5 17.4667 15.9667 16 15.9667V15.9667ZM5.33337 26.6667V23.5333C5.33337 22.6889 5.54449 21.9667 5.96671 21.3667C6.38893 20.7667 6.93337 20.3111 7.60004 20C9.08893 19.3333 10.5167 18.8333 11.8834 18.5C13.25 18.1667 14.6223 18 16 18C17.3778 18 18.7445 18.1722 20.1 18.5167C21.4556 18.8611 22.8778 19.3556 24.3667 20C25.0556 20.3111 25.6112 20.7667 26.0334 21.3667C26.4556 21.9667 26.6667 22.6889 26.6667 23.5333V26.6667H5.33337ZM7.33337 24.6667H24.6667V23.5333C24.6667 23.1778 24.5612 22.8389 24.3501 22.5167C24.1389 22.1944 23.8778 21.9556 23.5667 21.8C22.1445 21.1111 20.8445 20.6389 19.6667 20.3833C18.4889 20.1278 17.2667 20 16 20C14.7334 20 13.5 20.1278 12.3 20.3833C11.1 20.6389 9.80004 21.1111 8.40004 21.8C8.08893 21.9556 7.83338 22.1944 7.63337 22.5167C7.43337 22.8389 7.33337 23.1778 7.33337 23.5333V24.6667ZM16 13.9667C16.8667 13.9667 17.5834 13.6833 18.15 13.1167C18.7167 12.55 19 11.8333 19 10.9667C19 10.1 18.7167 9.38334 18.15 8.81667C17.5834 8.25001 16.8667 7.96667 16 7.96667C15.1334 7.96667 14.4167 8.25001 13.85 8.81667C13.2834 9.38334 13 10.1 13 10.9667C13 11.8333 13.2834 12.55 13.85 13.1167C14.4167 13.6833 15.1334 13.9667 16 13.9667Z"
        fill={htmlColor}
      />
    </svg>
  );
};
