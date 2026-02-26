export interface ManualDrug {
  name: string;
  presentation: string;
  reconstitution: string;
  stabilityPostReconstitution: string;
  administration: {
    im?: string;
    evDirect?: string;
    sc?: string;
    evInfusion?: {
      dilution: string;
      speed: string;
      stabilityPostDilution: string;
    };
  };
  notes: string;
  ph?: string;
}

export const MANUAL_DRUGS: ManualDrug[] = [
  {
    name: "Acetilcisteína",
    presentation: "100 mg/mL sol. inj. - Ampola 3mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "SG 5%, SF 0,9% ou água para injetáveis. Diluir em 200mL.",
        speed: "1 hora.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "A solução IV é hiperosmolar (2.600 milimoles/L).",
    ph: "6-7,5"
  },
  {
    name: "Aciclovir",
    presentation: "250 mg em pó liofilizado - FA.",
    reconstitution: "Reconstituir cada frasco-ampola com 10 mL de água para injetáveis ou SF 0,9%.",
    stabilityPostReconstitution: "12 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou SG 5% (concentração usual: 5 mg/mL). Para pacientes com restrição hídrica, pode-se utilizar a concentração máxima de 10 mg/mL (diluir cada 250 mg em 25 mL de diluente).",
        speed: "Cerca de 1 hora.",
        stabilityPostDilution: "24 horas em TA. Não refrigerar."
      }
    },
    notes: "Administrar em cerca de 1 hora para evitar lesão renal. Alterne os locais de infusão para evitar flebite, pois é irritante, dependendo da concentração.",
    ph: "11"
  },
  {
    name: "Ácido Tranexâmico",
    presentation: "50 mg/mL sol. inj. - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Velocidade de infusão: 1 mL/min. Concentração máxima: 50 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 25-250 mL de SF 0,9% ou SG 5%.",
        speed: "Tempo de infusão: 30 minutos.",
        stabilityPostDilution: "Uso imediato após o preparo."
      }
    },
    notes: "",
    ph: "6,5-8"
  },
  {
    name: "Amiodarona",
    presentation: "50 mg/mL sol. inj. - Ampola 3 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Diluir em 20 mL de SG 5% e administrar em bolus.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Infusão lenta ou contínua. Dose de ataque: diluir a dose em 100 mL de SG 5%. Dose de manutenção: diluir em 250 mL de SG 5%. Incompatível com SF 0,9%.",
        speed: "A dose de ataque pode ser infundida em 10 minutos. Não exceder a 30 mg/min. Diminuir a taxa de infusão, caso ocorra hipotensão ou bradicardia.",
        stabilityPostDilution: "Estável por 24 horas em TA. Proteger da luz até a hora de utilizar. Incompatível com PVC. Para infusões com tempo superior a 2 horas, utilizar frasco de polietileno de baixa densidade. Não refrigerar."
      }
    },
    notes: "A infusão intravenosa deve ser administrada por uma bomba de infusão volumétrica, preferencialmente por acesso venoso central, e deve ser utilizado filtro de linha. Não misturar outro produto na mesma seringa ou bolsa.",
    ph: "4,1"
  },
  {
    name: "Dobutamina",
    presentation: "12,5 mg/mL sol. inj. - Ampola 20 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 250 mg (1 ampola) em 250-1.000 mL de SF 0,9%, SG 5%, SG 10% ou RL. Se diluído para 1000 mL - concentração 0,25 mg/mL; se diluído para 500 mL - concentração 0,5 mg/mL; se diluído para 250 mL - concentração 1 mg/mL.",
        speed: "Adultos: 2,5-20 mcg/kg/min. Crianças: 5-20 mcg/kg/min.",
        stabilityPostDilution: "24 horas em TA. Coloração rosada da solução indica leve oxidação, mas sem perda de potência. Utilizar bolsa fotoprotetora durante a administração."
      }
    },
    notes: "Deve ser administrada por bomba de infusão ou outro aparelho capaz de controlar a velocidade de infusão. Administrar em via periférica de grosso calibre ou através de acesso central. Evitar o extravasamento, pois pode causar necrose do tecido (vesicante). Incompatível com bicarbonato ou qualquer outra solução altamente alcalina.",
    ph: "2,5-5,5"
  },
  {
    name: "Dopamina",
    presentation: "5 mg/mL sol. inj. - Ampola 10 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "SF 0,9% e SG 5%. A diluição de 200 mg (4 ampolas) em frascos de 250 ou 500 mL produz soluções de 800 ou 400 mcg/mL, respectivamente. A adição de 400 mg (8 ampolas) em frascos de 250 ou 500 mL fornece soluções de 1.600 ou 800 mcg/mL, respectivamente.",
        speed: "20-100 mL/h.",
        stabilityPostDilution: "24 horas em TA. Não refrigerar. Soluções com alterações de cor não devem ser utilizadas. Fotossensível (utilizar bolsa fotoprotetora durante a administração)."
      }
    },
    notes: "Deve ser administrada por bomba de infusão ou outro aparelho capaz de controlar a velocidade de infusão. Administrar em via periférica de grosso calibre ou através de acesso central. Evitar o extravasamento, pois pode causar necrose do tecido (vesicante). Incompatível com bicarbonato ou qualquer outra solução altamente alcalina.",
    ph: "2,5-4,5"
  },
  {
    name: "Fentanil",
    presentation: "50 mcg/mL sol. inj. - Ampola ou FA 5 mL e 50 mcg/mL sol. inj. - Ampola ou FA 10 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "50 a 100 mcg (1-2 mcg/kg), sem diluição.",
      evDirect: "Não é necessário diluir. Tempo de administração: Adulto: 1 a 2 minutos. Crianças: 2 a 5 minutos. Doses maiores que 5 mcg/kg devem ser administradas em 5 a 10 minutos.",
      sc: "Infusão subcutânea contínua (1 mcg/kg/h). Diluir na concentração 25-30 mcg/mL.",
      evInfusion: {
        dilution: "Pode ser administrado puro ou diluir em SF 0,9% (nas concentrações de 10 a 20 mcg/mL) e SG 5% (nas concentrações de 10 a 40 mcg/mL).",
        speed: "Tempo de infusão: 0,7-1 mcg/kg/h.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Via Epidural: 50 a 100 mcg (1-2 mcg/kg) diluídos em 10 mL de SF 0,9%.",
    ph: "4,0-7,5"
  },
  {
    name: "Midazolam",
    presentation: "5 mg/mL sol. inj. - Ampola 3 mL e 5 mg/mL sol. inj. - Ampola 10 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Administrar na concentração máxima de 1 mg/mL profundamente em músculo de grande massa. Recomenda-se administrar no músculo vasto lateral da coxa.",
      evDirect: "Não é necessário diluir. Concentração usual de 1 a 5 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não é necessário diluir. Diluir 15 mg de Midazolam em 100-1000 mL de SF 0,9%, SG 5% ou RL. Diluição padrão: 50 mL (250 mg) de Midazolam + 200 mL de SF 0,9% para obter uma concentração de 1 mg/mL.",
        speed: "A velocidade de infusão deve ser ajustada de acordo com as necessidades do paciente.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Em infusão contínua, deve-se manter a menor dose possível, entre 0,04 e 0,2 mg/kg/h.",
    ph: "4"
  },
  {
    name: "Noradrenalina (Norepinefrina)",
    presentation: "2 mg/mL sol. inj. - Ampola 4 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluição padrão: Diluir 20 mL de norepinefrina em 80 mL de SG 5%. Concentração usual: 4-200 mcg/mL.",
        speed: "Dose máxima em adultos: 3,3 mcg/kg/min. Dose máxima em crianças: 2,5 mcg/kg/min.",
        stabilityPostDilution: "24 horas em TA. Não refrigerar. Proteger da luz até o momento da administração. Evitar o uso de soro fisiológico, pois não protege contra a oxidação."
      }
    },
    notes: "Utilizar bomba de infusão. Administrar preferencialmente em acesso central (vesicante).",
    ph: "3-4,5"
  },
  {
    name: "Vancomicina",
    presentation: "500 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 500 mg do medicamento com 10 mL de água para injetáveis. Reconstituir 1 g de Vancomicina com 20 mL de água para injetáveis.",
    stabilityPostReconstitution: "24 horas em TA ou 14 dias sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir a vancomicina em 20-200 mL de SF 0,9%, SG 5% ou RL.",
        speed: "Tempo superior a 60 minutos. Velocidade de infusão máxima: 10 mg/min.",
        stabilityPostDilution: "24 horas em TA ou 14 dias sob refrigeração."
      }
    },
    notes: "A solução reconstituída pode ser administrada por via oral para a infecção por Clostridium difficile. Medicamento vesicante, por isso, deve-se ter cuidado para evitar extravasamento, quando administrado por via intravenosa. Concentrações de 2,5-5 mg/mL previnem a ocorrência de tromboflebite.",
    ph: "2,5-4,5"
  },
  {
    name: "Azitromicina",
    presentation: "500 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com 4,8 mL de água para injetáveis.",
    stabilityPostReconstitution: "24 horas em TA. Não refrigerar.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 250 mL (2 mg/mL) a 500 mL (1 mg/mL) de SF 0,9%, SG 5% ou RL a uma concentração de 1-2 mg/mL.",
        speed: "1 mg/mL durante 3 horas ou 2 mg/mL durante 1 hora. Infundir em no mínimo 1 hora.",
        stabilityPostDilution: "2 mg/mL. Estável por 24 horas em TA e 7 dias sob refrigeração."
      }
    },
    notes: "",
    ph: "6,4-6,6"
  },
  {
    name: "Cefepime",
    presentation: "1 g em pó liofilizado - FA e 2 g em pó liofilizado - FA",
    reconstitution: "IV: reconstituir cada 1 ou 2 g com 10 mL de água para injetáveis, SF 0,9% ou SG 5%. Volume final: 11,4 mL (expansão). IM: cada 1 g, utilizar 3 mL de diluente.",
    stabilityPostReconstitution: "24 horas em TA e 7 dias sob refrigeração.",
    administration: {
      im: "Não é necessário diluir. Administração profunda em massa muscular grande. Não injetar mais de 1 g em cada glúteo.",
      evDirect: "Não é necessário diluir. Administrar em 3-5 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 1 g em 50 mL ou 2 g em 100 mL de SF 0,9%, SG 5% ou RL.",
        speed: "30 minutos. Em pacientes críticos, infusões prolongadas de 3-4 horas podem ser apropriadas.",
        stabilityPostDilution: "24 horas em TA e 7 dias sob refrigeração."
      }
    },
    notes: "",
    ph: "4,0-6,0"
  },
  {
    name: "Meropenem",
    presentation: "500 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir cada 500 mg com 10 mL de AD ou SF 0,9%.",
    stabilityPostReconstitution: "3 horas em TA e 15 horas sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Administrar em 3-5 minutos. Concentração máxima: 50 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "A dose pode ser diluída em 50 ou 100 mL de SF 0,9% ou SG 5% (1-20 mg/mL).",
        speed: "Infundir em 15-30 minutos. Pode ser administrado em infusão prolongada (3 horas) em pacientes críticos.",
        stabilityPostDilution: "Se diluído com SF 0,9% permanece estável por 3 horas em TA e 15 horas sob refrigeração. Com SG 5%, usar imediatamente."
      }
    },
    notes: "Pode ser administrado por Hipodermólise (volume: 100 mL).",
    ph: "7,3-8,3"
  },
  {
    name: "Piperacilina + Tazobactam",
    presentation: "4 g + 0,5 g em pó liofilizado - FA",
    reconstitution: "Reconstituir 2,25 g em 10 mL ou 4,5 g em 20 mL de água para injetáveis, SF 0,9% ou SG 5%.",
    stabilityPostReconstitution: "24 horas em TA e 48 horas sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 2,25 g ou 4,5 g do medicamento reconstituído em 50-150 mL de SF 0,9%, SG 5% ou RL.",
        speed: "30 minutos. Pode ser administrado em infusão prolongada de 4 horas em pacientes críticos.",
        stabilityPostDilution: "24 horas em TA e 48 horas sob refrigeração."
      }
    },
    notes: "A infusão prolongada é off-label.",
    ph: "4,5-6,8"
  },
  {
    name: "Rocurônio",
    presentation: "10 mg/mL sol. inj. - FA 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Administrar em bolus, em 5-10 segundos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em SF 0,9%, SG 5% ou RL a uma concentração de 0,5-2 mg/mL. Pode ser administrado puro (off-label).",
        speed: "0,3-0,6 mg/kg/h.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Recomendada a utilização de bomba de infusão.",
    ph: "4"
  },
  {
    name: "Ácido Ascórbico",
    presentation: "100 mg/mL sol. inj. - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Concentração máxima: 100 mg/mL.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 1.000 mL de SF 0,9% ou SG 5%.",
        speed: "5 a 12 meses: 1,3 mg/min; 1 a 11 anos: 3,3 mg/min; >11 anos: 33 mg/min.",
        stabilityPostDilution: "24 horas em TA (protegido da luz)."
      }
    },
    notes: "Evitar administração intravenosa rápida.",
    ph: ""
  },
  {
    name: "Ácido Zoledrônico",
    presentation: "4 mg/5 mL em pó liofilizado - FA",
    reconstitution: "5 mL de água para injetáveis.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou SG 5%.",
        speed: "Não administrar em tempo inferior a 15 minutos.",
        stabilityPostDilution: "24 horas sob refrigeração. Não armazenar em TA."
      }
    },
    notes: "Lavar o acesso venoso com 10 mL de SF 0,9% após administração.",
    ph: ""
  },
  {
    name: "Adenosina",
    presentation: "3 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Administrar em bolus, em 1-2 segundos. Flush de 20 mL de SF.",
      sc: "Não recomendado.",
      evInfusion: {
        dilution: "Não recomendado.",
        speed: "Não recomendado.",
        stabilityPostDilution: ""
      }
    },
    notes: "Não refrigerar devido à cristalização.",
    ph: ""
  },
  {
    name: "Alprostadil",
    presentation: "20 mcg em pó liofilizado - FA.",
    reconstitution: "Reconstituir 20mcg em 2 mL de SF 0,9%.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "EV: Diluir 2-3 ampolas em 50-250 mL de SF 0,9%.",
        speed: "EV: 2 horas.",
        stabilityPostDilution: "Preparar imediatamente antes do uso. Estável por 12 horas em TA."
      }
    },
    notes: "Não deve ser administrado juntamente com outros medicamentos.",
    ph: "3"
  },
  {
    name: "Alteplase",
    presentation: "50 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com 50mL de AD (final: 1 mg/mL).",
    stabilityPostReconstitution: "8 horas em TA ou 24 horas sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não necessita diluir. Administrar em bolus, em 1-2 minutos. Máx: 1 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em SF 0,9% até 0,5 mg/mL (ex: 50 mg em 100 mL).",
        speed: "Depende do esquema posológico (90 min ou 3 horas).",
        stabilityPostDilution: "8 horas em TA ou 24 horas sob refrigeração."
      }
    },
    notes: "",
    ph: "7,3"
  },
  {
    name: "Amicacina",
    presentation: "250 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 250 mg/mL.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100-200 mL de SF 0,9%, SG 5% ou RL.",
        speed: "30-60 minutos. Lactentes: 1 a 2 horas.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Pode ser administrado por inalação.",
    ph: "3,5-5,5"
  },
  {
    name: "Aminofilina",
    presentation: "24 mg/mL sol. inj. - Ampola 10 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente. Máx: 24 mg/mL.",
      evDirect: "Não é necessário diluir. Administrar de 3 a 4 minutos. Máx: 24 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 1 mg/mL em SF 0,9% ou SG 5%.",
        speed: "Não exceder 25 mg/min.",
        stabilityPostDilution: "24 horas em TA. Não refrigerar."
      }
    },
    notes: "Vesicante.",
    ph: "8,6-9,0"
  },
  {
    name: "Amoxicilina + Clavulanato",
    presentation: "1 g + 200 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir em 20 mL de água para injetáveis.",
    stabilityPostReconstitution: "20 minutos.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Tempo: 3-4 minutos. Máx: 50 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou água para injetáveis. Usual: 10 mg/mL.",
        speed: "0,5-10 mL/min.",
        stabilityPostDilution: "4 horas em TA."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Ampicilina + Sulbactam",
    presentation: "2 g + 1 g em pó liofilizado - FA",
    reconstitution: "EV: 1,5 g em 3,2 mL ou 3 g em 6,4 mL de água para injetáveis.",
    stabilityPostReconstitution: "1 hora.",
    administration: {
      im: "Não é necessário diluir. Administração profunda.",
      evDirect: "Não é necessário diluir. Mínimo 3 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5%.",
        speed: "15 a 30 minutos.",
        stabilityPostDilution: "8 horas em TA (SF 0,9% ou RL) ou 2 horas em TA (SG 5%)."
      }
    },
    notes: "",
    ph: "8,0-10,0"
  },
  {
    name: "Ampicilina",
    presentation: "500 mg ou 1 g em pó liofilizado - FA",
    reconstitution: "500 mg em 2 mL, 1 g em 3 mL de água para injetáveis.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não é necessário diluir. Aplicar profundamente.",
      evDirect: "Não é necessário diluir. 3-5 min (500 mg) ou 10-15 min (1-2 g).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9%, SG 5% ou RL.",
        speed: "15-30 minutos.",
        stabilityPostDilution: "8 horas em TA (SF 0,9% ou RL) ou 4 horas em TA (SG 5%)."
      }
    },
    notes: "",
    ph: "8,0-10,0"
  },
  {
    name: "Anfotericina B Complexo Lipídico",
    presentation: "100 mg/20 mL ou 50 mg/10 mL sol. inj. - FA",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 1 mg/mL em SG 5%.",
        speed: "2,5 mg/kg/h.",
        stabilityPostDilution: "6 horas em TA e 48 horas sob refrigeração."
      }
    },
    notes: "Lavar o acesso com SG 5% antes da infusão. Utilizar agulha-filtro de 5 µm.",
    ph: ""
  },
  {
    name: "Anfotericina B Lipossomal",
    presentation: "50 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com 12 mL de água para injetáveis (4 mg/mL).",
    stabilityPostReconstitution: "24 horas sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 0,2-2 mg/mL em SG 5%. Incompatível com SF 0,9%.",
        speed: "30-60 minutos.",
        stabilityPostDilution: "6 horas sob refrigeração."
      }
    },
    notes: "Utilizar filtro de 5 µm.",
    ph: ""
  },
  {
    name: "Anfotericina B",
    presentation: "50 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com 10 mL de AD ou diluente próprio.",
    stabilityPostReconstitution: "24 horas em TA (protegido da luz) ou 7 dias sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 490 mL de SG 5% (final: 0,1 mg/mL).",
        speed: "2-6 horas (1 mg/kg/h).",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "Incompatível com SF 0,9% e eletrólitos.",
    ph: "7,2-8,0"
  },
  {
    name: "Atropina",
    presentation: "0,25 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 0,5 mg/mL.",
      evDirect: "Não é necessário diluir. >1 minuto. Máx: 0,5 mg/mL.",
      sc: "Não é necessário diluir. Máx: 0,5 mg/mL.",
      evInfusion: {
        dilution: "Pode ser diluída em SF 0,9% ou SG 5%.",
        speed: "",
        stabilityPostDilution: "72 horas em TA ou sob refrigeração (1 mg/mL em SF)."
      }
    },
    notes: "Administração EV lenta pode causar bradicardia paroxística.",
    ph: "3-6,5"
  },
  {
    name: "Aztreonam",
    presentation: "1.000 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 1 g com 3 mL de água para injetáveis ou SF 0,9%.",
    stabilityPostReconstitution: "24 horas em TA e 3 horas se refrigerado.",
    administration: {
      im: "Não é necessário diluir. Administrar em grande massa muscular.",
      evDirect: "Diluir 1 g em 6-10 mL de SF 0,9% ou água para injetáveis. Tempo: 3-5 min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 1 g em 100 mL de SF 0,9%, SG 5% ou RL.",
        speed: "20-60 minutos. Infusão estendida (3h) para patógenos resistentes.",
        stabilityPostDilution: "24 horas em TA e 7 dias sob refrigeração."
      }
    },
    notes: "Doses > 1.000 mg somente por via endovenosa em pediatria.",
    ph: ""
  },
  {
    name: "Basiliximab",
    presentation: "20 mg em pó liofilizado - FA",
    reconstitution: "Diluir 1 FA (20 mg) com 5 mL de AD.",
    stabilityPostReconstitution: "4 horas em TA e 24 horas sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Administrar em bolus. Máx: 4 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 20 mg em 50 mL de SF 0,9% ou SG 5%.",
        speed: "20-30 minutos.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Benzilpenicilina Benzatina",
    presentation: "1.200.000 UI em pó liofilizado - FA",
    reconstitution: "Reconstituir com 3,2 mL de diluente próprio. Volume final: 4 mL.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não é necessário diluir. Administrar lenta e profundamente.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Administrar em grande massa muscular.",
    ph: ""
  },
  {
    name: "Benzilpenicilina Potássica",
    presentation: "5.000.000 UI em pó liofilizado - FA",
    reconstitution: "Reconstituir com 10 mL de água para injetáveis. Volume final: 12 mL.",
    stabilityPostReconstitution: "24 horas em TA e 7 dias sob refrigeração.",
    administration: {
      im: "Diluir em 3,5 mL de AD. Administrar lenta e profundamente.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou SG 5%.",
        speed: "30-60 minutos.",
        stabilityPostDilution: "24 horas em TA e 7 dias sob refrigeração."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Benzilpenicilina Procaína",
    presentation: "300.000 UI Procaína + 100.000 UI Potássica - FA",
    reconstitution: "Reconstituir com 2 mL de água para injetáveis.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não é necessário diluir. Administrar lenta e profundamente.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Máx: 200.000 UI/mL.",
    ph: ""
  },
  {
    name: "Bicarbonato de Sódio 8,4%",
    presentation: "84 mg/mL (1 mEq/mL) sol. inj.",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Pura em bolus (PCR). Pode diluir 1:1 em SF 0,9% ou SG 5%.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em SF 0,9% ou SG 5% na proporção 1:1 (0,5 mEq/mL).",
        speed: "2 horas. Máx: 1 mEq/kg/h.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Vesicante.",
    ph: ""
  },
  {
    name: "Bromoprida",
    presentation: "5 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Diluir em 15 mL de SF 0,9% ou SG 5%. Tempo > 3 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar por infusão contínua.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Bupivacaína",
    presentation: "0,5% (5 mg/mL) ou 0,75% (7,5 mg/mL) sol. inj.",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar por infusão.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Infiltração local, epidural, caudal. Não administrar por via intratecal.",
    ph: ""
  },
  {
    name: "Cafeína",
    presentation: "20 mg/mL - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Pura ou diluída em SF 0,9% ou SG 5%.",
        speed: "10-30 minutos.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "Utilizar bomba de infusão.",
    ph: "4,2-5,2"
  },
  {
    name: "Cefazolina",
    presentation: "1 g em pó liofilizado - FA",
    reconstitution: "IV: 10 mL de AD. IM: 2,5 mL de AD ou Lidocaína 0,5%.",
    stabilityPostReconstitution: "12 horas em TA e 24 horas sob refrigeração.",
    administration: {
      im: "Não é necessário diluir. Injetar em grande massa muscular.",
      evDirect: "Não é necessário diluir. Tempo: 3-5 minutos. Máx: 138 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 1 g em 50-100 mL de SF 0,9%, SG 5% ou RL.",
        speed: "30-60 minutos.",
        stabilityPostDilution: "12 horas em TA e 24 horas sob refrigeração."
      }
    },
    notes: "Vesicante.",
    ph: "4,5-6"
  },
  {
    name: "Ceftazidima + Avibactam",
    presentation: "2 g + 500 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir em 10 mL de AD. Volume final: 12 mL.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-250 mL de SF 0,9% ou SG 5%.",
        speed: "2 horas (3 horas para patógenos produtores de carbapenemases).",
        stabilityPostDilution: "12 horas em TA ou 24 horas sob refrigeração."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Ceftazidima",
    presentation: "1 g em pó liofilizado - FA",
    reconstitution: "EV: 10 mL de AD. IM: 3 mL de AD ou Lidocaína.",
    stabilityPostReconstitution: "2 horas em TA ou 24 horas sob refrigeração.",
    administration: {
      im: "Não é necessário diluir. Administrar no glúteo.",
      evDirect: "Não é necessário diluir. Tempo: 3-5 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9%, SG 5% ou RL.",
        speed: "15-30 minutos. Pacientes críticos: infusão prolongada (3-4h).",
        stabilityPostDilution: "2 horas em TA ou 3 dias sob refrigeração."
      }
    },
    notes: "",
    ph: "5,0-8,0"
  },
  {
    name: "Ceftriaxona",
    presentation: "1 g em pó liofilizado - FA",
    reconstitution: "IV: 10 mL de AD. IM: 3,5 mL de Lidocaína 1%.",
    stabilityPostReconstitution: "6 horas em TA ou 24 horas sob refrigeração.",
    administration: {
      im: "Não é necessário diluir. Administrar no glúteo. Máx: 285,7 mg/mL.",
      evDirect: "Até 1 g pode ser puro. Tempo: 2-4 minutos. Máx: 100 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5%.",
        speed: ">30 minutos. Pacientes críticos: infusão prolongada (3h).",
        stabilityPostDilution: "6 horas em TA ou 24 horas sob refrigeração."
      }
    },
    notes: "Incompatível com soluções contendo cálcio (ex: RL).",
    ph: "6,7"
  },
  {
    name: "Cefuroxima",
    presentation: "750 mg em pó liofilizado - FA",
    reconstitution: "IV: 6 mL de AD. IM: 3 mL de AD.",
    stabilityPostReconstitution: "24 horas em TA e 48 horas sob refrigeração.",
    administration: {
      im: "Não é necessário diluir. Administrar no glúteo. Máx: 250 mg/mL.",
      evDirect: "Não é necessário diluir. Tempo: 3-5 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9%, SG 5% ou RL.",
        speed: "30 minutos.",
        stabilityPostDilution: "24 horas em TA e 48 horas sob refrigeração."
      }
    },
    notes: "",
    ph: "6,0-8,5"
  },
  {
    name: "Cetoprofeno",
    presentation: "100 mg pó liofilizado - FA",
    reconstitution: "IV: 5 mL de SF 0,9%.",
    stabilityPostReconstitution: "Uso imediato após reconstituição.",
    administration: {
      im: "50 mg/mL (2 mL) pronto para uso. Administrar lenta e profundamente.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100-150 mL de SF 0,9%, SG 5% ou SG 10%.",
        speed: "20-30 minutos.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "",
    ph: "6,5-7,5"
  },
  {
    name: "Cianocobalamina",
    presentation: "2.500 mcg/mL - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 2.500 mcg/mL.",
      evDirect: "Não administrar.",
      sc: "Pode administrar por via SC profunda.",
      evInfusion: {
        dilution: "Não administrar por infusão.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Ciprofloxacino",
    presentation: "2 mg/mL sol. injetável - Bolsa 100 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Estável por 3 dias à luz natural após retirada da embalagem.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não é necessário diluir. Bolsa pronta.",
        speed: "60 minutos para cada 200 mg.",
        stabilityPostDilution: "3 dias intacto e exposto à luz. Após aberto, uso imediato."
      }
    },
    notes: "Não recomendado o reaproveitamento após aberto.",
    ph: "3,5-4,6"
  },
  {
    name: "Cisatracúrio",
    presentation: "2 mg/mL - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Administrar em bolus, em 5-10 segundos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em SF 0,9% ou SG 5% a uma concentração de 0,1 a 2 mg/mL.",
        speed: "1-3 mcg/kg/min.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: "3,25-3,65"
  },
  {
    name: "Claritromicina",
    presentation: "500 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 500 mg em 10 mL de AD. NÃO usar SF 0,9%.",
    stabilityPostReconstitution: "24 horas em TA e 48 horas sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 500 mg em 250 mL de SF 0,9%, SG 5% ou RL.",
        speed: "60 minutos (máximo: 500 mg/h).",
        stabilityPostDilution: "6 horas em TA e 48 horas sob refrigeração."
      }
    },
    notes: "Administrar em veia de grosso calibre.",
    ph: "4,8-6,0"
  },
  {
    name: "Clindamicina",
    presentation: "150 mg/mL - Ampola 4 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar no glúteo. Máx: 600 mg/aplicação.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9%, SG 5%, SG 10% ou RL.",
        speed: "30-60 minutos.",
        stabilityPostDilution: "48 horas em TA."
      }
    },
    notes: "",
    ph: "6,0-6,3"
  },
  {
    name: "Clonidina",
    presentation: "150 mcg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Sim.",
      evDirect: "Bolus puro ou em 10 mL SF 0,9%. Tempo > 5 minutos. Máx: 150 mcg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 10-500 mL de SF 0,9%. Não diluir em SG 5%.",
        speed: "",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Via epidural: diluir em SF 0,9% (máx 100 mcg/mL).",
    ph: ""
  },
  {
    name: "Cloreto de Potássio 10%",
    presentation: "100 mg/mL sol. inj. - Ampola 10 mL",
    reconstitution: "Solução injetável reconstituída (1,34 mEq/mL).",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Padrão: 30 mL em 220 mL de SF 0,9%.",
        speed: "Periférica: < 10 mEq/h. Central: < 40 mEq/h.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Não administrar sem diluir. Risco de parada cardíaca fatal. Vesicante.",
    ph: ""
  },
  {
    name: "Cloreto de Sódio 20%",
    presentation: "200 mg/L sol. inj. - Ampola 10 mL",
    reconstitution: "Solução injetável reconstituída (3,4 mEq/mL).",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "20 mL em 1000 mL de SF 0,9%, SG 5% ou RL.",
        speed: "Não ultrapassar 1 mEq/kg/h.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Não administrar sem diluir. Vesicante.",
    ph: "4,5-7,0"
  },
  {
    name: "Complexo Protrombínico",
    presentation: "500 UI a 600 UI em pó liofilizado - FA",
    reconstitution: "Reconstituir com 20 mL de AD.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. 0,12 mL/kg/min até máx 8,4 mL/min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Usar linha de infusão separada.",
    ph: "6,5-7,5"
  },
  {
    name: "Dantroleno",
    presentation: "20 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir em 60 mL de AD. Incompatível com SF 0,9% e SG 5%.",
    stabilityPostReconstitution: "6 horas em TA. Proteger da luz.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Puro (reconstituído). Não diluir.",
        speed: "1 hora.",
        stabilityPostDilution: "6 horas em TA."
      }
    },
    notes: "Vesicante.",
    ph: ""
  },
  {
    name: "Daptomicina",
    presentation: "500 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com 10 mL de AD. Não agitar.",
    stabilityPostReconstitution: "2 horas em TA e 48 horas sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Adultos: Não é necessário diluir. 2 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50 mL de SF 0,9%. Incompatível com glicose.",
        speed: "30-60 minutos.",
        stabilityPostDilution: "12 horas em TA e 48 horas sob refrigeração."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Deslanosídeo",
    presentation: "0,2 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 0,2 mg/mL.",
      evDirect: "Puro ou 1:4 em SF 0,9% ou SG 5%. Lento (3-5 min).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar por infusão.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Não deve ser administrado com outros medicamentos.",
    ph: ""
  },
  {
    name: "Dexametasona",
    presentation: "4 mg/mL sol. inj. - Ampola 2,5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 4 mg/mL.",
      evDirect: "Não é necessário diluir. Lento (> 1 min). Máx: 4 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5%.",
        speed: "5-30 minutos.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Infusão rápida pode causar irritação perineal.",
    ph: "7-8,5"
  },
  {
    name: "Dexmedetomidina",
    presentation: "100 mcg/mL sol. inj. - FA 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 2 mL em 48 mL de SF 0,9% ou SG 5% (4 mcg/mL).",
        speed: "0,2-0,7 mcg/kg/h.",
        stabilityPostDilution: "24 horas sob refrigeração. Não armazenar em TA."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Diazepam",
    presentation: "5 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 5 mg/mL.",
      evDirect: "Não é necessário diluir. 5 mg/min. Máx: 5 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não recomendado. Se necessário, ver coluna de diluição.",
        speed: "0,5-1 mL/min.",
        stabilityPostDilution: "Ver coluna da Diluição."
      }
    },
    notes: "Vesicante. Sorção em PVC.",
    ph: "6,2-6,9"
  },
  {
    name: "Diclofenaco Sódico",
    presentation: "25 mg/mL sol. inj. - Ampola 3 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Lenta e exclusivamente no glúteo.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Máx: 25 mg/mL.",
    ph: ""
  },
  {
    name: "Difenidramina",
    presentation: "50 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Lentamente em músculo profundo.",
      evDirect: "Não é necessário diluir. 3 a 5 minutos. Máx: 50 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50 mL de SF 0,9% ou SG 5%.",
        speed: "15 a 30 minutos (máx 25 mg/min).",
        stabilityPostDilution: "24 horas em TA. Não refrigerar."
      }
    },
    notes: "Risco de necrose via SC.",
    ph: "4-6,5"
  },
  {
    name: "Dipirona",
    presentation: "500 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Lentamente. Máx: 500 mg/mL.",
      evDirect: "Diluir em 10-20 mL de AD, SF 0,9% ou SG 5%. 1 mL/min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "",
    ph: "6,0-8,0"
  },
  {
    name: "Efedrina",
    presentation: "50 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 50 mg/mL.",
      evDirect: "Diluir 1 mL em 9 mL de SF 0,9% ou SG 5%. Lentamente.",
      sc: "Não é necessário diluir. Máx: 50 mg/mL.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Uso imediato após o preparo. Fotossensível.",
    ph: "4,5-7,0"
  },
  {
    name: "Enoxaparina",
    presentation: "20, 40, 60 mg sol. inj. - Seringa",
    reconstitution: "Solução injetável reconstituída (seringa pronta).",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Pura ou diluída em SF 0,9% ou SG 5%. Somente em IAM com supra.",
      sc: "Subcutânea na região anterolateral do abdômen.",
      evInfusion: {
        dilution: "Não administrar por infusão.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Epinefrina",
    presentation: "1 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Região anterolateral da coxa.",
      evDirect: "Diluir 1 ampola em 10 mL SF 0,9% ou SG 5%. 3-5 min.",
      sc: "Não é necessário diluir. Máx: 1 mg/mL.",
      evInfusion: {
        dilution: "Diluir em SF 0,9% ou SG 5%.",
        speed: "1-10 mcg/min.",
        stabilityPostDilution: "24 horas em TA ou sob refrigeração. Fotossensível."
      }
    },
    notes: "Preferencialmente em acesso central.",
    ph: "2,2-5"
  },
  {
    name: "Eritropoetina Recombinante",
    presentation: "4.000 UI em pó liofilizado - FA",
    reconstitution: "1 ou 2 mL de AD ou diluente próprio.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. 1-5 minutos.",
      sc: "Não é necessário diluir. 1 mL por sítio.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "",
    ph: "5,8-6,4"
  },
  {
    name: "Ertapenem",
    presentation: "1 g em pó liofilizado - FA",
    reconstitution: "IV: 10 mL de AD. IM: 3,2 mL de Lidocaína 1% ou 2%.",
    stabilityPostReconstitution: "IV: 6h em TA. IM: 1h após preparo.",
    administration: {
      im: "Não é necessário diluir. Grande massa muscular.",
      evDirect: "Não é necessário diluir. 5 minutos. Máx: 100 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 40 mL de SF 0,9%. Incompatível com glicose.",
        speed: "30 minutos.",
        stabilityPostDilution: "6 horas em TA e 24 horas sob refrigeração."
      }
    },
    notes: "",
    ph: "7,5"
  },
  {
    name: "Escetamina",
    presentation: "50 mg/mL sol. inj.",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Não é necessário diluir. 60 segundos ou 0,5 mg/kg/min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 1-2 mg/mL em SF 0,9% ou SG 5%.",
        speed: "0,1-0,5 mg/min (adultos) ou 20 mcg/kg/min (crianças).",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Incompatível com barbitúricos.",
    ph: ""
  },
  {
    name: "Escopolamina",
    presentation: "20 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 20 mg/mL.",
      evDirect: "Diluir em 1-5 mL de AD, SF 0,9% ou SG 5%. Lento (2-3 min).",
      sc: "Não é necessário diluir. Máx: 20 mg/mL.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5%.",
        speed: "30 minutos.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "",
    ph: "3,5-6,5"
  },
  {
    name: "Esmolol",
    presentation: "10 mg/mL ou 250 mg/mL sol. inj.",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "10 mg/mL: puro (30s). 250 mg/mL: somente após diluição.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 10 mg/mL em SF 0,9%, SG 5% ou RL.",
        speed: "0,15-0,3 mg/kg/min.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Vesicante.",
    ph: "3,5-5,5"
  },
  {
    name: "Etilefrina",
    presentation: "10 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 10 mg/mL.",
      evDirect: "Não é necessário diluir. Máx 0,5 mL. 1 minuto.",
      sc: "Não é necessário diluir. Máx: 10 mg/mL.",
      evInfusion: {
        dilution: "Diluir em 40 mL de SF 0,9%, SG 5% ou RL.",
        speed: "Adultos: 0,4 mg/min.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Etomidato",
    presentation: "2 mg/mL sol. inj. - Ampola 10 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não precisa diluir. 30-60 segundos. Máx: 2 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Altamente irritante.",
    ph: ""
  },
  {
    name: "Fenilefrina",
    presentation: "10 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 10 mg/mL.",
      evDirect: "Diluir para 0,1% depois 0,01% em AD. Bolus.",
      sc: "Não é necessário diluir. Máx: 10 mg/mL.",
      evInfusion: {
        dilution: "Diluir 10 mg em 50 mL de SF 0,9% ou SG 5%.",
        speed: "Titular (iniciar 100-180 mcg/min).",
        stabilityPostDilution: "4 horas em TA. Proteger da luz."
      }
    },
    notes: "Preferencialmente em acesso central. Vesicante.",
    ph: ""
  },
  {
    name: "Fenitoína",
    presentation: "50 mg/mL sol. inj. - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Evitar (risco de necrose).",
      evDirect: "Não é necessário diluir. 2 min (máx 50 mg/min).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9%. Incompatível com glicose.",
        speed: "15-30 minutos (máx 50 mg/min).",
        stabilityPostDilution: "Concluir em 4 horas após diluição."
      }
    },
    notes: "Vesicante. Utilizar filtro de 0,22 µm.",
    ph: "10-12,3"
  },
  {
    name: "Fenobarbital",
    presentation: "100 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Profundamente. Máx: 100 mg/mL.",
      evDirect: "Diluir em 2 mL de SF 0,9%, SG 5% ou RL. 3-5 min.",
      sc: "Não administrar. Risco de necrose.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9%, SG 5% ou RL.",
        speed: "Máx 60 mg/min (50-100 mg/min em estado epilético).",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Administrar em veias de grosso calibre.",
    ph: "9,2-10,2"
  },
  {
    name: "Fibrinogênio",
    presentation: "1.000 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir em 50 mL de AD. 5-15 minutos.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Puro (reconstituído).",
        speed: "5 mL/min.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "Administrar em TA em via exclusiva.",
    ph: "6,5-7,5"
  },
  {
    name: "Filgrastina",
    presentation: "300 mcg/mL sol. inj. - FA 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não é necessário diluir. Infusão contínua (10 mL/24h).",
      evInfusion: {
        dilution: "Diluir em 20 mL de SG 5% (final 15 mcg/mL).",
        speed: "15-30 minutos ou contínuo.",
        stabilityPostDilution: "24 horas em TA ou sob refrigeração."
      }
    },
    notes: "Se < 15 mcg/mL, adicionar albumina (2 mg/mL).",
    ph: "4"
  },
  {
    name: "Fitomenadiona",
    presentation: "10 mg/mL sol. inj. - Ampola 1 mL IM/SC",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não é necessário diluir. Evitar (risco de hematomas).",
      evDirect: "Não administrar (apresentação não padronizada).",
      sc: "Não é necessário diluir. Máx: 10 mg/mL.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Altamente fotossensível.",
    ph: ""
  },
  {
    name: "Fluconazol",
    presentation: "2 mg/mL sol. inj. - Bolsa 100 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não é necessário diluir. Bolsa pronta.",
        speed: "60 minutos. Máx 10 mL/min.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "Risco de prolongamento do intervalo QT.",
    ph: "4,0-8,0"
  },
  {
    name: "Flumazenil",
    presentation: "0,1 mg/mL sol. inj. - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. 15-30 segundos. Máx 0,2 mg/min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Utilizar veia de grosso calibre.",
    ph: "4"
  },
  {
    name: "Folinato de Cálcio",
    presentation: "50 mg/5 mL sol. inj. – FA 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não é necessário diluir. Máx: 10 mg/mL.",
      evDirect: "Não é necessário diluir. Bolus. Máx: 10 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em SF 0,9% ou SG 5%.",
        speed: "15 min a 2h (máx 160 mg/min).",
        stabilityPostDilution: "24 horas sob refrigeração."
      }
    },
    notes: "Não administrar com metotrexato.",
    ph: ""
  },
  {
    name: "Fosfato de Potássio",
    presentation: "2 mEq/mL sol. inj. - Ampola 10 mL",
    reconstitution: "Solução injetável reconstituída (2 mEq/mL).",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100-250 mL de SF 0,9% ou SG 5%.",
        speed: "Periférica: < 6,4 mmol/h. Central: < 15 mmol/h.",
        stabilityPostDilution: "4 horas em TA."
      }
    },
    notes: "Não administrar sem diluir. Vesicante.",
    ph: "7,0-7,8"
  },
  {
    name: "Furosemida",
    presentation: "10 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Administrar sem diluir. Casos excepcionais.",
      evDirect: "Não é necessário diluir. 1-2 minutos. Máx: 10 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50 mL de SF 0,9%, SG 5%, Ringer ou RL.",
        speed: "Adultos: < 4 mg/min. Pediátricos: 0,5 mg/kg/min.",
        stabilityPostDilution: "24 horas em TA (protegido da luz). Bolsa fotoprotetora."
      }
    },
    notes: "",
    ph: "8-9,3"
  },
  {
    name: "Ganciclovir",
    presentation: "500 mg em pó liofilizado - FA",
    reconstitution: "10 mL de AD (pó liofilizado).",
    stabilityPostReconstitution: "12 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9%, SG 5%, Ringer ou RL.",
        speed: "1 hora.",
        stabilityPostDilution: "24 horas sob refrigeração."
      }
    },
    notes: "Risco de flebite se rápido.",
    ph: "11"
  },
  {
    name: "Gentamicina",
    presentation: "40 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não diluir. Máx: 40 mg/mL.",
      evDirect: "Não é necessário diluir. 2-3 min (restrição hídrica).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-200 mL de SF 0,9%, SG 5% ou RL.",
        speed: "30-120 minutos.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Incompatível com algumas penicilinas.",
    ph: "3,0-5,5"
  },
  {
    name: "Glicerofosfato de Sódio",
    presentation: "306,1 mg/mL sol. inj. - Ampola 20 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir pelo menos 6 vezes (1:5) em 100 mL de SF 0,9% ou SG 5%.",
        speed: "4 a 6 horas ou 15 mmol/h.",
        stabilityPostDilution: "24 horas em TA. Não refrigerar."
      }
    },
    notes: "Não administrar sem diluir.",
    ph: ""
  },
  {
    name: "Gliconato de Cálcio 10%",
    presentation: "100 mg/mL sol. inj. - Ampola 10 mL",
    reconstitution: "Solução injetável reconstituída (100 mg/mL).",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Máx 200 mg/min. Máx: 100 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 5,8-10 mg/mL em SF 0,9% ou SG 5%.",
        speed: "Adultos: 200 mg/min. Crianças: 100 mg/min.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Vesicante.",
    ph: "6-8,2"
  },
  {
    name: "Glicose 25% e 50%",
    presentation: "250 mg/mL ou 500 mg/mL sol. inj.",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Diluir para máx 12,5% para via periférica. 3 mL/min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para máx 12,5% para via periférica.",
        speed: "0,5 g/kg/h (máx 200 mg/kg/min).",
        stabilityPostDilution: ""
      }
    },
    notes: "Utilizar 25% e 50% por via periférica apenas em emergência.",
    ph: ""
  },
  {
    name: "Haloperidol Decanoato",
    presentation: "70,52 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Somente via IM profunda no glúteo. Máx 3 mL por local.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "70,52 mg/mL decanoato = 50 mg haloperidol.",
    ph: ""
  },
  {
    name: "Haloperidol",
    presentation: "5 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar no glúteo.",
      evDirect: "Off-label. Até 10 mg em 1 minuto. Não precisa diluir.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Off-label. Diluir em SF 0,9% ou SG 5%.",
        speed: "Infusão contínua 2-25 mg/h.",
        stabilityPostDilution: "7 dias em TA."
      }
    },
    notes: "Risco de prolongamento do intervalo QT.",
    ph: ""
  },
  {
    name: "Heparina Sódica",
    presentation: "5.000 UI/0,25 mL ou 5.000 UI/mL sol. inj.",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Bolus.",
      sc: "Não é necessário diluir. Usar 5.000 UI/0,25 mL.",
      evInfusion: {
        dilution: "25.000 UI em 245 mL de SF 0,9% ou SG 5%.",
        speed: "Intermitente ou contínua (titular).",
        stabilityPostDilution: "24 horas em TA. Não refrigerar."
      }
    },
    notes: "Antídoto: Protamina (1 mg por 100 UI).",
    ph: "5,0-8,0"
  },
  {
    name: "Hidralazina",
    presentation: "20 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 20 mg/mL.",
      evDirect: "Não diluir. EV lento (0,2-0,4 mg/mL).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em SF 0,9% (0,2-0,4 mg/mL). Incompatível com glicose.",
        speed: "Inicial 200-300 mcg/min. Manutenção 50-150 mcg/min.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Monitorar PA e FC a cada 5 minutos.",
    ph: "3,4-4,4"
  },
  {
    name: "Hidrocortisona",
    presentation: "100 mg ou 500 mg em pó liofilizado - FA",
    reconstitution: "100 mg em 2 mL, 500 mg em 4 mL de AD ou SF 0,9%.",
    stabilityPostReconstitution: "24h em TA (luz) ou 3 dias sob refrigeração (luz).",
    administration: {
      im: "Não é necessário diluir. Máx: 50 mg/mL.",
      evDirect: "Não é necessário diluir. 30s (100 mg) a 10 min (500 mg).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100-1000 mL de SF 0,9% ou SG 5% (0,1-1 mg/mL).",
        speed: "> 30 minutos.",
        stabilityPostDilution: "24 horas em TA ou 72 horas sob refrigeração."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Imunoglobulina Anti-Rho (D)",
    presentation: "150 mcg/mL sol. inj. - Seringa 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não é necessário diluir. Se > 5 mL, fracionar.",
      evDirect: "Não é necessário diluir. Administrar lentamente.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Imunoglobulina Coelho Antimócito Humano",
    presentation: "25 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 25 mg com 5 mL de AD (5 mg/mL).",
    stabilityPostReconstitution: "24 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-500 mL de SF 0,9% ou SG 5% (usual 0,5 mg/mL).",
        speed: "4 horas.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "Utilizar filtro de 0,22 μm e veia de grosso calibre.",
    ph: ""
  },
  {
    name: "Imunoglobulina Humana",
    presentation: "2,5 g ou 5 g sol. inj. - FA",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Sítios alternados (abdome, coxas, braços).",
      evInfusion: {
        dilution: "Não é necessário. Se preciso, usar SG 5%.",
        speed: "Iniciar 0,5 mL/min, aumentar gradualmente até máx 5 mL/min.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "Não utilizar SF 0,9% como diluente.",
    ph: "4,6-5,1"
  },
  {
    name: "Insulina Humana NPH",
    presentation: "100 UI/mL sol. inj. - FA",
    reconstitution: "Solução injetável reconstituída. Agitar suavemente.",
    stabilityPostReconstitution: "28 dias fora da geladeira em local fresco.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Sítios alternados. Máx: 100 UI/mL.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Alternar o local da aplicação.",
    ph: ""
  },
  {
    name: "Insulina Humana Regular",
    presentation: "100 UI/mL sol. inj. - FA",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "28 dias fora da geladeira em local fresco.",
    administration: {
      im: "Não é necessário diluir. Máx: 100 UI/mL.",
      evDirect: "Não administrar.",
      sc: "Sítios alternados. PCA possível.",
      evInfusion: {
        dilution: "Diluir em SF 0,9%, SG 5% ou SG 10% (0,05-1 UI/mL).",
        speed: "Titular conforme glicemia.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Saturar o equipo por 30 min antes da infusão.",
    ph: ""
  },
  {
    name: "Levofloxacino",
    presentation: "5 mg/mL sol. inj. - Bolsa 100 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Pronto para uso. Pode diluir em SF, SG, RL.",
        speed: "250-500 mg: 60 min. 750 mg: 90 min.",
        stabilityPostDilution: "Uso imediato após aberto. Proteger da luz."
      }
    },
    notes: "Infusão rápida pode causar hipotensão.",
    ph: "3,8-5,8"
  },
  {
    name: "Lidocaína",
    presentation: "20 mg/mL sol. inj. - Ampola 5 mL ou FA 20 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não é necessário diluir. Máx: 20 mg/mL.",
      evDirect: "Não é necessário diluir. Bolus (2 min ou 50 mg/min).",
      sc: "Não é necessário diluir. Deltoide. Máx: 20 mg/mL.",
      evInfusion: {
        dilution: "Diluir para máx 8 mg/mL em SF 0,9% ou SG 5%.",
        speed: "7,5-30 mL/h.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Via endotraqueal: diluir em 5-10 mL SF 0,9% ou AD.",
    ph: "5,0-7,0"
  },
  {
    name: "Linezolida",
    presentation: "2 mg/mL sol. inj. - Bolsa 300 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não é necessário diluir (bolsa pronta).",
        speed: "30-60 minutos.",
        stabilityPostDilution: "Uso imediato após aberto. Proteger da luz."
      }
    },
    notes: "Lavar o acesso com SG 5%, SF 0,9% ou RL após o uso.",
    ph: "4,4-6,2"
  },
  {
    name: "Mesna",
    presentation: "100 mg/mL sol. inj. - Ampola 4 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Diluir para 20 mg/mL em SF 0,9%, SG 5% ou RL. 15-30 min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 20 mg/mL em SF 0,9%, SG 5% ou RL.",
        speed: "",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Não exceder 50 mg/mL se misturado com ifosfamida.",
    ph: ""
  },
  {
    name: "Metilergometrina",
    presentation: "0,2 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 0,2 mg/mL.",
      evDirect: "Não é necessário diluir. 1 minuto. Máx: 0,2 mg/mL.",
      sc: "Não é necessário diluir. Máx: 0,2 mg/mL.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Uso IV apenas em risco de vida. Monitorar PA.",
    ph: ""
  },
  {
    name: "Metilprednisolona",
    presentation: "125 mg ou 500 mg em pó liofilizado - FA",
    reconstitution: "125 mg em 2 mL, 500 mg em 8 mL de diluente próprio.",
    stabilityPostReconstitution: "48 horas em TA. Não refrigerar.",
    administration: {
      im: "Não é necessário diluir. Máx: 62,5 mg/mL.",
      evDirect: "Dose máx 250 mg. Não é necessário diluir. 5 min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Doses > 250 mg. Diluir para 2,5-20 mg/mL em SF 0,9% ou SG 5%.",
        speed: "30-120 minutos.",
        stabilityPostDilution: "24 horas em TA. Não refrigerar."
      }
    },
    notes: "Diluente próprio contém álcool benzílico.",
    ph: ""
  },
  {
    name: "Metoclopramida",
    presentation: "5 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Lentamente.",
      evDirect: "Dose até 10 mg: puro. Mínimo 3 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Dose > 10 mg: diluir em 50 mL de SF 0,9%.",
        speed: "15-30 minutos.",
        stabilityPostDilution: "24 horas em TA. Não refrigerar."
      }
    },
    notes: "Infusão rápida pode causar reação extrapiramidal.",
    ph: "3-6,5"
  },
  {
    name: "Metoprolol",
    presentation: "1 mg/mL sol. inj. - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. 2 minutos. Máx 15 mg.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 5-40 mL em 100 mL de SF 0,9%, SG 5% ou RL.",
        speed: "30-60 minutos.",
        stabilityPostDilution: "12 horas em TA. Proteger da luz."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Metronidazol",
    presentation: "5 mg/mL sol. inj. - Bolsa 100 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não é necessário diluir (bolsa pronta).",
        speed: "5 mL/min (aproximadamente 20-60 min).",
        stabilityPostDilution: "Uso imediato após aberto. Proteger da luz."
      }
    },
    notes: "Não refrigerar (risco de cristalização).",
    ph: "4,5-7,0"
  },
  {
    name: "Micafungina",
    presentation: "100 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 100 mg com 5 mL de SF 0,9% ou SG 5%.",
    stabilityPostReconstitution: "24 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou SG 5%.",
        speed: "1 hora.",
        stabilityPostDilution: "24 horas em TA. Proteger da luz."
      }
    },
    notes: "",
    ph: "5,0-7,0"
  },
  {
    name: "Milrinona",
    presentation: "1 mg/mL sol. inj. - FA 10 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Diluir para 0,2 mg/mL em SF 0,9% ou SG 5%. 10 min.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 0,2 mg/mL em SF 0,9% ou SG 5%.",
        speed: "0,375-0,75 mcg/kg/min.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: "3,2-4,0"
  },
  {
    name: "Morfina",
    presentation: "1 mg/mL ou 10 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 10 mg/mL.",
      evDirect: "Diluir 10 mg em 9 mL de AD. 4-5 minutos.",
      sc: "Não é necessário diluir. Máx: 10 mg/mL.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5% (0,1-1 mg/mL).",
        speed: "0,8-10 mg/h.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Antídoto: Naloxona.",
    ph: "2,5-6,5"
  },
  {
    name: "Naloxona",
    presentation: "0,4 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 0,4 mg/mL.",
      evDirect: "Puro ou diluído em 10 mL de AD. 30 segundos.",
      sc: "Não é necessário diluir. Máx: 0,4 mg/mL.",
      evInfusion: {
        dilution: "Diluir 2 mg em 500 mL de SF 0,9% ou SG 5% (4 mcg/mL).",
        speed: "Titular conforme resposta.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: "3,0-4,5"
  },
  {
    name: "Neostigmina",
    presentation: "0,5 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 0,5 mg/mL.",
      evDirect: "Não é necessário diluir. 1 minuto. Máx: 0,5 mg/mL.",
      sc: "Não é necessário diluir. Máx: 0,5 mg/mL.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Administrar atropina antes para evitar bradicardia.",
    ph: ""
  },
  {
    name: "Nitroglicerina",
    presentation: "5 mg/mL sol. inj. - Ampola 5 mL ou 10 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 50 mg em 240 mL de SF 0,9% ou SG 5% (usual).",
        speed: "5-20 mcg/min (titular).",
        stabilityPostDilution: "48 horas em TA ou 7 dias sob refrigeração."
      }
    },
    notes: "Utilizar frasco de vidro ou polietileno. Sorção em PVC.",
    ph: "3,0-6,5"
  },
  {
    name: "Nitroprussiato de Sódio",
    presentation: "25 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 50 mg em 250 mL de SG 5%. Incompatível com SF 0,9%.",
        speed: "0,3-10 mcg/kg/min (titular).",
        stabilityPostDilution: "24 horas em TA. Fotossensível (usar capa)."
      }
    },
    notes: "Trocar solução se houver mudança de cor (azul, verde, vermelho).",
    ph: "3,5-6,0"
  },
  {
    name: "Octreotida",
    presentation: "0,1 mg/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Bolus.",
      sc: "Não é necessário diluir. Máx: 0,1 mg/mL.",
      evInfusion: {
        dilution: "Diluir em 50-200 mL de SF 0,9%.",
        speed: "15-30 minutos ou contínuo (25-50 mcg/h).",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: "3,9-4,5"
  },
  {
    name: "Olanzapina",
    presentation: "10 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 10 mg com 2,1 mL de AD (5 mg/mL).",
    stabilityPostReconstitution: "1 hora em TA. Proteger da luz.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Não administrar simultaneamente com benzodiazepínicos IM.",
    ph: ""
  },
  {
    name: "Omeprazol",
    presentation: "40 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 40 mg com 10 mL de diluente próprio.",
    stabilityPostReconstitution: "4 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. 2,5-5 minutos (máx 4 mg/mL).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou SG 5%.",
        speed: "20-30 minutos.",
        stabilityPostDilution: "12 horas em TA (SF) ou 6 horas em TA (SG)."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Ondansetrona",
    presentation: "2 mg/mL sol. inj. - Ampola 2 mL ou 4 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 2 mg/mL.",
      evDirect: "Não é necessário diluir. 2-5 minutos. Máx: 2 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50 mL de SF 0,9% ou SG 5%.",
        speed: "15 minutos.",
        stabilityPostDilution: "48 horas em TA."
      }
    },
    notes: "",
    ph: "3,3-4,0"
  },
  {
    name: "Oxacilina",
    presentation: "500 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 500 mg com 5 mL de AD.",
    stabilityPostReconstitution: "3 dias em TA ou 7 dias sob refrigeração.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Não é necessário diluir. 10 minutos. Máx: 100 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5%.",
        speed: "30-60 minutos.",
        stabilityPostDilution: "6 horas em TA (SG) ou 24 horas em TA (SF)."
      }
    },
    notes: "Vesicante.",
    ph: "6,0-8,5"
  },
  {
    name: "Pancurônio",
    presentation: "2 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Bolus.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Pode ser diluído em SF 0,9% ou SG 5%.",
        speed: "Titular conforme resposta.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: "4"
  },
  {
    name: "Pantoprazol",
    presentation: "40 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 40 mg com 10 mL de SF 0,9%.",
    stabilityPostReconstitution: "12 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. 2-5 minutos. Máx: 4 mg/mL.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou SG 5%.",
        speed: "15 minutos.",
        stabilityPostDilution: "12 horas em TA."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Petidina",
    presentation: "50 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Diluir em 10 mL de AD ou SF 0,9%. Lento (> 5 min).",
      sc: "Não é necessário diluir. Máx: 50 mg/mL.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5%.",
        speed: "15-30 minutos.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Antídoto: Naloxona.",
    ph: "3,5-6,0"
  },
  {
    name: "Polivitamínico (Adulto)",
    presentation: "Sol. inj. - FA 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 1 FA em 500-1000 mL de SF 0,9% ou SG 5%.",
        speed: "Conforme a solução de infusão.",
        stabilityPostDilution: "24 horas em TA. Fotossensível."
      }
    },
    notes: "Contém vitaminas lipossolúveis e hidrossolúveis.",
    ph: ""
  },
  {
    name: "Prometazina",
    presentation: "25 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Diluir em 10-20 mL de SF 0,9%. Lento (máx 25 mg/min).",
      sc: "Não administrar. Risco de necrose.",
      evInfusion: {
        dilution: "Não recomendado.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Altamente irritante. Evitar via EV se possível.",
    ph: "4,0-5,5"
  },
  {
    name: "Propofol",
    presentation: "10 mg/mL sol. inj. - Ampola 20 mL ou FA 50 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Bolus.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Puro ou diluído em SG 5% (máx 1:5).",
        speed: "Titular conforme sedação.",
        stabilityPostDilution: "12 horas em TA (puro) ou 6 horas (diluído)."
      }
    },
    notes: "Trocar equipo a cada 12 horas.",
    ph: "7,0-8,5"
  },
  {
    name: "Protamina",
    presentation: "10 mg/mL sol. inj. - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Lento (10 min ou 5 mg/min).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "Risco de hipotensão grave se rápido.",
    ph: ""
  },
  {
    name: "Ranitidina",
    presentation: "25 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 25 mg/mL.",
      evDirect: "Diluir em 20 mL de SF 0,9% ou SG 5%. Mínimo 5 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou SG 5%.",
        speed: "15-20 minutos.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Infusão rápida pode causar bradicardia.",
    ph: "6,7-7,3"
  },
  {
    name: "Sacarato de Hidróxido de Ferro III",
    presentation: "20 mg/mL sol. inj. - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Lento (1 mL/min). Máx 200 mg por aplicação.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 100 mg em 100 mL de SF 0,9%. Incompatível com glicose.",
        speed: "100 mg em 15 min; 200 mg em 30 min.",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "Não misturar com outros medicamentos.",
    ph: "10,5-11"
  },
  {
    name: "Sulfametoxazol + Trimetoprima",
    presentation: "80 mg + 16 mg/mL sol. inj. - Ampola 5 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 1 ampola em 125 mL de SG 5%. Incompatível com SF 0,9%.",
        speed: "60-90 minutos.",
        stabilityPostDilution: "6 horas em TA (se 1:125) ou 2 horas (se 1:75)."
      }
    },
    notes: "Não refrigerar a solução diluída.",
    ph: "10"
  },
  {
    name: "Sulfato de Magnésio 10% e 50%",
    presentation: "100 mg/mL ou 500 mg/mL sol. inj.",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Usar 50%. Adultos: puro. Crianças: diluir para 20%.",
      evDirect: "Diluir para máx 20% em AD ou SF 0,9%. Lento.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para máx 20% em SF 0,9% ou SG 5%.",
        speed: "1-2 g/h.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Monitorar reflexos tendinosos e frequência respiratória.",
    ph: "5,5-7,0"
  },
  {
    name: "Suxametônio",
    presentation: "100 mg ou 500 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com AD ou SF 0,9% para 20-50 mg/mL.",
    stabilityPostReconstitution: "24 horas em TA.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Não é necessário diluir. Bolus (10-30 segundos).",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 1-2 mg/mL em SF 0,9% ou SG 5%.",
        speed: "Titular conforme resposta.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Armazenar FA sob refrigeração.",
    ph: "3,0-4,5"
  },
  {
    name: "Teicoplanina",
    presentation: "200 mg ou 400 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com 3 mL de diluente próprio. Não agitar.",
    stabilityPostReconstitution: "24 horas em TA ou 7 dias sob refrigeração.",
    administration: {
      im: "Não é necessário diluir. Máx 400 mg por local.",
      evDirect: "Não é necessário diluir. 3-5 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5%.",
        speed: "30 minutos.",
        stabilityPostDilution: "24 horas em TA ou 7 dias sob refrigeração."
      }
    },
    notes: "",
    ph: "7,5"
  },
  {
    name: "Tenoxicam",
    presentation: "20 mg ou 40 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com 2 mL de diluente próprio.",
    stabilityPostReconstitution: "Uso imediato após reconstituição.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Não é necessário diluir. 15 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Não administrar.",
        speed: "",
        stabilityPostDilution: ""
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Terlipressina",
    presentation: "1 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com 5 mL de diluente próprio.",
    stabilityPostReconstitution: "Uso imediato.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Bolus.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50 mL de SF 0,9% ou SG 5%.",
        speed: "Contínuo (2-12 mg/24h).",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Armazenar FA sob refrigeração.",
    ph: ""
  },
  {
    name: "Thiopental",
    presentation: "500 mg ou 1.000 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com AD ou SF 0,9% para 25 mg/mL (2,5%).",
    stabilityPostReconstitution: "24 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Bolus.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em SF 0,9% ou SG 5% (máx 2 mg/mL).",
        speed: "Titular conforme resposta.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Altamente alcalino. Risco de necrose se extravasamento.",
    ph: "10,5"
  },
  {
    name: "Tigeciclina",
    presentation: "50 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 50 mg com 5,3 mL de SF 0,9% ou SG 5%.",
    stabilityPostReconstitution: "6 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 50 mg em 100 mL de SF 0,9% ou SG 5%.",
        speed: "30-60 minutos.",
        stabilityPostDilution: "24 horas em TA ou 48 horas sob refrigeração."
      }
    },
    notes: "Solução deve ser amarela/alaranjada.",
    ph: "4,5-8,1"
  },
  {
    name: "Tirofiban",
    presentation: "0,25 mg/mL sol. inj. - FA 50 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após aberto.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir 50 mL em 200 mL de SF 0,9% ou SG 5% (0,05 mg/mL).",
        speed: "0,4 mcg/kg/min por 30 min, depois 0,1 mcg/kg/min.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: "5,5-6,5"
  },
  {
    name: "Tobramicina",
    presentation: "40 mg/mL sol. inj. - Ampola 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Não é necessário diluir. 2-3 minutos.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em 50-100 mL de SF 0,9% ou SG 5%.",
        speed: "20-60 minutos.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: "3,0-6,5"
  },
  {
    name: "Tramadol",
    presentation: "50 mg/mL sol. inj. - Ampola 1 mL ou 2 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Administrar profundamente.",
      evDirect: "Diluir em 10-20 mL de SF 0,9%. Lento (2-3 min).",
      sc: "Não é necessário diluir. Máx: 50 mg/mL.",
      evInfusion: {
        dilution: "Diluir em 100 mL de SF 0,9% ou SG 5%.",
        speed: "20-30 minutos.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: ""
  },
  {
    name: "Vasopressina",
    presentation: "20 UI/mL sol. inj. - Ampola 1 mL",
    reconstitution: "Solução injetável reconstituída.",
    stabilityPostReconstitution: "Uso imediato após a abertura da ampola.",
    administration: {
      im: "Não é necessário diluir. Máx: 20 UI/mL.",
      evDirect: "Não administrar.",
      sc: "Não é necessário diluir. Máx: 20 UI/mL.",
      evInfusion: {
        dilution: "Diluir 20 UI em 100 mL de SF 0,9% ou SG 5% (0,2 UI/mL).",
        speed: "0,01-0,04 UI/min.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "Preferencialmente em acesso central.",
    ph: "2,5-4,5"
  },
  {
    name: "Vecurônio",
    presentation: "4 mg ou 10 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir com AD ou SF 0,9% para 1-2 mg/mL.",
    stabilityPostReconstitution: "24 horas em TA.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não é necessário diluir. Bolus.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir em SF 0,9% ou SG 5% (máx 2 mg/mL).",
        speed: "Titular conforme resposta.",
        stabilityPostDilution: "24 horas em TA."
      }
    },
    notes: "",
    ph: "4"
  },
  {
    name: "Voriconazol",
    presentation: "200 mg em pó liofilizado - FA",
    reconstitution: "Reconstituir 200 mg com 19 mL de AD (10 mg/mL).",
    stabilityPostReconstitution: "24 horas sob refrigeração.",
    administration: {
      im: "Não administrar.",
      evDirect: "Não administrar.",
      sc: "Não administrar.",
      evInfusion: {
        dilution: "Diluir para 0,5-5 mg/mL em SF 0,9%, SG 5% ou RL.",
        speed: "1-3 horas (máx 3 mg/kg/h).",
        stabilityPostDilution: "Uso imediato."
      }
    },
    notes: "Não administrar com soluções contendo bicarbonato.",
    ph: ""
  }
];
