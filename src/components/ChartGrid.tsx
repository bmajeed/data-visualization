import { memo, useEffect, useState } from "react";
// Charts
import Sales from "./Charts/Sales";
import MarketShare from "./Charts/MarketShare";
import Stocks from "./Charts/Stocks";
import InternalSubLine from "./Charts/InternalSubLine";
import EnergyDemand from "./Charts/EnergyDemand";
import GHG from "./Charts/GHG";

function ChartGrid({
  markets,
  vehicleTypes,
  powertrains,
  minYear,
  maxYear,
  charts,
}: {
  markets: string[];
  vehicleTypes: string[];
  powertrains: string[];
  minYear: number;
  maxYear: number;
  charts: string[];
}) {
  const [col, setCol] = useState("grid-3");
  useEffect(() => {
    if (charts.length === 6 || charts.length === 5) setCol("grid-3");
    if (charts.length === 4 || charts.length === 3 || charts.length === 2)
      setCol("grid-2");
    if (charts.length === 1) setCol("grid-one");

  }, [charts.length]);

  return (
    <div className={col}>
      {charts.includes("sales") && (
        <div className="border rounded-lg shadow-2xl">
          <Sales
            markets={markets}
            vehicleTypes={vehicleTypes}
            powertrains={powertrains}
            minYear={minYear}
            maxYear={maxYear}
          />
        </div>
      )}

      {charts.includes("marketShare") && (
        <div className="border rounded-lg shadow-2xl">
          <MarketShare
            markets={markets}
            vehicleTypes={vehicleTypes}
            powertrains={powertrains}
            minYear={minYear}
            maxYear={maxYear}
          />
        </div>
      )}
      {charts.includes("stocks") && (
        <div className="border rounded-lg shadow-2xl">
          <Stocks
            markets={markets}
            vehicleTypes={vehicleTypes}
            powertrains={powertrains}
            minYear={minYear}
            maxYear={maxYear}
          />
        </div>
      )}
      {charts.includes("subsidies") && (
        <div className="border rounded-lg shadow-2xl">
          <InternalSubLine
            markets={markets}
            vehicleTypes={vehicleTypes}
            powertrains={powertrains}
            minYear={minYear}
            maxYear={maxYear}
          />
        </div>
      )}
      {charts.includes("energy") && (
        <div className="border rounded-lg shadow-2xl">
          <EnergyDemand
            markets={markets}
            vehicleTypes={vehicleTypes}
            powertrains={powertrains}
            minYear={minYear}
            maxYear={maxYear}
          />
        </div>
      )}
      {charts.includes("emissions") && (
        <div className="border rounded-lg shadow-2xl">
          <GHG
            markets={markets}
            vehicleTypes={vehicleTypes}
            powertrains={powertrains}
            minYear={minYear}
            maxYear={maxYear}
          />
        </div>
      )}
    </div>
  );
}

export default memo(ChartGrid);
