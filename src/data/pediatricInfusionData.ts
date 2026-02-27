import { DrugCategory } from '../constants';

export interface PediatricInfusionDrug {
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
  isUnitMcg?: boolean;
  isHourly?: boolean;
}

export const PEDIATRIC_INFUSION_DRUGS: PediatricInfusionDrug[] = [
  { 
    id: 'p-norepinephrine', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Noradrenalina (Ped)', 
    unit: 'mcg/kg/min', 
    standardMg: 1, 
    standardMl: 50, 
    defaultDose: 0.1, 
    minDose: 0.05, 
    maxDose: 2.0,
    lowDose: 0.05,
    modDose: 0.5,
    highDose: 2.0,
    note: 'Diluição padrão: 1mg em 50ml (0,02mg/ml). Titular conforme hemodinâmica.' 
  },
  { 
    id: 'p-adrenaline', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Adrenalina (Ped)', 
    unit: 'mcg/kg/min', 
    standardMg: 1, 
    standardMl: 50, 
    defaultDose: 0.1, 
    minDose: 0.05, 
    maxDose: 2.0,
    lowDose: 0.05,
    modDose: 0.5,
    highDose: 2.0,
    note: 'Diluição padrão: 1mg em 50ml. Usada em choque frio ou bradicardia refratária.' 
  },
  { 
    id: 'p-dobutamine', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Dobutamina (Ped)', 
    unit: 'mcg/kg/min', 
    standardMg: 250, 
    standardMl: 50, 
    defaultDose: 5, 
    minDose: 2.0, 
    maxDose: 20.0,
    lowDose: 2.0,
    modDose: 10.0,
    highDose: 20.0,
    note: 'Dose inotrópica usual: 5-10 mcg/kg/min.' 
  },
  { 
    id: 'p-dopamine', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Dopamina (Ped)', 
    unit: 'mcg/kg/min', 
    standardMg: 200, 
    standardMl: 50, 
    defaultDose: 5, 
    minDose: 2.0, 
    maxDose: 20.0,
    lowDose: 2.0,
    modDose: 10.0,
    highDose: 20.0,
    note: 'Dose inotrópica: 5-10 mcg/kg/min. Alfa-adrenérgica: >10 mcg/kg/min.' 
  },
  { 
    id: 'p-milrinone', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Milrinona (Ped)', 
    unit: 'mcg/kg/min', 
    standardMg: 10, 
    standardMl: 50, 
    defaultDose: 0.5, 
    minDose: 0.25, 
    maxDose: 0.75,
    note: 'Inodilatador. Cuidado com hipotensão.' 
  },
  { 
    id: 'p-fentanyl', 
    category: DrugCategory.SEDATION, 
    name: 'Fentanil (Ped)', 
    unit: 'mcg/kg/h', 
    standardMg: 250, 
    standardMl: 50, 
    defaultDose: 2.0, 
    isHourly: true, 
    isUnitMcg: true,
    minDose: 1.0, 
    maxDose: 5.0,
    note: 'Analgesia contínua: 1-5 mcg/kg/h.' 
  },
  { 
    id: 'p-midazolam', 
    category: DrugCategory.SEDATION, 
    name: 'Midazolam (Ped)', 
    unit: 'mg/kg/h', 
    standardMg: 50, 
    standardMl: 50, 
    defaultDose: 0.1, 
    isUnitMg: true, 
    isHourly: true, 
    minDose: 0.05, 
    maxDose: 0.4,
    note: 'Sedação contínua: 0.05-0.4 mg/kg/h.' 
  },
  { 
    id: 'p-ketamine', 
    category: DrugCategory.SEDATION, 
    name: 'Cetamina (Ped)', 
    unit: 'mg/kg/h', 
    standardMg: 50, 
    standardMl: 50, 
    defaultDose: 0.5, 
    isUnitMg: true,
    isHourly: true,
    minDose: 0.1, 
    maxDose: 2.0,
    note: 'Sedação/Analgesia: 0.1-2 mg/kg/h.' 
  },
  { 
    id: 'p-propofol', 
    category: DrugCategory.SEDATION, 
    name: 'Propofol (Ped)', 
    unit: 'mg/kg/h', 
    standardMg: 10, 
    standardMl: 1, 
    defaultDose: 1.0, 
    isUnitMg: true,
    isHourly: true,
    minDose: 1.0, 
    maxDose: 4.0,
    note: 'Uso restrito em pediatria (risco de PRIS). Geralmente para sedação de curta duração.' 
  },
  { 
    id: 'p-dexmedetomidine', 
    category: DrugCategory.SEDATION, 
    name: 'Precedex (Ped)', 
    unit: 'mcg/kg/h', 
    standardMg: 200, 
    standardMl: 50, 
    defaultDose: 0.5, 
    isHourly: true, 
    isUnitMcg: true,
    minDose: 0.2, 
    maxDose: 1.5,
    note: 'Sedação sem depressão respiratória. 0.2-1.5 mcg/kg/h.' 
  },
  { 
    id: 'p-rocuronium', 
    category: DrugCategory.NEUROMUSCULAR, 
    name: 'Rocurônio (Ped)', 
    unit: 'mcg/kg/min', 
    standardMg: 50, 
    standardMl: 50, 
    defaultDose: 10, 
    minDose: 5.0, 
    maxDose: 15.0,
    note: 'Bloqueio neuromuscular contínuo: 5-15 mcg/kg/min.' 
  },
  { 
    id: 'p-nitroprusside', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Nitroprus (Ped)', 
    unit: 'mcg/kg/min', 
    standardMg: 50, 
    standardMl: 100, 
    defaultDose: 0.5, 
    minDose: 0.3, 
    maxDose: 8.0,
    note: 'Vasodilatador potente. Proteger da luz. Risco de toxicidade por cianeto.' 
  },
  { 
    id: 'p-nitroglycerin', 
    category: DrugCategory.VASOACTIVE, 
    name: 'Tridil (Ped)', 
    unit: 'mcg/kg/min', 
    standardMg: 50, 
    standardMl: 100, 
    defaultDose: 1.0, 
    minDose: 0.5, 
    maxDose: 5.0,
    note: 'Vasodilatador venoso. Usar equipo de polietileno se possível.' 
  }
];
