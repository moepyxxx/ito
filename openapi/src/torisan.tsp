namespace TorisanModel;

alias GenderUnknown = 1;
alias GenderMan = 2;
alias GenderWoman = 3;

alias StageObservation = 1;
alias StageMedicalTreatment = 2;
alias StageHospitalization = 3;

model TorisanBasic {
  basic: {
    nickname: string;
    birth_date: string;
    species_id: int32;
    gender_type: GenderUnknown | GenderMan | GenderWoman;
  };
}

model TorisanObjective {
  objective: {
    body_weight: float32;
    amount_of_water: float32;
  };
}

model TorisanMeal {
  meal: {
    staple_food_id: int32;
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
  id: int64;
  status: StageObservation | StageMedicalTreatment | StageHospitalization;
  ...TorisanBasic;
  ...TorisanObjective;
  ...TorisanMeal;
}

@doc("サマリ用の鳥さん")
model SummaryTorisan {
  id: int64;
  status: StageObservation | StageMedicalTreatment | StageHospitalization;
  ...TorisanBasic;
}
