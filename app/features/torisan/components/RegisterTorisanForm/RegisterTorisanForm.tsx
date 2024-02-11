import { RegisterTorisan, TorisanSpecie } from "../../api";

type Props = {
  species: TorisanSpecie[];
  onSubmit: (torisan: RegisterTorisan) => void;
};
export const RegisterTorisanForm: React.FC<Props> = ({ species }) => {
  return <div></div>;
};
