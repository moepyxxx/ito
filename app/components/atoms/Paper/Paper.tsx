import { WithBaseElementProps } from "@/types";

export const Paper: React.FC<WithBaseElementProps> = ({
  children,
  className = "",
  id,
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-4 ${className}`} id={id}>
      {children}
    </div>
  );
};
