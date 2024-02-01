import { getHtmlCodeFromColorKey } from "../../../utils/color";
import { SvgProps } from "../props";

export const HomeIcon: React.FC<SvgProps> = ({ color, size }) => {
  const htmlColor = getHtmlCodeFromColorKey(color);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.25 26H11.875V17.6667H20.125V26H25.75V13L16 6.5L6.25 13V26ZM4 28V12L16 4L28 12V28H17.875V19.6667H14.125V28H4Z"
        fill={htmlColor}
      />
    </svg>
  );
};
