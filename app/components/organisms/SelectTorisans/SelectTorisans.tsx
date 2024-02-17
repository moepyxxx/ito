"use client";

import { Button } from "@/components/atoms/Button";
import { TorisanBoardButton } from "@/components/molecules/TorisanBoardButton";
import { StageLabel, StageType } from "@ito/common";
import { useState } from "react";

type Props = {
  torisans: {
    id: number;
    nickname: string;
    stage: StageType;
    src: string;
  }[];
  onSubmit: (torisanId: number) => void;
};
export const SelectTorisans: React.FC<Props> = ({ torisans, onSubmit }) => {
  const [selectedTorisanId, setSelectedTorisanId] = useState<number | null>(
    null
  );
  return (
    <div>
      {torisans.map((torisan) => (
        <div key={torisan.id} className="pt-3">
          <TorisanBoardButton
            isChecked={selectedTorisanId === torisan.id}
            chipText={StageLabel[torisan.stage]}
            src={torisan.src}
            nickname={torisan.nickname}
            onClick={() => setSelectedTorisanId(torisan.id)}
          />
        </div>
      ))}
      <div className="mt-8 text-center">
        <Button
          disabled={selectedTorisanId === null}
          variant={{ type: "primary" }}
          element={{
            elementType: "button",
            buttonType: "button",
            onClick: () => onSubmit(selectedTorisanId as number),
          }}>
          記録・観察をはじめる
        </Button>
      </div>
    </div>
  );
};
