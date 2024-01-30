type Props = {
  children: React.ReactNode;
};
export const Paper: React.FC<Props> = ({ children }) => {
  return <div className="bg-white rounded shadow-md p-4">{children}</div>;
};
