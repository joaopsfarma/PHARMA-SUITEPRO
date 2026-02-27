export interface HighAlertMed {
  name: string;
  presentation: string;
  reconstitution?: string;
  dilution: string;
  stability: string;
  administration: string;
  maxConc: string;
  notes: string;
}

export const HIGH_ALERT_MEDS: HighAlertMed[] = [
  {
    name: 'Alteplase',
    presentation: '50 mg pó liófilo',
    reconstitution: '50 mL AD (1 mg/mL)',
    dilution: 'SF ou SG 5% (0,5 mg/mL)',
    stability: '8h TA ou 24h Refri',
    administration: '10-15 mg bolo (1-2 min), restante conforme protocolo',
    maxConc: '1 mg/mL',
    notes: 'Não administrar IM. Crianças: Trombose arterial 0,1-0,6 mg/kg/h por 6h.'
  },
  {
    name: 'Amiodarona',
    presentation: '50 mg/mL amp 3 mL',
    dilution: 'SG 5% exclusivamente',
    stability: '24h TA (não usar PVC)',
    administration: 'Ataque 5 mg/kg (max 300 mg). Manutenção conforme protocolo.',
    maxConc: 'Periférico: 2 mg/mL; Central: 25 mg/mL',
    notes: 'Não administrar IM. Risco de flebite em acesso periférico.'
  },
  {
    name: 'Anfotericina B Desoxicolato',
    presentation: '50 mg pó liófilo',
    reconstitution: '10 mL AD',
    dilution: 'SG 5% (max 0,1 mg/mL)',
    stability: '24h TA ou Refri',
    administration: 'Infusão 2-6h',
    maxConc: '0,1 mg/mL (0,5 mg/mL se restrição hídrica)',
    notes: 'Não administrar IM. Proteger da luz.'
  },
  {
    name: 'Anfotericina B Lipossomal',
    presentation: '50 mg pó liófilo',
    reconstitution: '12 mL AD (4 mg/mL)',
    dilution: 'SG 5% (0,2 a 2 mg/mL)',
    stability: '24h Refri. Usar em 6h após diluição.',
    administration: 'Acima de 2h. Vel: 2,5 mg/kg/h.',
    maxConc: '2 mg/mL',
    notes: 'Sempre utilizar filtro no momento da transferência.'
  },
  {
    name: 'Anfotericina B Complexo Lipídico',
    presentation: '100 mg Fr/amp',
    dilution: 'SG 5% (1 mg/mL)',
    stability: '48h Refri + 6h TA',
    administration: 'Taxa de 2,5 mg/kg/h.',
    maxConc: '2,5 mg/kg/h',
    notes: 'Sempre utilizar filtro.'
  },
  {
    name: 'Dextrocetamina',
    presentation: '50 mg/mL amp 2 mL / 10 mL',
    dilution: 'SF ou SG 5% (1 a 2 mg/mL)',
    stability: '24h TA (SF)',
    administration: 'Bolo 1 min ou 0,5 mg/kg/min. Manutenção: 0,1-0,5 mg/min.',
    maxConc: '2 mg/mL (restrição hídrica)',
    notes: 'Antídoto para convulsões: Benzodiazepínicos.'
  },
  {
    name: 'KCl 19,1%',
    presentation: '19,1% amp 10 mL (2,56 mEq/mL)',
    dilution: 'SF, SG 5% ou AD',
    stability: '24h TA',
    administration: 'Adultos: 5-10 mEq/h. Crianças: 1 mEq/kg por 2h.',
    maxConc: 'Periférico: 8 mEq/100mL; Central: 20 mEq/100mL',
    notes: 'Infusão rápida é cardiotóxica. Nunca administrar em bolus.'
  },
  {
    name: 'NaCl 20%',
    presentation: '20% amp 20 mL (3,4 mEq/mL)',
    dilution: 'AD, SF ou SG',
    stability: '24h TA',
    administration: 'Velocidade máxima NaCl 10%: 51 mL/h.',
    maxConc: '10%',
    notes: 'Não administrar IM.'
  },
  {
    name: 'Deslanósido',
    presentation: '0,4 mg amp 2 mL',
    dilution: 'Não recomendado diluir',
    stability: 'Uso imediato',
    administration: 'Adultos: 0,4-0,8 mg inicial. Crianças: IM ou IV lento.',
    maxConc: 'Puro',
    notes: 'Não associar a cálcio EV.'
  },
  {
    name: 'Dexmedetomidina',
    presentation: '100 mcg/mL amp 2 mL',
    dilution: 'SF, SG 5%, RL ou Manitol',
    stability: '24h Refri',
    administration: 'Adultos: 1 mcg/kg (10 min). Manutenção: 0,2-0,7 mcg/kg/h.',
    maxConc: '4 mcg/mL',
    notes: 'Nunca utilizar em bolus.'
  },
  {
    name: 'Dobutamina',
    presentation: '12,5 mg/mL amp 20 mL',
    dilution: 'SF ou SG 5%',
    stability: '24h Refri',
    administration: 'Manutenção: 2 a 20 mcg/kg/min. Máx: 40 mcg/kg/min.',
    maxConc: '4000 mcg/mL',
    notes: 'Administrar em veia de grande calibre.'
  },
  {
    name: 'Dopamina',
    presentation: '5 mg/mL amp 10 mL',
    dilution: 'SF ou SG 5% (0,8 mg/mL)',
    stability: '24h TA',
    administration: 'Início: 2 a 5 mcg/kg/min. Máx: 50 mcg/kg/min.',
    maxConc: '0,8 mg/mL',
    notes: 'Somente diluído para infusão.'
  },
  {
    name: 'Enoxaparina',
    presentation: 'Seringas preenchidas (20 a 80 mg)',
    dilution: 'Não diluir',
    stability: 'Uso imediato',
    administration: 'Exclusivamente SC. Adultos: 1 mg/kg cada 12h.',
    maxConc: 'Pura',
    notes: 'Não expulsar bolhas de ar da seringa.'
  },
  {
    name: 'Epinefrina',
    presentation: '1 mg/mL amp 1 mL',
    dilution: 'SF ou SG 5% (4 a 16 mcg/mL)',
    stability: '24h Refri',
    administration: 'Infusão: 0,1 a 0,5 mcg/kg/min.',
    maxConc: '16 mcg/mL',
    notes: 'Incompatível com soluções alcalinas.'
  },
  {
    name: 'Fentanila',
    presentation: '50 mcg/mL amp 2, 5 ou 10 mL',
    dilution: 'SF ou SG 5% (até 2 mcg/mL)',
    stability: '24h TA',
    administration: 'Infusão contínua: 0,7 a 10 mcg/kg/h.',
    maxConc: '10 mcg/mL (usual)',
    notes: 'Antídoto: Naloxona.'
  },
  {
    name: 'Fosfato de Potássio',
    presentation: '2 mEq/mL de K + 1,1 mmol/mL de P',
    dilution: 'SF ou SG 5%',
    stability: '24h TA',
    administration: 'Taxa máx central: 15 mmol P/h. Pediátrico: 0,3-0,5 mEq K/kg/h.',
    maxConc: 'Central: 10 mEq K/h',
    notes: 'Monitoramento de ECG recomendado.'
  },
  {
    name: 'Glicose 50%',
    presentation: 'Ampola 10 mL',
    dilution: 'AD ou SF (max 12% periférico)',
    stability: 'Uso imediato',
    administration: 'Bolo: max 200 mg/kg em 1 min. Contínuo: 4,5-15 mg/kg/min.',
    maxConc: '25% (Acesso Central)',
    notes: 'Medicamento VESICANTE.'
  },
  {
    name: 'Heparina Sódica',
    presentation: '5000 UI/mL fr/amp 5 mL',
    dilution: 'SF ou SG 5% (100 UI/mL)',
    stability: '24h TA',
    administration: 'Conforme protocolo de anticoagulação plena.',
    maxConc: '100 UI/mL',
    notes: 'Antídoto: Protamina.'
  },
  {
    name: 'Insulina Humana Regular',
    presentation: '100 UI/mL fr 10 mL',
    dilution: 'SF (0,1 a 1 UI/mL)',
    stability: '24h Refri ou 15-30 TA',
    administration: 'SC, IV ou IM conforme protocolo glicêmico.',
    maxConc: 'Pura (SC)',
    notes: 'Única insulina que pode ser IV.'
  },
  {
    name: 'Lidocaina 1% ou 2%',
    presentation: '10 ou 20 mg/mL Fr/amp',
    dilution: 'SF ou SG 5% (1-2 mg/mL)',
    stability: '24h Refri',
    administration: 'Bolo: 1-1,5 mg/kg. Manutenção: 1-4 mg/min.',
    maxConc: '8 mg/mL (restrição hídrica)',
    notes: 'Máximo total: 300 mg.'
  },
  {
    name: 'Metoprolol',
    presentation: '1 mg/mL amp 5 mL',
    dilution: 'Pode ser usado sem diluição',
    stability: '12h TA',
    administration: 'Adultos: 3-15 mg EV bolo (3-5 min).',
    maxConc: '1 mg/mL',
    notes: 'Antídoto: Glucagon.'
  },
  {
    name: 'Midazolam',
    presentation: '1 ou 5 mg/mL amp',
    dilution: 'SF, SG 5% ou RL (0,5 mg/mL)',
    stability: '24h TA',
    administration: 'Sedação UTI: Bolo 0,01-0,05 mg/kg. Contínuo: 0,02-0,1 mg/kg/h.',
    maxConc: '0,5 mg/mL',
    notes: 'Antídoto: Flumazenil.'
  },
  {
    name: 'Milrinona',
    presentation: '1 mg/mL amp 10 mL',
    dilution: 'SF ou SG 5% (0,2 mg/mL)',
    stability: '24h TA',
    administration: 'Inicial: 0,5 mg/kg. Manutenção: 0,375-0,75 mcg/kg/min.',
    maxConc: '0,2 mg/mL',
    notes: 'Não recomendado infusão em bolo.'
  },
  {
    name: 'Morfina',
    presentation: '0,1, 1 ou 10 mg/mL amp',
    dilution: 'AD ou SF (1 a 2 mg/mL para bolo)',
    stability: '24h Refri',
    administration: 'Infusão Adulto: 0,8-10 mg/h. Pediátrico: 0,1-1 mg/mL.',
    maxConc: '80 mg/h (EV)',
    notes: 'Bolo requer diluição prévia.'
  },
  {
    name: 'Nitroglicerina',
    presentation: '5 mg/mL amp 5 mL',
    dilution: 'SF ou SG 5% (50 a 100 mcg/mL)',
    stability: '24h TA (frasco vidro)',
    administration: 'Início: 5 mcg/min. Titular a cada 10 min.',
    maxConc: '400 mcg/mL',
    notes: 'Usar frasco de vidro ou polietileno.'
  },
  {
    name: 'Nitroprussiato',
    presentation: '50 mg amp 2 mL',
    dilution: 'SG 5% (50 a 200 mcg/mL)',
    stability: '24h TA (protegido da luz)',
    administration: 'Início: 0,3 mcg/kg/min. Usual: 3 mcg/kg/min.',
    maxConc: '1 mg/mL (restrição hídrica)',
    notes: 'Solução deve ser fotoprotegida.'
  },
  {
    name: 'Norepinefrina',
    presentation: '1 mg/mL amp 4 mL',
    dilution: 'SG 5% (preferencial) ou SF',
    stability: '24h TA',
    administration: 'Crianças: 0,05-0,1 mcg/kg/min (inicial).',
    maxConc: '4-16 mcg/mL',
    notes: 'Não administrar em via com soluções alcalinas.'
  },
  {
    name: 'Oxitocina',
    presentation: '5 UI/mL amp 1 mL',
    dilution: 'SF, RL ou SG 5% (10 mUI/mL)',
    stability: 'Uso imediato',
    administration: 'Indução parto: 0,001-0,002 UI/min.',
    maxConc: '30 UI/12h',
    notes: '1 unidade = 2 a 2,2 mcg oxitocina pura.'
  },
  {
    name: 'Pancurônio',
    presentation: '2 mg/mL amp 2 mL',
    dilution: 'SF ou SG 5%',
    stability: '24h Refri',
    administration: 'Neonatos: 0,1 mg/kg. Adultos: 0,04-0,1 mg/kg.',
    maxConc: '25 mg/mL (Pediatria)',
    notes: 'Antídoto: Sugamadex.'
  },
  {
    name: 'Prometazina',
    presentation: '25 mg/mL amp 2 mL',
    dilution: 'SF (2,5 mg/mL)',
    stability: '24h TA (protegido da luz)',
    administration: 'Adultos: 12,5-25 mg IM ou IV lento.',
    maxConc: '25 mg/mL',
    notes: 'Administração EV em veia calibrosa.'
  },
  {
    name: 'Propofol',
    presentation: '1% (10 mg/mL) amp 20 mL',
    dilution: 'SG 5% (se necessário, min 2 mg/mL)',
    stability: '6h após diluição, 12h sem diluição',
    administration: 'Sedação UTI: 0,3-3 mg/kg/h.',
    maxConc: '10 mg/mL (puro)',
    notes: 'Não administrar IM. Trocar equipo a cada 12h.'
  },
  {
    name: 'Rocurônio',
    presentation: '10 mg/mL fr/amp 5 mL',
    dilution: 'SF ou SG 5%',
    stability: '24h TA',
    administration: 'Bolo: 0,6-1,2 mg/kg. Manutenção: 0,1-0,2 mg/kg.',
    maxConc: '10 mg/mL',
    notes: 'Antídoto: Sugamadex.'
  },
  {
    name: 'Sulfato de Magnésio 10%',
    presentation: '10% (0,8 mEq/mL) amp 10 mL',
    dilution: 'SF ou SG 5% (min 50 mL)',
    stability: '24h TA',
    administration: 'Adultos: 1-5 g EV (3h). Pediátrico: 25-50 mg/kg.',
    maxConc: '100 mg/mL',
    notes: 'Ter sal de cálcio disponível para toxicidade.'
  },
  {
    name: 'Suxametônio',
    presentation: '100 mg pó liófilo',
    reconstitution: 'Diluente próprio (60 mL)',
    dilution: 'SF ou SG 5% (1-2 mg/mL)',
    stability: '24h TA ou Refri',
    administration: 'Adultos: 1-1,5 mg/kg EV. Pediátrico: 1-2 mg/kg EV.',
    maxConc: '2 mg/mL',
    notes: 'Antídoto: Dantrolene.'
  },
  {
    name: 'Tiopental',
    presentation: '1000 mg fr/amp',
    reconstitution: 'AD (25 mg/mL)',
    dilution: 'SF ou SG 5% (0,2% a 0,4%)',
    stability: '24h Refri',
    administration: 'Indução: 2-5 mg/kg. Convulsões: 70-250 mg/dose.',
    maxConc: '2 mg/mL (contínuo)',
    notes: 'Teste com 25-75 mg recomendado.'
  },
  {
    name: 'Tirofiban',
    presentation: '0,25 mg/mL fr/amp 50 mL',
    dilution: 'SF ou SG 5% (50 mcg/mL)',
    stability: '24h TA',
    administration: 'Bolo: 10 mcg/kg (3 min). Manutenção: 0,15 mcg/kg/min.',
    maxConc: '50 mcg/mL',
    notes: 'Ajustar dose se ClCr < 30 mL/min.'
  },
  {
    name: 'Tramadol',
    presentation: '100 mg amp 2 mL',
    dilution: 'SF ou SG 5% (min 100 mL)',
    stability: 'Uso imediato',
    administration: 'IV direto: 1 mL/min.',
    maxConc: '100 mg/100mL',
    notes: 'Pode ser EV, IM e SC.'
  },
  {
    name: 'Vasopressina',
    presentation: '20 U/mL amp 1 mL',
    dilution: 'SF ou SG 5% (0,1 U/mL)',
    stability: 'Uso imediato',
    administration: 'Hemorragia GI: 0,2 U/min. Choque séptico: 0,01-0,04 U/min.',
    maxConc: '1 U/mL (restrição hídrica)',
    notes: 'Doses > 0,05 U/min: risco de parada cardíaca.'
  }
];
