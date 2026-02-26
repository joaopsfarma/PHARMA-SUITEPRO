import React, { useState, useEffect } from 'react';
import { ShieldAlert, User, Calendar, Activity, Info, AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

type Sex = 'Masculino' | 'Feminino';

export default function RiskScoreCalculator() {
  // Patient Data
  const [sex, setSex] = useState<Sex>('Masculino');
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [creatinine, setCreatinine] = useState<string>('');
  const [applicationDate, setApplicationDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Criteria State
  const [medCount, setMedCount] = useState<number>(0); // 0: 0-5, 1: 6-10, 2: 11-15, 3: >15
  const [evMedCount, setEvMedCount] = useState<number>(0); // 0: 0, 1: 1-2, 2: >2
  const [highRiskMedCount, setHighRiskMedCount] = useState<number>(0); // 0: 0, 1: 1-2, 2: >2
  const [devicesCount, setDevicesCount] = useState<number>(0); // 0: 0, 1: 1, 2: >1
  const [lowTherapeuticIndexCount, setLowTherapeuticIndexCount] = useState<number>(0); // 0: 0, 1: 1-2, 2: >2
  const [isSpecialCondition, setIsSpecialCondition] = useState<boolean>(false); // Transplantado, neutropênico ou HIV+
  const [isHighRiskOverride, setIsHighRiskOverride] = useState<boolean>(false); // QT EV, Rota 1 IAM
  const [isPalliativeCare, setIsPalliativeCare] = useState<boolean>(false);
  const [hadAdverseReaction, setHadAdverseReaction] = useState<boolean>(false);
  const [tevProtocol, setTevProtocol] = useState<number>(0); // 0: Adequado, 1: Inadequado, 2: Não prescrito

  // Calculated Values
  const [clCr, setClCr] = useState<number | null>(null);
  const [agePoints, setAgePoints] = useState<number>(0);
  const [renalPoints, setRenalPoints] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [riskLevel, setRiskLevel] = useState<'BAIXO' | 'MODERADO' | 'ALTO'>('BAIXO');
  const [reapplyIn, setReapplyIn] = useState<number>(7);

  useEffect(() => {
    // 1. Calculate ClCr (Cockcroft-Gault)
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const crNum = parseFloat(creatinine);

    if (ageNum && weightNum && crNum) {
      let calculatedClCr = ((140 - ageNum) * weightNum) / (crNum * 72);
      if (sex === 'Feminino') calculatedClCr *= 0.85;
      setClCr(calculatedClCr);

      // Renal Points
      setRenalPoints(calculatedClCr < 50 ? 1 : 0);
    } else {
      setClCr(null);
      setRenalPoints(0);
    }

    // 2. Age Points
    if (ageNum !== undefined && !isNaN(ageNum)) {
      if (ageNum <= 2) setAgePoints(2);
      else if (ageNum < 15) setAgePoints(1);
      else if (ageNum <= 65) setAgePoints(0);
      else if (ageNum <= 79) setAgePoints(1);
      else setAgePoints(2);
    } else {
      setAgePoints(0);
    }
  }, [age, weight, creatinine, sex]);

  useEffect(() => {
    // 3. Total Score
    const score = 
      medCount + 
      evMedCount + 
      highRiskMedCount + 
      devicesCount + 
      lowTherapeuticIndexCount + 
      (isSpecialCondition ? 1 : 0) + 
      (isHighRiskOverride ? 1 : 0) + // Adding a point for high risk override as well, but it will also force ALTO
      (hadAdverseReaction ? 1 : 0) + 
      tevProtocol + 
      agePoints + 
      renalPoints;
    
    setTotalScore(score);

    // 4. Risk Level & Reapplication (with Overrides)
    if (isPalliativeCare) {
      setRiskLevel('BAIXO');
      setReapplyIn(7);
    } else if (score >= 12 || isHighRiskOverride || (isSpecialCondition && score >= 8)) {
      // The note says "SCORE >= 12; transplante... = ALTO Risco"
      setRiskLevel('ALTO');
      setReapplyIn(1);
    } else if (score >= 5) {
      setRiskLevel('MODERADO');
      setReapplyIn(4);
    } else {
      setRiskLevel('BAIXO');
      setReapplyIn(7);
    }
  }, [medCount, evMedCount, highRiskMedCount, devicesCount, lowTherapeuticIndexCount, isSpecialCondition, isHighRiskOverride, isPalliativeCare, hadAdverseReaction, tevProtocol, agePoints, renalPoints]);

  const resetForm = () => {
    setAge('');
    setWeight('');
    setCreatinine('');
    setMedCount(0);
    setEvMedCount(0);
    setHighRiskMedCount(0);
    setDevicesCount(0);
    setLowTherapeuticIndexCount(0);
    setIsSpecialCondition(false);
    setIsHighRiskOverride(false);
    setIsPalliativeCare(false);
    setHadAdverseReaction(false);
    setTevProtocol(0);
  };

  const getRiskColor = () => {
    if (riskLevel === 'ALTO') return 'text-red-600 bg-red-50 border-red-100';
    if (riskLevel === 'MODERADO') return 'text-amber-600 bg-amber-50 border-amber-100';
    return 'text-emerald-600 bg-emerald-50 border-emerald-100';
  };

  const getReapplyDate = () => {
    if (!applicationDate) return '---';
    const date = new Date(applicationDate);
    date.setDate(date.getDate() + reapplyIn);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Inputs */}
      <div className="lg:col-span-8 space-y-8">
        {/* Patient Data Card */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <User size={20} />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-slate-900 tracking-tight">Dados do Paciente</h2>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Informações Base para Cálculo</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Sexo</label>
              <select 
                value={sex}
                onChange={(e) => setSex(e.target.value as Sex)}
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              >
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Idade (Anos)</label>
              <input 
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Ex: 65"
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Peso (kg)</label>
              <input 
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ex: 70"
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Cr (mg/dL)</label>
              <input 
                type="number"
                step="0.1"
                value={creatinine}
                onChange={(e) => setCreatinine(e.target.value)}
                placeholder="Ex: 1.2"
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
          </div>

          {clCr !== null && (
            <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity size={18} className="text-blue-600" />
                <span className="text-sm font-bold text-blue-900">ClCr Estimado (Cockcroft-Gault)</span>
              </div>
              <span className="text-xl font-black text-blue-600 tracking-tighter">{clCr.toFixed(1)} <span className="text-xs">mL/min</span></span>
            </div>
          )}
        </div>

        {/* Criteria Table */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
          <div className="p-8 border-b border-slate-50 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h2 className="font-display font-black text-xl text-slate-900 tracking-tight">Critérios de Avaliação</h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pontuação Baseada em Riscos Clínicos</p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-50">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 hover:bg-slate-50/50 transition-colors">
              <div className="md:col-span-7 space-y-1">
                <h4 className="text-sm font-bold text-slate-800">Quantidade de Medicamentos Prescritos*</h4>
                <p className="text-[10px] text-slate-400 font-medium">*Excluir: pomadas, cremes, soros, colírios, ACM/SN</p>
              </div>
              <div className="md:col-span-3 mt-4 md:mt-0">
                <select 
                  value={medCount}
                  onChange={(e) => setMedCount(parseInt(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0}>0 a 5 medicamentos</option>
                  <option value={1}>6 a 10 medicamentos</option>
                  <option value={2}>11 a 15 medicamentos</option>
                  <option value={3}>&gt; 15 medicamentos</option>
                </select>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-lg font-black text-slate-300">{medCount} pts</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 hover:bg-slate-50/50 transition-colors">
              <div className="md:col-span-7 space-y-1">
                <h4 className="text-sm font-bold text-slate-800">Medicamentos de Uso EV*</h4>
                <p className="text-[10px] text-slate-400 font-medium">*Excluir soros de manutenção</p>
              </div>
              <div className="md:col-span-3 mt-4 md:mt-0">
                <select 
                  value={evMedCount}
                  onChange={(e) => setEvMedCount(parseInt(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0}>0 medicamentos</option>
                  <option value={1}>1 a 2 medicamentos</option>
                  <option value={2}>&gt; 2 medicamentos</option>
                </select>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-lg font-black text-slate-300">{evMedCount} pts</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 hover:bg-slate-50/50 transition-colors">
              <div className="md:col-span-7 space-y-1">
                <h4 className="text-sm font-bold text-slate-800">Medicamentos de Alto Risco</h4>
                <p className="text-[10px] text-slate-400 font-medium">Insulinas, anticoagulantes, opioides, etc.</p>
              </div>
              <div className="md:col-span-3 mt-4 md:mt-0">
                <select 
                  value={highRiskMedCount}
                  onChange={(e) => setHighRiskMedCount(parseInt(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0}>0 medicamentos</option>
                  <option value={1}>1 a 2 medicamentos</option>
                  <option value={2}>&gt; 2 medicamentos</option>
                </select>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-lg font-black text-slate-300">{highRiskMedCount} pts</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 hover:bg-slate-50/50 transition-colors">
              <div className="md:col-span-7 space-y-1">
                <h4 className="text-sm font-bold text-slate-800">Dispositivos Invasivos</h4>
                <p className="text-[10px] text-slate-400 font-medium">Sondas, cateteres centrais, dreno, etc.</p>
              </div>
              <div className="md:col-span-3 mt-4 md:mt-0">
                <select 
                  value={devicesCount}
                  onChange={(e) => setDevicesCount(parseInt(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0}>0 dispositivos</option>
                  <option value={1}>1 dispositivo</option>
                  <option value={2}>&gt; 1 dispositivo</option>
                </select>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-lg font-black text-slate-300">{devicesCount} pts</span>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 hover:bg-slate-50/50 transition-colors">
              <div className="md:col-span-7 space-y-1">
                <h4 className="text-sm font-bold text-slate-800">Medicamentos de Baixo Índice Terapêutico**</h4>
                <p className="text-[10px] text-slate-400 font-medium">**Vancomicina, Fenitoína, Digoxina, etc.</p>
              </div>
              <div className="md:col-span-3 mt-4 md:mt-0">
                <select 
                  value={lowTherapeuticIndexCount}
                  onChange={(e) => setLowTherapeuticIndexCount(parseInt(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0}>0 medicamentos</option>
                  <option value={1}>1 a 2 medicamentos</option>
                  <option value={2}>&gt; 2 medicamentos</option>
                </select>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-lg font-black text-slate-300">{lowTherapeuticIndexCount} pts</span>
              </div>
            </div>

            {/* Row 6: Boolean Conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-700">Transplantado, Neutropênico ou HIV+?</h4>
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Condição Especial</p>
                </div>
                <button 
                  onClick={() => setIsSpecialCondition(!isSpecialCondition)}
                  className={`w-12 h-6 rounded-full transition-all relative ${isSpecialCondition ? 'bg-blue-600' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isSpecialCondition ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-700">QT EV ou Rota 1 IAM?</h4>
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Alto Risco Imediato</p>
                </div>
                <button 
                  onClick={() => setIsHighRiskOverride(!isHighRiskOverride)}
                  className={`w-12 h-6 rounded-full transition-all relative ${isHighRiskOverride ? 'bg-blue-600' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isHighRiskOverride ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-700">Cuidados Paliativos?</h4>
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Acompanhamento Diferenciado</p>
                </div>
                <button 
                  onClick={() => setIsPalliativeCare(!isPalliativeCare)}
                  className={`w-12 h-6 rounded-full transition-all relative ${isPalliativeCare ? 'bg-blue-600' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isPalliativeCare ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-700">Reação Adversa com Med. Prescrito?</h4>
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Segurança do Paciente</p>
                </div>
                <button 
                  onClick={() => setHadAdverseReaction(!hadAdverseReaction)}
                  className={`w-12 h-6 rounded-full transition-all relative ${hadAdverseReaction ? 'bg-blue-600' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${hadAdverseReaction ? 'left-7' : 'left-1'}`} />
                </button>
              </div>
            </div>

            {/* Row 7: TEV Protocol */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center p-6 hover:bg-slate-50/50 transition-colors">
              <div className="md:col-span-7 space-y-1">
                <h4 className="text-sm font-bold text-slate-800">Protocolo de TEV</h4>
                <p className="text-[10px] text-slate-400 font-medium">Adequação da profilaxia de tromboembolismo</p>
              </div>
              <div className="md:col-span-3 mt-4 md:mt-0">
                <select 
                  value={tevProtocol}
                  onChange={(e) => setTevProtocol(parseInt(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={0}>Adequado</option>
                  <option value={1}>Inadequado</option>
                  <option value={2}>Não prescrito</option>
                </select>
              </div>
              <div className="md:col-span-2 text-right">
                <span className="text-lg font-black text-slate-300">{tevProtocol} pts</span>
              </div>
            </div>

            {/* Automatic Points Info */}
            <div className="p-6 bg-slate-900 text-white">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">Pontos por Idade</span>
                    <p className="text-lg font-black tracking-tighter">{agePoints} <span className="text-[10px] text-slate-400 uppercase">Pontos</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                    <Activity size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">Pontos Renais (ClCr &lt; 50)</span>
                    <p className="text-lg font-black tracking-tighter">{renalPoints} <span className="text-[10px] text-slate-400 uppercase">Pontos</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Results */}
      <div className="lg:col-span-4 space-y-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 sticky top-28">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <Activity size={20} />
              </div>
              <h2 className="font-display font-black text-xl text-slate-900 tracking-tight">Resultado</h2>
            </div>
            <button 
              onClick={resetForm}
              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              title="Limpar Campos"
            >
              <RotateCcw size={18} />
            </button>
          </div>

          <div className="space-y-6">
            <div className="text-center p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Score Total</span>
              <div className="text-6xl font-black text-slate-900 tracking-tighter mb-2">{totalScore}</div>
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${getRiskColor()}`}>
                {riskLevel === 'ALTO' && <AlertTriangle size={12} />}
                {riskLevel === 'BAIXO' && <CheckCircle2 size={12} />}
                {riskLevel} RISCO
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Data de Aplicação</span>
                  <input 
                    type="date"
                    value={applicationDate}
                    onChange={(e) => setApplicationDate(e.target.value)}
                    className="bg-transparent border-none text-xs font-bold text-slate-700 focus:ring-0 p-0 text-right"
                  />
                </div>
                <div className="h-px bg-slate-200 mb-4" />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Reaplicar em</span>
                  <div className="text-right">
                    <p className="text-sm font-black text-slate-900">{getReapplyDate()}</p>
                    <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">Em {reapplyIn} dias</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Info size={18} className="text-blue-200" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Diretriz de Acompanhamento</span>
                </div>
                <p className="text-xs font-medium leading-relaxed opacity-90">
                  {riskLevel === 'ALTO' && "Reaplicação de score e evolução farmacêutica diária obrigatória."}
                  {riskLevel === 'MODERADO' && "Reaplicação de score e evolução farmacêutica a cada 4 dias."}
                  {riskLevel === 'BAIXO' && "Reaplicação de score e evolução farmacêutica a cada 7 dias."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
