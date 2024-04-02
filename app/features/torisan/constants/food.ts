import { Selection } from "@/components/atoms/forms/FormRadioGroup";
import { OtherFoodsAnySelect, StapleFoodAnySelect } from "@ito/common";

export const StapleFoodSelections: Selection[] = [
  { value: 1, label: "シード" },
  { value: 2, label: "ペレット" },
  { value: StapleFoodAnySelect, label: "その他" },
];

export const OtherFoodsSelections: Selection[] = [
  { value: 1, label: "シード" },
  { value: 2, label: "ペレット" },
  { value: 3, label: "野菜" },
  { value: 4, label: "果物" },
  { value: 5, label: "ボレー粉" },
  { value: 6, label: "塩土" },
  { value: 7, label: "ビタミン剤" },
  { value: OtherFoodsAnySelect, label: "その他" },
];
