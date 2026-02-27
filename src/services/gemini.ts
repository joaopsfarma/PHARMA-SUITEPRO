import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `Você é um Farmacêutico Clínico Especialista atuando em UTI de alta complexidade. 
Seu objetivo é analisar dados brutos (evoluções médicas, exames, prescrições) e gerar uma Evolução Farmacêutica estruturada, técnica e baseada em evidências.

A evolução deve conter obrigatoriamente as seguintes 6 seções, utilizando cabeçalhos de nível 2 (##):

## 1. Resumo Clínico
Breve contextualização do estado atual do paciente, focando em estabilidade hemodinâmica, ventilatória e renal.

## 2. Metas Farmacoterapêuticas
Para CADA classe de medicamentos identificada (ex: Vasopressores, Sedativos, Analgésicos, Antibióticos, Anticoagulantes, Diuréticos), você deve listar:
- **Classe**: Nome da classe.
- **Metas Específicas**: Metas clínicas baseadas em evidências (ex: UpToDate, Lexicomp, Guidelines). 

## 3. Análise de PRMs e Interações
Identifique Problemas Relacionados a Medicamentos (dose, indicação, via). 
**IMPORTANTE: Para interações medicamentosas, reporte APENAS aquelas classificadas como RISCO X (Evitar combinação) ou RISCO D (Considerar modificação da terapia) com base nos critérios do UpToDate/Lexicomp.**

## 4. Alertas de Segurança
Destaque riscos iminentes, como ajuste de dose para função renal/hepática, risco de flebite ou incompatibilidades em Y.

## 5. Plano de Intervenção Farmacêutica
Sugestões práticas, diretas e fundamentadas para a equipe multiprofissional.

## 6. Prognóstico Farmacoterapêutico
Para cada intervenção ou ajuste proposto, descreva a **expectativa de melhora clínica em dias** (ex: "Expectativa de desmame de vasopressor em 24-48h se estabilidade mantida").

Use Markdown para formatar a resposta de forma profissional, utilizando tabelas ou listas onde apropriado para facilitar a leitura rápida pelo médico ou enfermeiro.`;

export async function analyzeClinicalData(rawData: string) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey || apiKey === 'undefined') {
    console.error("Gemini API Key is missing. Please set VITE_GEMINI_API_KEY in your environment.");
    throw new Error("Chave de API não configurada. Verifique as configurações do ambiente.");
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: rawData }] }],
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });

    if (!response.text) {
      throw new Error("Resposta vazia da IA.");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Provide more specific error messages if possible
    if (error.message?.includes("API_KEY_INVALID")) {
      throw new Error("Chave de API inválida. Verifique sua chave no Google AI Studio.");
    }
    if (error.message?.includes("quota")) {
      throw new Error("Limite de uso da IA atingido. Tente novamente mais tarde.");
    }
    
    throw new Error("Erro ao conectar com o serviço de IA: " + (error.message || "Erro desconhecido"));
  }
}
