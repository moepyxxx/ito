"use client";

import { PageLayout } from "@/components/layouts/PageLayout/PageLayout";
import { useTorisanDetailForEdit } from "./useTorisanDetailForEdit";
import { EditForm } from "../../components/EditForm";

type Props = {
  torisanId: number;
};
export const Edit: React.FC<Props> = ({ torisanId }) => {
  const { loading, detailForEdit, detailReadonly } =
    useTorisanDetailForEdit(torisanId);

  if (loading || detailForEdit == null || detailReadonly == null) return <></>;

  return (
    <PageLayout>
      <EditForm
        torisanId={torisanId}
        detailForEdit={detailForEdit}
        detailReadonly={detailReadonly}
      />
    </PageLayout>
  );
};
