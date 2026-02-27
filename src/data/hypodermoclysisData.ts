export interface HypodermoclysisDrug {
  name: string;
  dose: string;
  dilution: string;
  infusionTime: string;
  notes: string;
  category: 'Antibiótico' | 'Eletrólito' | 'Psicotrópico' | 'Outros';
}

export const HYPODERMOCLYSIS_DRUGS: HypodermoclysisDrug[] = [
  {
    name: 'Ácido tranexâmico',
    dose: '500 a 2000 mg/dia',
    dilution: 'AI ou SF 0,9% 20-50 mL',
    infusionTime: '15 a 30 min ou Contínuo',
    notes: 'Taxa de conversão oral para SC é 2:1',
    category: 'Outros'
  },
  {
    name: 'Ácido zoledrônico',
    dose: '4 mg/dia',
    dilution: 'SF 0,9%',
    infusionTime: '6 a 12 horas',
    notes: '',
    category: 'Outros'
  },
  {
    name: 'Alfentanil',
    dose: '1 a 20 mg/dia',
    dilution: 'SF 0,9% 100-250 mL',
    infusionTime: 'Contínuo',
    notes: '',
    category: 'Psicotrópico'
  },
  {
    name: 'Ampicilina',
    dose: '1g/dia',
    dilution: 'SF 0,9% 50-100 mL',
    infusionTime: '20 a 40 min',
    notes: '',
    category: 'Antibiótico'
  },
  {
    name: 'Baclofeno',
    dose: '10 mg/dia',
    dilution: 'SF 0,9%',
    infusionTime: 'Contínuo',
    notes: '',
    category: 'Outros'
  },
  {
    name: 'Cefepima',
    dose: '1g de 8/8h ou 12/12h',
    dilution: 'SF 0,9% ou SG 5% 50-100 mL',
    infusionTime: '40 min',
    notes: '',
    category: 'Antibiótico'
  },
  {
    name: 'Cefotaxima',
    dose: '500 mg/dia',
    dilution: 'SF 0,9% 100 mL',
    infusionTime: '40 min',
    notes: '',
    category: 'Antibiótico'
  },
  {
    name: 'Ceftazidima',
    dose: '500 mg/dia',
    dilution: 'SF 0,9% 100 mL',
    infusionTime: '40 min',
    notes: '',
    category: 'Antibiótico'
  },
  {
    name: 'Ceftriaxona',
    dose: '1g de 12/12h ou 24/24h',
    dilution: 'SF 0,9% ou SG 5% 100 mL',
    infusionTime: '40 min',
    notes: 'Não recomendado 2g 24/24h devido ao risco de complicação local',
    category: 'Antibiótico'
  },
  {
    name: 'Cetamina',
    dose: '100 a 500 mg/dia',
    dilution: 'SF 0,9%',
    infusionTime: 'Contínuo',
    notes: 'Possibilidade de necrose no sítio de punção',
    category: 'Psicotrópico'
  },
  {
    name: 'Cetorolaco',
    dose: '90 a 120 mg/dia',
    dilution: 'SF 0,9% 100 mL',
    infusionTime: 'Contínuo',
    notes: 'Possibilidade de sangramento no sítio de punção',
    category: 'Outros'
  },
  {
    name: 'Clodronato',
    dose: '1500 mg/dia',
    dilution: 'SF 0,9% 1000 mL',
    infusionTime: '6 a 12 horas ou Contínuo',
    notes: 'Pode ocasionar dor no local da infusão, edema e vermelhidão',
    category: 'Outros'
  },
  {
    name: 'Clonidina',
    dose: '75 a 150 µg/dia',
    dilution: 'SF 0,9% 100 mL',
    infusionTime: 'Contínuo',
    notes: '',
    category: 'Psicotrópico'
  },
  {
    name: 'Cloreto de Potássio 19,1%',
    dose: '10 a 15 mL (20 a 40 mEq)',
    dilution: 'Diluir em 1000 mL de SF 0,9% ou SG 5%',
    infusionTime: 'Contínuo',
    notes: 'Pode apresentar dor e irritação no local da punção',
    category: 'Eletrólito'
  },
  {
    name: 'Cloreto de sódio 0,9%',
    dose: '-',
    dilution: '1500 ml',
    infusionTime: 'Contínuo',
    notes: '',
    category: 'Eletrólito'
  },
  {
    name: 'Cloreto de sódio 20%',
    dose: '10 a 20 mL',
    dilution: 'Diluir em 1000 mL de SF 0,9% ou SG 5%',
    infusionTime: 'Contínuo',
    notes: '',
    category: 'Eletrólito'
  },
  {
    name: 'Clorpromazina',
    dose: '12,5 a 50 mg de 4/4h ou 6/6h',
    dilution: 'SF 0,9% 100 mL',
    infusionTime: '60 min',
    notes: 'Observação rigorosa do local de punção',
    category: 'Psicotrópico'
  },
  {
    name: 'Dexametasona',
    dose: '2 a 16 mg/dia',
    dilution: 'SF 0,9% 10-50 mL',
    infusionTime: '10 min ou Contínuo',
    notes: 'Risco de irritação local. Manutenção: 0,5 a 1 mg/dia diluído em 1 mL de SF 0,9%',
    category: 'Outros'
  },
  {
    name: 'Dexmedetomidina',
    dose: '0.1 a 1.14 µg/kg/h',
    dilution: 'SF 0,9% 100 mL',
    infusionTime: 'Contínuo',
    notes: 'Pode ocasionar hipotensão e bradicardia',
    category: 'Psicotrópico'
  },
  {
    name: 'Diclofenaco',
    dose: '75 a 150 mg/dia',
    dilution: 'SF 0,9% 30 mL',
    infusionTime: '10 min',
    notes: 'Pode causar irritação local',
    category: 'Outros'
  },
  {
    name: 'Dimenidrinato',
    dose: '50 a 100 mg/dia',
    dilution: 'SF 0,9% 1 mL',
    infusionTime: '10 min',
    notes: '',
    category: 'Outros'
  },
  {
    name: 'Dipirona',
    dose: '1 a 2g de 6/6h',
    dilution: 'SF 0,9% 10mL',
    infusionTime: '10 min',
    notes: 'Risco de irritação local',
    category: 'Outros'
  },
  {
    name: 'Ertapenem',
    dose: '1g/dia',
    dilution: 'SF 0,9% ou SG 5% 50-100 mL',
    infusionTime: '30 a 40 min',
    notes: '',
    category: 'Antibiótico'
  },
  {
    name: 'Escopolamina',
    dose: '20 a 80 mg/dia de 6/6h ou 8/8h',
    dilution: 'SF 0,9% 10-50 mL',
    infusionTime: '10 min ou Contínuo',
    notes: 'Não confundir com a apresentação combinada com dipirona',
    category: 'Outros'
  },
  {
    name: 'Esomeprazol',
    dose: '4 a 40 mg/dia',
    dilution: 'SF 0,9% 50-100 mL',
    infusionTime: '20 min a 1 hora',
    notes: '',
    category: 'Outros'
  },
  {
    name: 'Fenobarbital',
    dose: '100 a 1200 mg/dia',
    dilution: 'SF 0,9% 100 mL',
    infusionTime: '40 min',
    notes: 'Pode causar dor e irritação local',
    category: 'Psicotrópico'
  },
  {
    name: 'Fentanila',
    dose: '100 a 5000 mcg/dia',
    dilution: 'SF 0,9% 10-250 mL',
    infusionTime: '60 min ou Contínuo',
    notes: 'Disfunção hepática: Necessário ajuste de dose',
    category: 'Psicotrópico'
  },
  {
    name: 'Furosemida',
    dose: '20 a 300 mg/dia',
    dilution: 'SF 0,9% 10-50 mL',
    infusionTime: '10 min ou Contínuo',
    notes: 'Taxa de conversão oral para SC é 1:1',
    category: 'Outros'
  },
  {
    name: 'Glicofisiológico',
    dose: '-',
    dilution: '1500 ml',
    infusionTime: 'Contínuo',
    notes: '',
    category: 'Eletrólito'
  },
  {
    name: 'Glicose 5 e 10%',
    dose: '-',
    dilution: '1500 ml',
    infusionTime: 'Contínuo',
    notes: '',
    category: 'Eletrólito'
  },
  {
    name: 'Haloperidol',
    dose: '0,5 a 30 mg/dia',
    dilution: 'AI ou SF 0,9% 10 mL',
    infusionTime: '10 min',
    notes: '',
    category: 'Psicotrópico'
  },
  {
    name: 'Levetiracetam',
    dose: '500 a 4000 mg/dia',
    dilution: 'SF 0,9% ou SG 5% 100-250 mL',
    infusionTime: '30 min a Contínuo',
    notes: 'Taxa de conversão oral para SC é 1:1',
    category: 'Outros'
  },
  {
    name: 'Levomepromazina',
    dose: '25 mg/dia',
    dilution: 'SF 0,9% 30 mL',
    infusionTime: '10 min ou Contínuo',
    notes: 'Medicamento fotossensível. Pode causar irritação. Troca do sítio a cada 3 dias.',
    category: 'Psicotrópico'
  },
  {
    name: 'Lidocaína',
    dose: '0.67 mg/kg/h',
    dilution: 'SF 0,9%',
    infusionTime: 'Contínuo',
    notes: 'Dose máxima: 1.5 mg/kg/hora. Necessário ajuste de dose em disfunção orgânica.',
    category: 'Outros'
  },
  {
    name: 'Meropenem',
    dose: '500mg a 1g de 8/8h',
    dilution: 'SF 0,9% 100 mL',
    infusionTime: '40 a 60 min',
    notes: '',
    category: 'Antibiótico'
  },
  {
    name: 'Metadona',
    dose: '50% da dose oral habitual',
    dilution: 'SF 0,9% 10-50 mL',
    infusionTime: '10 min ou Contínuo',
    notes: 'Risco de irritação local',
    category: 'Psicotrópico'
  },
  {
    name: 'Metoclopramida',
    dose: '30 a 120 mg/dia',
    dilution: 'SF 0,9% 10 mL',
    infusionTime: '10 min',
    notes: 'Risco de irritação local',
    category: 'Outros'
  },
  {
    name: 'Midazolam',
    dose: '1 a 200 mg/dia',
    dilution: 'SF 0,9% 10-100 mL',
    infusionTime: '10 min ou Contínuo',
    notes: 'Risco de irritação local',
    category: 'Psicotrópico'
  },
  {
    name: 'Morfina',
    dose: '2 a 20 mg/dia',
    dilution: 'Puro ou SF 0,9% 10-100 mL',
    infusionTime: '10 min ou Contínuo',
    notes: 'Não existe dose máxima. Iniciar com a menor dose possível em IR.',
    category: 'Psicotrópico'
  },
  {
    name: 'Neostigmina',
    dose: '4 a 6 mg/dia',
    dilution: 'AI 17 mL',
    infusionTime: 'Contínuo',
    notes: '270 mg de Piridostigmina VO equivale a 4,1 mg de Neostigmina SC',
    category: 'Outros'
  },
  {
    name: 'Octreotida',
    dose: '300 a 900 mcg/dia',
    dilution: 'SF 0,9% 5-100 mL',
    infusionTime: 'Bolus (5 mL) ou Contínuo',
    notes: '',
    category: 'Outros'
  },
  {
    name: 'Olanzapina',
    dose: '5 a 20 mg de 8/8h ou 12/12h',
    dilution: 'SF 0,9% 10-50 mL',
    infusionTime: '10 min ou Contínuo',
    notes: '',
    category: 'Psicotrópico'
  },
  {
    name: 'Omeprazol',
    dose: '40 mg/dia',
    dilution: 'SF 100 mL',
    infusionTime: '4 horas',
    notes: 'Pode causar dor e irritação local',
    category: 'Outros'
  },
  {
    name: 'Ondansetrona',
    dose: '8 a 32 mg/dia',
    dilution: 'SF 0,9% 30 mL',
    infusionTime: '30 min',
    notes: '',
    category: 'Outros'
  },
  {
    name: 'Oxicodona',
    dose: '3 a 192 mg/dia',
    dilution: 'SF 0,9% (20mg/10mL)',
    infusionTime: 'Contínuo',
    notes: 'Taxa de conversão de Morfina oral para Oxicodona SC é 1,5:1',
    category: 'Psicotrópico'
  },
  {
    name: 'Pamidronato',
    dose: '90 mg/dia',
    dilution: 'SF 0,9% 500 mL',
    infusionTime: 'Contínuo',
    notes: 'Administrar na área abdominal devido a melhor tolerância',
    category: 'Outros'
  },
  {
    name: 'Sulfato de Magnésio',
    dose: '10 mL',
    dilution: 'Diluir em 500 mL de SF 0,9%',
    infusionTime: '8 a 12 horas ou Contínuo',
    notes: 'Administrar preferencialmente na região do abdômen',
    category: 'Eletrólito'
  },
  {
    name: 'Teicoplanina',
    dose: '9.4 mg/kg/12h',
    dilution: 'SF 0,9% 50 mL',
    infusionTime: '30 min',
    notes: '',
    category: 'Antibiótico'
  },
  {
    name: 'Tobramicina',
    dose: '80 mg/dia',
    dilution: 'SF 50 mL',
    infusionTime: '20 min',
    notes: '',
    category: 'Antibiótico'
  },
  {
    name: 'Tramadol',
    dose: '100 a 600 mg/dia',
    dilution: 'SF 0,9% 20-100 mL',
    infusionTime: '10 min ou Contínuo',
    notes: '',
    category: 'Psicotrópico'
  },
  {
    name: 'Valproato de sódio',
    dose: '600 a 2500 mg/dia',
    dilution: 'AI ou SF 0,9% 50 a 100 mL',
    infusionTime: 'Contínuo',
    notes: 'Taxa de conversão oral para SC é 1:1',
    category: 'Psicotrópico'
  }
];
