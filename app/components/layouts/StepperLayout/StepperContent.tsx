type Props = {
  children: React.ReactNode;
};
export const StepperContent = ({ children }: Props) => {
  return (
    <div className="mt-14 border-solid border-black border rounded text-center">
      {children}
    </div>
  );
};
