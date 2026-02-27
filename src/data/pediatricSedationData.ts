export interface PediatricDrug {
  name: string;
  category: string;
  doses: {
    route: string;
    dose: string;
    maxDose?: string;
  }[];
  onset: string;
  duration: string;
  risks: string;
  notes?: string;
}

export const PEDIATRIC_SEDATION_DRUGS: PediatricDrug[] = [
  {
    name: 'Cetamina',
    category: 'Anestésico dissociativo',
    doses: [
      { route: 'EV', dose: '1-2 mg/kg' },
      { route: 'IM', dose: '4-5 mg/kg' },
      { route: 'IN', dose: '3-6 mg/kg' },
      { route: 'VO', dose: '5 mg/kg' }
    ],
    onset: 'EV: 30-60 seg; IM: 10-15 min; IN: 5-8 min; VO: 7-15 min',
    duration: 'Analgesia: 15-30 min; IM: 3-4h; IV: 1-2h; IN: 30-45 min',
    risks: 'Taquicardia, hipertensão, vômitos, hipersalivação, agitação/alucinação, apneia, laringoespasmo.',
    notes: 'Se associado a propofol, reduzir dose de Cetamina para 0,5 mg/kg. Contraindicações: <3 meses, glaucoma, ICC.'
  },
  {
    name: 'Midazolam',
    category: 'Benzodiazepínico',
    doses: [
      { route: 'EV', dose: '0,1 mg/kg' },
      { route: 'VO', dose: '0,25-0,5 mg/kg', maxDose: '20 mg' },
      { route: 'IN', dose: '0,2-0,3 mg/kg', maxDose: '10 mg' }
    ],
    onset: 'EV: 1-3 min; VO/IN: 20-30 min',
    duration: '30-60 min',
    risks: 'Instabilidade hemodinâmica, agitação paradoxal.',
    notes: 'Evitar na instabilidade hemodinâmica. Antídoto: Flumazenil.'
  },
  {
    name: 'Propofol',
    category: 'Sedativo/Hipnótico',
    doses: [
      { route: 'EV', dose: '0,5-1 mg/kg (bolus)', maxDose: '3 mg/kg total' }
    ],
    onset: '30 seg',
    duration: '3-10 min',
    risks: 'Vasodilatação, depressão miocárdica, depressão respiratória, apneia.',
    notes: 'Contraindicado se alergia a ovo e soja. Evitar em hipovolemia.'
  },
  {
    name: 'Dexmedetomidina',
    category: 'Agonista alfa-2',
    doses: [
      { route: 'EV', dose: '0,5-1 mcg/kg (lento 10 min)', maxDose: 'Manutenção 0,2-0,7 mcg/kg/h' },
      { route: 'IN', dose: '1,5 mcg/kg' },
      { route: 'VO', dose: '3-4 mcg/kg' }
    ],
    onset: 'EV: 5-10 min',
    duration: 'EV: 30-70 min',
    risks: 'Hipotensão, bradicardia.',
    notes: 'Risco de depressão respiratória é mínimo.'
  },
  {
    name: 'Fentanil',
    category: 'Opioide',
    doses: [
      { route: 'EV', dose: '1-2 mcg/kg' },
      { route: 'IN', dose: '2 mcg/kg', maxDose: '100 mcg' },
      { route: 'IM', dose: '1-2 mcg/kg' }
    ],
    onset: 'EV: 2-3 min; IN: 5-10 min; IM: 7-8 min',
    duration: 'EV: 30-60 min; IM: 1-2h',
    risks: 'Hipoxemia, depressão respiratória, apneia, rigidez torácica.',
    notes: 'Antídoto: Naloxona.'
  }
];
