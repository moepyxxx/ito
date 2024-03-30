type Props = {
  children: React.ReactNode;
};
export const PageLayout: React.FC<Props> = ({ children }) => {
  return <div className="px-4 w-full mb-28">{children}</div>;
};
