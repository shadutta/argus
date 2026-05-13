/** Fictional, realistic-style datasets for dashboard demos */

export const crudeForecast = [
  { month: "Jan", actual: 78.2, forecast: 77.8, bandLow: 74.1, bandHigh: 81.5 },
  { month: "Feb", actual: 81.4, forecast: 80.9, bandLow: 77.2, bandHigh: 84.6 },
  { month: "Mar", actual: 84.1, forecast: 83.6, bandLow: 79.8, bandHigh: 87.4 },
  { month: "Apr", actual: 86.3, forecast: 85.9, bandLow: 82.0, bandHigh: 89.8 },
  { month: "May", actual: 82.7, forecast: 83.1, bandLow: 79.4, bandHigh: 86.8 },
  { month: "Jun", actual: 79.5, forecast: 80.2, bandLow: 76.1, bandHigh: 84.3 },
  { month: "Jul", actual: null, forecast: 81.4, bandLow: 77.5, bandHigh: 85.2 },
  { month: "Aug", actual: null, forecast: 83.0, bandLow: 78.9, bandHigh: 87.1 },
  { month: "Sep", actual: null, forecast: 84.6, bandLow: 80.2, bandHigh: 88.9 },
  { month: "Oct", actual: null, forecast: 85.1, bandLow: 80.8, bandHigh: 89.4 },
];

export const supplyDemand = [
  { region: "USGC", supply: 12.4, demand: 11.8 },
  { region: "NWE", supply: 14.1, demand: 14.6 },
  { region: "Asia", supply: 36.2, demand: 37.9 },
  { region: "MENA", supply: 22.5, demand: 19.4 },
  { region: "LatAm", supply: 6.8, demand: 7.1 },
];

export const refineryUtil = [
  { week: "W1", rate: 88 },
  { week: "W2", rate: 90 },
  { week: "W3", rate: 91 },
  { week: "W4", rate: 89 },
  { week: "W5", rate: 92 },
  { week: "W6", rate: 93 },
  { week: "W7", rate: 91 },
  { week: "W8", rate: 90 },
];

export const petchemTrend = [
  { q: "Q1", ethylene: 102, propylene: 94, benzene: 88 },
  { q: "Q2", ethylene: 105, propylene: 97, benzene: 91 },
  { q: "Q3", ethylene: 108, propylene: 101, benzene: 93 },
  { q: "Q4", ethylene: 106, propylene: 99, benzene: 92 },
];

export const fertilizerDemand = [
  { month: "M1", urea: 2.1, potash: 1.4, phosphate: 1.7 },
  { month: "M2", urea: 2.3, potash: 1.5, phosphate: 1.8 },
  { month: "M3", urea: 2.6, potash: 1.7, phosphate: 1.9 },
  { month: "M4", urea: 2.4, potash: 1.6, phosphate: 1.85 },
  { month: "M5", urea: 2.5, potash: 1.65, phosphate: 1.92 },
  { month: "M6", urea: 2.7, potash: 1.8, phosphate: 2.0 },
];

export const volatilitySeries = [
  { day: "Mon", vixStyle: 18.2, brentVol: 22.4 },
  { day: "Tue", vixStyle: 19.1, brentVol: 24.1 },
  { day: "Wed", vixStyle: 17.8, brentVol: 21.6 },
  { day: "Thu", vixStyle: 20.4, brentVol: 25.3 },
  { day: "Fri", vixStyle: 21.0, brentVol: 26.0 },
  { day: "Sat", vixStyle: 19.6, brentVol: 23.8 },
  { day: "Sun", vixStyle: 18.9, brentVol: 22.9 },
];

export const marginAnalysis = [
  { product: "Gasoline", crack: 18.4, var: 1.2 },
  { product: "Diesel", crack: 24.1, var: 1.8 },
  { product: "Jet", crack: 21.3, var: 1.5 },
  { product: "Naphtha", crack: 9.2, var: 0.9 },
];

export const scenarioOutcomes = [
  { scenario: "Base", npv: 120, risk: 42 },
  { scenario: "Upside", npv: 148, risk: 58 },
  { scenario: "Downside", npv: 96, risk: 35 },
  { scenario: "Stress", npv: 78, risk: 28 },
];

export const liveMarketCards = [
  { symbol: "Brent", price: "82.64", chg: "+0.42%", latency: "1.2s" },
  { symbol: "WTI", price: "78.91", chg: "-0.18%", latency: "1.1s" },
  { symbol: "Henry Hub", price: "2.34", chg: "+1.05%", latency: "0.9s" },
  { symbol: "EU TTF", price: "11.82", chg: "-0.62%", latency: "1.4s" },
];
