namespace TorisanModel;

alias Observation = 1;
alias medicalTreatment = 2;

@doc("鳥さん")
model Torisan {
  nickname: string;
  birthDate: string;
  stage: Observation | medicalTreatment;
}
