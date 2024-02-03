export type BaseElementProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export type WithBaseElementProps<
  AdditionalProps = {},
  PickPropsKey extends keyof BaseElementProps = keyof BaseElementProps
> = Pick<BaseElementProps, PickPropsKey> & AdditionalProps;
