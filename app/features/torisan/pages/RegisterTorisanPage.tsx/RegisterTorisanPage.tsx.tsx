import { Title } from "@/components/molecules/Title";
import { getTorisanSpecies } from "../../api";
import { RegisterTorisanForm } from "../../components/RegisterTorisanForm";

export const RegisterTorisanPage: React.FC = async () => {
  const species = await getTorisanSpecies();
  return (
    <>
      <Title
        title="鳥さんの登録"
        description={`新しい鳥さんですね、嬉しいです\nitoに鳥さんを登録しましょう！`}
      />
      {species && (
        <RegisterTorisanForm species={species} onSubmit={() => alert("warn")} />
      )}
    </>
  );
};
