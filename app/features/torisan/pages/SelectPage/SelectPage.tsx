import { Title } from "@/components/molecules/Title";
import { getSummaryTorisans } from "../../api";
import { SwitchTorisanDetail } from "../../components/SwitchTorisanDetail";

export const SelectPage: React.FC = async () => {
  const torisans = await getSummaryTorisans();
  return (
    <>
      <Title
        title="鳥さん"
        description="鳥さん基本情報の確認・編集を行います"
      />
      {torisans && <SwitchTorisanDetail torisans={torisans} />}
    </>
  );
};
