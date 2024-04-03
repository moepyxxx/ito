"use client";

import { PageLayout } from "@/components/layouts/PageLayout/PageLayout";
import { useTorisanDetailForEdit } from "./useTorisanDetailForEdit";

type Props = {
  torisanId: number;
};
export const Edit: React.FC<Props> = ({ torisanId }) => {
  const { loading, detailForEdit } = useTorisanDetailForEdit(torisanId);

  if (loading || detailForEdit == null) return <></>;

  return <PageLayout>ほげ</PageLayout>;
};
