type Props = {
  children: React.ReactNode;
};
export const Chip: React.FC<Props> = ({ children }) => {
  return (
    <span className="bg-secondary text-white text-xs rounded py-1 px-3">
      {children}
    </span>
  );
};
