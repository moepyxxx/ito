/**
 * ある型を変更する
 */
export type ChangeType<
  Target extends object,
  Key extends keyof Target,
  Type,
> = Omit<Target, Key> & { [K in Key]: Type };
