export enum DrugCategory {
  VASOACTIVE = 'Vasoativas / Cronotrópicos',
  SEDATION = 'Sedoanalgesia',
  ANTIARRHYTHMIC = 'Antiarrítmicos',
  NEUROMUSCULAR = 'Bloqueadores Neuromusculares',
  ELECTROLYTES = 'Eletrólitos'
}

export interface Drug {
  id: string;
  category: DrugCategory;
  name: string;
  unit: string;
  standardMg: number;
  standardMl: number;
  defaultDose: number;
  minDose: number;
  maxDose: number;
  lowDose?: number;
  modDose?: number;
  highDose?: number;
  note: string;
  weightIndependent?: boolean;
  isUnitUI?: boolean;
  isUnitMg?: boolean;
  isHourly?: boolean;
}

export const DRUGS: Drug[] = [
  { 
    id: 'norepinephrine', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Noradrenalina', 
    unit: 'mcg/kg/min', 
    standardMg: 4, 
    standardMl: 250, 
    defaultDose: 0.1, 
    minDose: 0.03, 
    maxDose: 3.3,
    lowDose: 0.03,
    modDose: 0.5,
    highDose: 3.3,
    note: 'Início: 0.03 mcg/kg/min. Titular conforme PAM alvo.' 
  },
  { 
    id: 'adrenaline', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Adrenalina', 
    unit: 'mcg/kg/min', 
    standardMg: 4, 
    standardMl: 250, 
    defaultDose: 0.1, 
    minDose: 0.01, 
    maxDose: 2.0,
    lowDose: 0.01,
    modDose: 0.5,
    highDose: 2.0,
    note: 'Dose baixa: 0.01. Moderada: 0.5. Alta: 2.0 mcg/kg/min.' 
  },
  { 
    id: 'dobutamine', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Dobutamina', 
    unit: 'mcg/kg/min', 
    standardMg: 250, 
    standardMl: 250, 
    defaultDose: 5, 
    minDose: 2.0, 
    maxDose: 20.0,
    lowDose: 2.0,
    modDose: 12.0,
    highDose: 20.0,
    note: 'Dose moderada: 12 mcg/kg/min. Máxima: 20 mcg/kg/min.' 
  },
  { 
    id: 'dopamine', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Dopamina', 
    unit: 'mcg/kg/min', 
    standardMg: 250, 
    standardMl: 250, 
    defaultDose: 5, 
    minDose: 2.0, 
    maxDose: 20.0,
    lowDose: 2.0,
    modDose: 7.5,
    highDose: 20.0,
    note: 'Dose baixa: 2. Moderada: 7.5. Alta: 20 mcg/kg/min.' 
  },
  { 
    id: 'nitroglycerin', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Tridil (Nitroglicerina)', 
    unit: 'mcg/min', 
    standardMg: 50, 
    standardMl: 250, 
    defaultDose: 5, 
    weightIndependent: true, 
    minDose: 5.0, 
    maxDose: 400.0,
    lowDose: 5.0,
    highDose: 400.0,
    note: 'Início: 5 mcg/min. Aumentar 5 mcg/min a cada 10 min.' 
  },
  { 
    id: 'nitroprusside', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Nitroprus (Nitroprussiato)', 
    unit: 'mcg/kg/min', 
    standardMg: 50, 
    standardMl: 250, 
    defaultDose: 0.5, 
    minDose: 0.3, 
    maxDose: 10.0,
    lowDose: 0.3,
    highDose: 10.0,
    note: 'Dose baixa: 0.3. Dobrar a dose a cada 20 min até alvo.' 
  },
  { 
    id: 'vasopressin', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Encrise (Vasopressina)', 
    unit: 'U/min', 
    standardMg: 20, 
    standardMl: 100, 
    defaultDose: 0.02, 
    isUnitUI: true, 
    weightIndependent: true, 
    minDose: 0.01, 
    maxDose: 0.04,
    lowDose: 0.01,
    modDose: 0.02,
    highDose: 0.04,
    note: 'Dose baixa: 0.01. Moderada: 0.02. Alta: 0.04 U/min.' 
  },
  { 
    id: 'milrinone', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Primacor (Milrinona)', 
    unit: 'mcg/kg/min', 
    standardMg: 20, 
    standardMl: 100, 
    defaultDose: 0.38, 
    minDose: 0.125, 
    maxDose: 0.75,
    lowDose: 0.125,
    modDose: 0.38,
    highDose: 0.75,
    note: 'Dose baixa: 0.125. Moderada: 0.38. Alta: 0.75 mcg/kg/min.' 
  },
  { 
    id: 'fentanyl', 
    category: DrugCategory.SEDATION, 
    name: 'Fentanil', 
    unit: 'mcg/kg/h', 
    standardMg: 2.5, 
    standardMl: 250, 
    defaultDose: 5.0, 
    isHourly: true, 
    minDose: 1.0, 
    maxDose: 10.0,
    lowDose: 1.0,
    modDose: 5.0,
    highDose: 10.0,
    note: 'Ataque: 1-3 mcg/kg a cada 5-15 min. Dose baixa: 1. Moderada: 5. Alta: 10 mcg/kg/h.' 
  },
  { 
    id: 'midazolam', 
    category: DrugCategory.SEDATION, 
    name: 'Dormonid (Midazolam)', 
    unit: 'mg/kg/h', 
    standardMg: 150, 
    standardMl: 250, 
    defaultDose: 0.07, 
    isUnitMg: true, 
    isHourly: true, 
    minDose: 0.02, 
    maxDose: 0.2,
    lowDose: 0.02,
    modDose: 0.07,
    highDose: 0.2,
    note: 'Ataque: 1-2.5 mg a cada 1-5 min. Dose baixa: 0.02. Moderada: 0.07. Alta: 0.2 mg/kg/h.' 
  },
  { 
    id: 'propofol', 
    category: DrugCategory.SEDATION, 
    name: 'Diprivan (Propofol)', 
    unit: 'mg/kg/h', 
    standardMg: 1000, 
    standardMl: 100, 
    defaultDose: 3.0, 
    isUnitMg: true,
    isHourly: true,
    minDose: 0.5, 
    maxDose: 5.0,
    lowDose: 0.5,
    modDose: 3.0,
    highDose: 5.0,
    note: 'Ataque: 0.5-3 mg/kg a cada 5-15 min. Dose baixa: 0.5. Moderada: 3. Alta: 5 mg/kg/h.' 
  },
  { 
    id: 'dexmedetomidine', 
    category: DrugCategory.SEDATION, 
    name: 'Precedex (Dexmedetomidina)', 
    unit: 'mcg/kg/h', 
    standardMg: 400, 
    standardMl: 100, 
    defaultDose: 0.4, 
    isHourly: true, 
    minDose: 0.2, 
    maxDose: 1.5,
    lowDose: 0.2,
    modDose: 0.4,
    highDose: 1.5,
    note: 'Ataque: 1 mcg/kg em 10 min. Dose baixa: 0.2. Moderada: 0.4. Alta: 1.5 mcg/kg/h.' 
  },
  { 
    id: 'ketamine', 
    category: DrugCategory.SEDATION, 
    name: 'Ketamin (Cetamina)', 
    unit: 'mg/kg/h', 
    standardMg: 500, 
    standardMl: 50, 
    defaultDose: 0.6, 
    isUnitMg: true,
    isHourly: true,
    minDose: 0.04, 
    maxDose: 2.5,
    lowDose: 0.04,
    modDose: 0.6,
    highDose: 2.5,
    note: 'Ataque: 1-2 mg/kg. Dose baixa: 0.04. Moderada: 0.6. Alta: 2.5 mg/kg/h.' 
  },
  { 
    id: 'rocuronium', 
    category: DrugCategory.NEUROMUSCULAR, 
    name: 'Esmeron (Rocurônio)', 
    unit: 'mcg/kg/min', 
    standardMg: 50, 
    standardMl: 50, 
    defaultDose: 7.5, 
    minDose: 3.0, 
    maxDose: 16.0,
    lowDose: 3.0,
    modDose: 7.5,
    highDose: 16.0,
    note: 'Ataque: 450-1200 mcg/kg. Dose baixa: 3. Moderada: 7.5. Alta: 16 mcg/kg/min.' 
  },
  { 
    id: 'cisatracurium', 
    category: DrugCategory.NEUROMUSCULAR, 
    name: 'Nimbium (Cisatracúrio)', 
    unit: 'mcg/kg/min', 
    standardMg: 50, 
    standardMl: 250, 
    defaultDose: 2.0, 
    minDose: 1.0, 
    maxDose: 3.0,
    lowDose: 1.0,
    modDose: 2.0,
    highDose: 3.0,
    note: 'Ataque: 150 mcg/kg a cada 20 min. Dose baixa: 1. Moderada: 2. Alta: 3 mcg/kg/min.' 
  },
  { 
    id: 'atracurium', 
    category: DrugCategory.NEUROMUSCULAR, 
    name: 'Tracium (Atracúrio)', 
    unit: 'mcg/kg/min', 
    standardMg: 500, 
    standardMl: 250, 
    defaultDose: 9.0, 
    minDose: 2.0, 
    maxDose: 12.0,
    lowDose: 2.0,
    modDose: 9.0,
    highDose: 12.0,
    note: 'Ataque: 500 mcg/kg a cada 5-15 min. Dose baixa: 2. Moderada: 9. Alta: 12 mcg/kg/min.' 
  },
  { 
    id: 'amiodarone', 
    category: DrugCategory.ANTIARRHYTHMIC, 
    name: 'Amiodarona (Manutenção)', 
    unit: 'mg/min', 
    standardMg: 900, 
    standardMl: 500, 
    defaultDose: 1.0, 
    isUnitMg: true, 
    weightIndependent: true, 
    minDose: 0.5, 
    maxDose: 1.0, 
    note: 'Pós-ataque: 1 mg/min por 6h, depois 0.5 mg/min.' 
  },
  { 
    id: 'kcl', 
    category: DrugCategory.ELECTROLYTES, 
    name: 'KCl 19,1%', 
    unit: 'mEq/h', 
    standardMg: 25, 
    standardMl: 250, 
    defaultDose: 10.0, 
    isUnitUI: true, 
    weightIndependent: true, 
    isHourly: true,
    minDose: 0.0, 
    maxDose: 40.0, 
    note: 'Infusão máxima: 40 mEq/h. Diluição CVC: 50mEq/150ml em 2h. AVP: 50mEq/500ml em 4h.' 
  },
  { 
    id: 'kphos', 
    category: DrugCategory.ELECTROLYTES, 
    name: 'Fosfato de Potássio', 
    unit: 'mEq/h', 
    standardMg: 20, 
    standardMl: 250, 
    defaultDose: 5.0, 
    isUnitUI: true, 
    weightIndependent: true, 
    isHourly: true,
    minDose: 0.0, 
    maxDose: 20.0, 
    note: '20mEq K + 20mEq P. Infusão máx: 0.5-1 mmol/kg/8h. Diluição: 20mEq/250ml em 6h.' 
  }
];
