import { Title } from "@/components/molecules/Title";
import { getSummaryTorisans } from "../../api";
import { SelectTorisans } from "@/components/organisms/SelectTorisans/SelectTorisans";

export const SelectPage = async () => {
  const torisans = await getSummaryTorisans();
  return (
    <>
      <Title
        title="鳥さん"
        description="鳥さん基本情報の確認・編集を行います"
      />
      {torisans && (
        <SelectTorisans
          onSubmit={() => {}}
          torisans={torisans.map((torisan) => ({
            id: torisan.id,
            nickname: torisan.basic.nickname,
            stage: torisan.stage,
            src: "/mascot/ito.png",
          }))}
        />
      )}
    </>
  );
};
