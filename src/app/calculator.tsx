'use client';

import { useState, useEffect } from 'react';

interface CalculatorState {
  initialAmount: string;
  startYear: number;
  endYear: number;
  language: string;
}

// CPI data: approximate annual inflation rates (1960-2026)
const CPI_DATA: Record<number, number> = {
  1960: 1.7, 1961: 1.0, 1962: 1.0, 1963: 1.3, 1964: 1.3, 1965: 1.6, 1966: 2.9,
  1967: 3.0, 1968: 4.7, 1969: 5.5, 1970: 5.7, 1971: 4.4, 1972: 3.3, 1973: 6.2,
  1974: 11.0, 1975: 9.1, 1976: 5.8, 1977: 6.5, 1978: 7.7, 1979: 11.3, 1980: 13.5,
  1981: 10.3, 1982: 6.1, 1983: 3.2, 1984: 4.3, 1985: 3.6, 1986: 1.9, 1987: 3.7,
  1988: 4.1, 1989: 4.8, 1990: 5.4, 1991: 4.2, 1992: 3.0, 1993: 3.0, 1994: 2.6,
  1995: 2.8, 1996: 3.0, 1997: 2.3, 1998: 1.6, 1999: 2.2, 2000: 3.4, 2001: 2.7,
  2002: 1.6, 2003: 2.7, 2004: 2.7, 2005: 3.4, 2006: 3.2, 2007: 2.8, 2008: 3.8,
  2009: -0.4, 2010: 1.6, 2011: 3.0, 2012: 2.1, 2013: 1.5, 2014: 1.6, 2015: 0.7,
  2016: 1.3, 2017: 2.1, 2018: 2.4, 2019: 1.8, 2020: 1.2, 2021: 4.7, 2022: 8.0,
  2023: 4.1, 2024: 3.2, 2025: 2.9, 2026: 2.4,
};

