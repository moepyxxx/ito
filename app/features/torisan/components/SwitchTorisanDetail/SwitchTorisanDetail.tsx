"use client";

import { SelectTorisans } from "@/components/organisms/SelectTorisans";
import { SummaryTorisan } from "../../api";
import { useRouter } from "next/navigation";

type Props = {
  torisans: SummaryTorisan[];
};
export const SwitchTorisanDetail: React.FC<Props> = ({ torisans }) => {
  const router = useRouter();
  return (
    <div>
      {" "}
      {torisans && (
        <SelectTorisans
          onSubmit={(torisanId: number) => {
            router.push(`/p/torisan/${torisanId}`);
          }}
          torisans={torisans.map((torisan) => ({
            id: torisan.id,
            nickname: torisan.basic.nickname,
            stage: torisan.stage,
            src: "/mascot/ito.png",
          }))}
        />
      )}
    </div>
  );
};
