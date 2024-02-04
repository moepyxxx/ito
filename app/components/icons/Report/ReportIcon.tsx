import { getHtmlCodeFromColorKey } from "../../../utils/color";
import { SvgProps } from "../props";

export const ReportIcon: React.FC<SvgProps> = ({
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
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.43909 26.8577V18.8004H10.7724V26.8577H7.43909ZM15.7724 26.8577V12.086H19.1058V26.8577H15.7724ZM24.1058 26.8577V5.37158H27.4391V26.8577H24.1058Z"
        fill={htmlColor}
      />
    </svg>
  );
};