const LANGUAGES = {
  en: {
    title: 'Inflation Calculator',
    description: 'Calculate how inflation affects purchasing power over time',
    initialAmount: 'Initial Amount ($)',
    startYear: 'Start Year',
    endYear: 'End Year',
    calculate: 'Calculate',
    results: 'Results',
    adjustedAmount: 'Adjusted Amount',
    purchasingPowerChange: 'Purchasing Power Change',
    averageInflation: 'Average Annual Inflation',
    cumulativeInflation: 'Cumulative Inflation Rate',
    comparison: 'What Could $X Buy?',
    in: 'in',
    could: 'could buy what',
    buys: 'buys today',
    lost: 'Purchasing Power Lost',
    selectLanguage: 'Select Language',
    faq: 'Frequently Asked Questions',
  },
  es: {
    title: 'Calculadora de Inflación',
    description: 'Calcula cómo afecta la inflación al poder adquisitivo a lo largo del tiempo',
    initialAmount: 'Cantidad Inicial ($)',
    startYear: 'Año Inicial',
    endYear: 'Año Final',
    calculate: 'Calcular',
    results: 'Resultados',
    adjustedAmount: 'Cantidad Ajustada',
    purchasingPowerChange: 'Cambio en el Poder Adquisitivo',
    averageInflation: 'Inflación Promedio Anual',
    cumulativeInflation: 'Tasa de Inflación Acumulada',
    comparison: '¿Qué Podría Comprar $X?',
    in: 'en',
    could: 'podría comprar lo que',
    buys: 'compra hoy',
    lost: 'Poder Adquisitivo Perdido',
    selectLanguage: 'Seleccionar Idioma',
    faq: 'Preguntas Frecuentes',
  },
  fr: {
    title: 'Calculatrice d\'Inflation',
    description: 'Calculez comment l\'inflation affecte le pouvoir d\'achat au fil du temps',
    initialAmount: 'Montant Initial ($)',
    startYear: 'Année de Début',
    endYear: 'Année de Fin',
    calculate: 'Calculer',
    results: 'Résultats',
    adjustedAmount: 'Montant Ajusté',
    purchasingPowerChange: 'Changement du Pouvoir d\'Achat',
    averageInflation: 'Inflation Annuelle Moyenne',
    cumulativeInflation: 'Taux d\'Inflation Cumulatif',
    comparison: 'Que Pourrait Acheter $X?',
    in: 'en',
    could: 'pourrait acheter ce que',
    buys: 'achète aujourd\'hui',
    lost: 'Pouvoir d\'Achat Perdu',
    selectLanguage: 'Sélectionner la Langue',
    faq: 'Questions Fréquemment Posées',
  },
  de: {
    title: 'Inflationsrechner',
    description: 'Berechnen Sie, wie die Inflation die Kaufkraft im Laufe der Zeit beeinflusst',
    initialAmount: 'Startbetrag ($)',
    startYear: 'Startjahr',
    endYear: 'Endjahr',
    calculate: 'Berechnen',
    results: 'Ergebnisse',
    adjustedAmount: 'Angepasster Betrag',
    purchasingPowerChange: 'Änderung der Kaufkraft',
    averageInflation: 'Durchschnittliche jährliche Inflation',
    cumulativeInflation: 'Kumulierte Inflationsrate',
    comparison: 'Was Könnte $X Kaufen?',
    in: 'in',
    could: 'könnte kaufen, was',
    buys: 'kauft heute',
    lost: 'Kaufkraft verloren',
    selectLanguage: 'Sprache Wählen',
    faq: 'Häufig Gestellte Fragen',
  },
  it: {
    title: 'Calcolatore di Inflazione',
    description: 'Calcola come l\'inflazione influisce sul potere d\'acquisto nel tempo',
    initialAmount: 'Importo Iniziale ($)',
    startYear: 'Anno Iniziale',
    endYear: 'Anno Finale',
    calculate: 'Calcola',
    results: 'Risultati',
    adjustedAmount: 'Importo Rettificato',
    purchasingPowerChange: 'Variazione del Potere d\'Acquisto',
    averageInflation: 'Inflazione Media Annuale',
    cumulativeInflation: 'Tasso di Inflazione Cumulativo',
    comparison: 'Cosa Potrebbe Comprare $X?',
    in: 'in',
    could: 'potrebbe comprare quello che',
    buys: 'compra oggi',
    lost: 'Potere d\'Acquisto Perduto',
    selectLanguage: 'Seleziona Lingua',
    faq: 'Domande Frequenti',
  },
  pt: {
    title: 'Calculadora de Inflação',
    description: 'Calcule como a inflação afeta o poder de compra ao longo do tempo',
    initialAmount: 'Valor Inicial ($)',
    startYear: 'Ano Inicial',
    endYear: 'Ano Final',
    calculate: 'Calcular',
    results: 'Resultados',
    adjustedAmount: 'Valor Ajustado',
    purchasingPowerChange: 'Mudança no Poder de Compra',
    averageInflation: 'Inflação Média Anual',
    cumulativeInflation: 'Taxa de Inflação Acumulada',
    comparison: 'O Que Poderia Comprar $X?',
    in: 'em',
    could: 'poderia comprar o que',
    buys: 'compra hoje',
    lost: 'Poder de Compra Perdido',
    selectLanguage: 'Selecionar Idioma',
    faq: 'Perguntas Frequentes',
  },
  ja: {
    title: 'インフレーション計算機',
    description: '時間とともにインフレーションが購買力に与える影響を計算します',
    initialAmount: '初期金額 ($)',
    startYear: '開始年',
    endYear: '終了年',
    calculate: '計算',
    results: '結果',
    adjustedAmount: '調整後の金額',
    purchasingPowerChange: '購買力の変化',
    averageInflation: '平均年間インフレーション',
    cumulativeInflation: '累積インフレーション率',
    comparison: '$Xは何を買えますか？',
    in: 'で',
    could: '購入できたもの',
    buys: '今日購入',
    lost: '失われた購買力',
    selectLanguage: '言語を選択',
    faq: 'よくある質問',
  },
  zh: {
    title: '通货膨胀计算器',
    description: '计算通货膨胀如何影响购买力',
    initialAmount: '初始金额 ($)',
    startYear: '开始年份',
    endYear: '结束年份',
    calculate: '计算',
    results: '结果',
    adjustedAmount: '调整后的金额',
    purchasingPowerChange: '购买力变化',
    averageInflation: '平均年度通胀',
    cumulativeInflation: '累计通胀率',
    comparison: '$X能买什么？',
    in: '在',
    could: '能买',
    buys: '今天能买',
    lost: '失去的购买力',
    selectLanguage: '选择语言',
    faq: '常见问题',
  },
  ru: {
    title: 'Калькулятор Инфляции',
    description: 'Рассчитайте, как инфляция влияет на покупательную способность с течением времени',
    initialAmount: 'Первоначальная сумма ($)',
    startYear: 'Начальный год',
    endYear: 'Конечный год',
    calculate: 'Рассчитать',
    results: 'Результаты',
    adjustedAmount: 'Скорректированная сумма',
    purchasingPowerChange: 'Изменение покупательной способности',
    averageInflation: 'Средняя годовая инфляция',
    cumulativeInflation: 'Совокупный уровень инфляции',
    comparison: 'Что могло бы купить $X?',
    in: 'в',
    could: 'мог бы купить то, что',
    buys: 'покупает сегодня',
    lost: 'Потеряна покупательная способность',
    selectLanguage: 'Выбрать язык',
    faq: 'Часто задаваемые вопросы',
  },
  ar: {
    title: 'حاسبة التضخم',
    description: 'احسب كيف يؤثر التضخم على القوة الشرائية بمرور الوقت',
    initialAmount: 'المبلغ الأولي ($)',
    startYear: 'السنة الأولى',
    endYear: 'السنة الأخيرة',
    calculate: 'حساب',
    results: 'النتائج',
    adjustedAmount: 'المبلغ المعدل',
    purchasingPowerChange: 'تغير القوة الشرائية',
    averageInflation: 'متوسط التضخم السنوي',
    cumulativeInflation: 'معدل التضخم التراكمي',
    comparison: 'ماذا يمكن أن تشتري؟',
    in: 'في',
    could: 'يمكنه شراء ما',
    buys: 'يشتري اليوم',
    lost: 'القوة الشرائية المفقودة',
    selectLanguage: 'اختر اللغة',
    faq: 'الأسئلة الشائعة',
  },
  hi: {
    title: 'मुद्रास्फीति कैलकुलेटर',
    description: 'गणना करें कि मुद्रास्फीति समय के साथ क्रय शक्ति को कैसे प्रभावित करती है',
    initialAmount: 'प्रारंभिक राशि ($)',
    startYear: 'शुरुआत वर्ष',
    endYear: 'अंत वर्ष',
    calculate: 'गणना करें',
    results: 'परिणाम',
    adjustedAmount: 'समायोजित राशि',
    purchasingPowerChange: 'क्रय शक्ति में परिवर्तन',
    averageInflation: 'औसत वार्षिक मुद्रास्फीति',
    cumulativeInflation: 'संचयी मुद्रास्फीति दर',
    comparison: '$X क्या खरीद सकता है?',
    in: 'में',
    could: 'खरीद सकता था क्या',
    buys: 'आज खरीद सकता है',
    lost: 'खोई हुई क्रय शक्ति',
    selectLanguage: 'भाषा चुनें',
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
  },
  ko: {
    title: '인플레이션 계산기',
    description: '시간 경과에 따른 구매력에 미치는 인플레이션의 영향을 계산합니다',
    initialAmount: '초기 금액 ($)',
    startYear: '시작 연도',
    endYear: '종료 연도',
    calculate: '계산',
    results: '결과',
    adjustedAmount: '조정된 금액',
    purchasingPowerChange: '구매력 변화',
    averageInflation: '평균 연간 인플레이션',
    cumulativeInflation: '누적 인플레이션율',
    comparison: '$X로 무엇을 살 수 있을까?',
    in: '에서',
    could: '살 수 있었던 것',
    buys: '오늘 살 수 있는',
    lost: '잃어버린 구매력',
    selectLanguage: '언어 선택',
    faq: '자주 묻는 질문',
  },
  nl: {
    title: 'Inflatie-calculator',
    description: 'Bereken hoe inflatie de koopkracht in de loop der tijd beïnvloedt',
    initialAmount: 'Startbedrag ($)',
    startYear: 'Startjaar',
    endYear: 'Eindjaar',
    calculate: 'Berekenen',
    results: 'Resultaten',
    adjustedAmount: 'Aangepast Bedrag',
    purchasingPowerChange: 'Verandering in Koopkracht',
    averageInflation: 'Gemiddelde Jaarlijkse Inflatie',
    cumulativeInflation: 'Cumulatief Inflatiepercentage',
    comparison: 'Wat Kon $X Kopen?',
    in: 'in',
    could: 'kon kopen wat',
    buys: 'koopt vandaag',
    lost: 'Verloren Koopkracht',
    selectLanguage: 'Taal Selecteren',
    faq: 'Veelgestelde Vragen',
  },
  tr: {
    title: 'Enflasyon Hesaplama Aracı',
    description: 'Enflasyonun zaman içinde satın alma gücünü nasıl etkilediğini hesaplayın',
    initialAmount: 'Başlangıç Tutarı ($)',
    startYear: 'Başlangıç Yılı',
    endYear: 'Bitiş Yılı',
    calculate: 'Hesapla',
    results: 'Sonuçlar',
    adjustedAmount: 'Düzeltilmiş Tutar',
    purchasingPowerChange: 'Satın Alma Gücü Değişimi',
    averageInflation: 'Ortalama Yıllık Enflasyon',
    cumulativeInflation: 'Kümülatif Enflasyon Oranı',
    comparison: '$X Ne Satın Alabilirdi?',
    in: 'de',
    could: 'satın alabilirdi ne',
    buys: 'bugün satın alır',
    lost: 'Kaybedilen Satın Alma Gücü',
    selectLanguage: 'Dil Seçin',
    faq: 'Sıkça Sorulan Sorular',
  },
  sv: {
    title: 'Inflationskalkylator',
    description: 'Beräkna hur inflation påverkar köpkraften över tid',
    initialAmount: 'Startbelopp ($)',
    startYear: 'Startår',
    endYear: 'Slutår',
    calculate: 'Beräkna',
    results: 'Resultat',
    adjustedAmount: 'Justerat Belopp',
    purchasingPowerChange: 'Förändring av Köpkraft',
    averageInflation: 'Genomsnittlig Årlig Inflation',
    cumulativeInflation: 'Kumulativ Inflationstakt',
    comparison: 'Vad Kunde $X Köpa?',
    in: 'i',
    could: 'kunde köpa vad',
    buys: 'köper idag',
    lost: 'Förlorad Köpkraft',
    selectLanguage: 'Välj Språk',
    faq: 'Vanliga Frågor',
  },
  pl: {
    title: 'Kalkulator Inflacji',
    description: 'Oblicz, jak inflacja wpływa na siłę nabywczą w czasie',
    initialAmount: 'Kwota Początkowa ($)',
    startYear: 'Rok Początkowy',
    endYear: 'Rok Końcowy',
    calculate: 'Oblicz',
    results: 'Wyniki',
    adjustedAmount: 'Dostosowana Kwota',
    purchasingPowerChange: 'Zmiana Siły Nabywczej',
    averageInflation: 'Średnia Roczna Inflacja',
    cumulativeInflation: 'Skumulowana Stopa Inflacji',
    comparison: 'Co By Mogło Kupić $X?',
    in: 'w',
    could: 'mogło kupić co',
    buys: 'kupuje dzisiaj',
    lost: 'Utracona Siła Nabywcza',
    selectLanguage: 'Wybierz Język',
    faq: 'Często Zadawane Pytania',
  },
};

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    initialAmount: '100',
    startYear: 2010,
    endYear: 2024,
    language: 'en',
  });

  const [results, setResults] = useState<{
    adjusted: number;
    cumulativeInflation: number;
    averageInflation: number;
    powerLoss: number;
  } | null>(null);

  const [mounted, setMounted] = useState(false);

  // Load from localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('calculatorState');
    if (saved) {
      setState(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('calculatorState', JSON.stringify(state));
    }
  }, [state, mounted]);

  const t = LANGUAGES[state.language as keyof typeof LANGUAGES] || LANGUAGES.en;

  const calculate = () => {
    const amount = parseFloat(state.initialAmount);
    if (isNaN(amount) || amount <= 0) return;

    const [start, end] = [state.startYear, state.endYear].sort();

    let cumulativeInflation = 1;
    for (let year = start; year < end; year++) {
      const rate = CPI_DATA[year] || 2.5;
      cumulativeInflation *= 1 + rate / 100;
    }

    const adjusted = amount * cumulativeInflation;
    const averageRate =
      ((Math.pow(cumulativeInflation, 1 / (end - start)) - 1) * 100).toFixed(2);
    const infRate = (
      ((cumulativeInflation - 1) * 100) as unknown as number
    ).toFixed(2);
    const powerLoss = ((1 - 1 / cumulativeInflation) * 100).toFixed(2);

    setResults({
      adjusted: parseFloat(adjusted.toFixed(2)),
      cumulativeInflation: parseFloat(infRate as string),
      averageInflation: parseFloat(averageRate as string),
      powerLoss: parseFloat(powerLoss as string),
    });
  };

  const handleLanguageChange = (lang: string) => {
    setState({ ...state, language: lang });
  };

  if (!mounted) return null;

  const years = Array.from({ length: 67 }, (_, i) => 1960 + i);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Language Selector */}
      <div className="mb-8 flex justify-end">
        <select
          value={state.language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="tool-input py-2 text-sm"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
          <option value="ja">日本語</option>
          <option value="zh">中文</option>
          <option value="ru">Русский</option>
          <option value="ar">العربية</option>
          <option value="hi">हिन्दी</option>
          <option value="ko">한국어</option>
          <option value="nl">Nederlands</option>
          <option value="tr">Türkçe</option>
          <option value="sv">Svenska</option>
          <option value="pl">Polski</option>
        </select>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
        {t.title}
      </h1>
      <p className="text-center text-gray-400 mb-12">{t.description}</p>

      {/* Input Section */}
      <div className="card mb-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              {t.initialAmount}
            </label>
            <input
              type="number"
              value={state.initialAmount}
              onChange={(e) =>
                setState({ ...state, initialAmount: e.target.value })
              }
              className="tool-input"
              placeholder="100"
              min="0"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.startYear}
              </label>
              <select
                value={state.startYear}
                onChange={(e) =>
                  setState({ ...state, startYear: parseInt(e.target.value) })
                }
                className="tool-input"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.endYear}
              </label>
              <select
                value={state.endYear}
                onChange={(e) =>
                  setState({ ...state, endYear: parseInt(e.target.value) })
                }
                className="tool-input"
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button onClick={calculate} className="btn-primary w-full">
            {t.calculate}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="space-y-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">{t.results}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-purple-500/10 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">{t.adjustedAmount}</p>
                <p className="text-3xl font-bold text-purple-600">
                  ${results.adjusted.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>

              <div className="text-center p-4 bg-blue-500/10 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">
                  {t.purchasingPowerChange}
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  {results.powerLoss}%
                </p>
              </div>

              <div className="text-center p-4 bg-amber-50 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">{t.averageInflation}</p>
                <p className="text-3xl font-bold text-amber-600">
                  {results.averageInflation}%
                </p>
              </div>

              <div className="text-center p-4 bg-red-500/10 rounded-xl">
                <p className="text-sm text-gray-400 mb-2">
                  {t.cumulativeInflation}
                </p>
                <p className="text-3xl font-bold text-red-600">
                  {results.cumulativeInflation}%
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">{t.comparison}</h3>
            <div className="p-4 bg-purple-500/10 rounded-xl">
              <p className="text-center mb-2">
                <span className="font-semibold">${state.initialAmount}</span>{' '}
                {t.in} {state.startYear}
              </p>
              <p className="text-center text-purple-600 font-bold text-lg">
                {t.could}{' '}
                <span className="text-2xl">
                  ${results.adjusted.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>{' '}
                {t.buys}
              </p>
            </div>
          </div>

          {/* Visual Bar */}
          <div className="card">
            <h3 className="text-lg font-bold mb-4">{t.lost}</h3>
            <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-red-400 to-red-600 h-full transition-all duration-500"
                style={{ width: `${Math.min(results.powerLoss, 100)}%` }}
              />
            </div>
            <p className="text-center mt-3 text-gray-300">
              {results.powerLoss}% {t.lost}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          Data sources: U.S. Bureau of Labor Statistics (BLS) CPI Historical
          Data
        </p>
      </div>
    </div>
  );
}
