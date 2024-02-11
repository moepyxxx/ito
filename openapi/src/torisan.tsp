namespace TorisanModel;

alias GenderUnknown = 1;
alias GenderMan = 2;
alias GenderWoman = 3;

alias StageObservation = 1;
alias StageMedicalTreatment = 2;
alias StageHospitalization = 3;

model TorisanSpecie {
  @doc("ID")
  id: int64;
  @doc("種類名")
  name: string;
}

model TorisanBasic {
  basic: {
    @doc("本名")
    name: string;
    @doc("誕生日")
    birth_date: string;
    @doc("種類ID")
    species_id: int32;
    @doc("性別")
    gender_type: GenderUnknown | GenderMan | GenderWoman;
  };
}

model TorisanObjective {
  objective: {
    @doc("体重")
    body_weight: float32;
    @doc("水の量")
    amount_of_water: float32;
  };
}

model TorisanMeal {
  meal: {
    @doc("主食ID")
    staple_food_id: int32;
    @doc("副食IDリスト")
    additional_food_ids: int32[];
  };
}

@doc("鳥さん")
model RegisterTorisan {
  ...TorisanBasic;
  ...TorisanObjective;
  ...TorisanMeal;
}

@doc("更新用の鳥さん")
model UpdateTorisan {
  ...TorisanObjective;
  ...TorisanMeal;
}

@doc("詳細用の鳥さん")
model DetailTorisan {
  @doc("ID")
  id: int64;
  @doc("ステージ")
  stage: StageObservation | StageMedicalTreatment | StageHospitalization;
  ...TorisanBasic;
  ...TorisanObjective;
  ...TorisanMeal;
}

@doc("サマリ用の鳥さん")
model SummaryTorisan {
  @doc("ID")
  id: int64;
  @doc("ニックネーム（システムの呼び名）")
  nickname: string;
  @doc("ステージ")
  stage: StageObservation | StageMedicalTreatment | StageHospitalization;
  ...TorisanBasic;
}
