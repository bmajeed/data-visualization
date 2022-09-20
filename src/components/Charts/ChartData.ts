// --- useful global variable ---

// list of all markets
export const marketsInfo: string[] = ["Personal", "Fleet"];

// list of all vehicle types
export const vehicleTypesInfo: string[] = ["Sedan", "SUV"];

// list of all powertrains
export const powertrainsInfo: string[] = [
  "ICEV",
  "HEV",
  "PHEV",
  "BEV",
  "FCEV",
  "H2ICEV",
];

// list of all scenarios
export const scenarioInfo: string[] = [
  "Reference",
  "FCEVOpt",
  "Ref+CO2Tgt",
  "FC+CO2Tgt",
];

// range slider year marks
export const marks: {
  value: number;
  label: string;
}[] = [
  { value: 2020, label: "2020" },
  { value: 2025, label: "2025" },
  { value: 2030, label: "2030" },
  { value: 2035, label: "2035" },
  { value: 2040, label: "2040" },
  { value: 2045, label: "2045" },
  { value: 2050, label: "2050" },
];


// list of all CSV file paths
export const paths = {
  sales: "/data/Sales_FCEV.csv",
  GHG: "/data/GHG_FCEV.csv",
  stocks: "/data/Stocks_FCEV.csv",
  energyDemand: "/data/EnergyDemand_FCEV.csv",
  internalSub: "/data/InternalSub_FCEV.csv",
  marketShare: "/data/MarketShare_FCEV.csv",
};

