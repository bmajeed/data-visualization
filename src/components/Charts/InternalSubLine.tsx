// // === NOT USED ===

import { memo, useEffect, useState } from "react";

// importing chart.js componenets
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

// importing chart config, data, and helper functions
import {
  internalSubLineOptions,
  getColor,
  getOrder,
} from "./ChartConfigs";
import { paths } from "./ChartData";
import * as dfd from "danfojs";

function InternalSubLine({ markets, vehicleTypes, powertrains, minYear, maxYear }) {
	const [lineData, setLineData] = useState({
    labels: [] as any,
    datasets: [] as any,
  });
	const K = 1000;

	useEffect(() => {
		// if no filters selected
		if (markets.length == 0) {
			// display empthy graph
			setLineData({ labels: [], datasets: [] });
		}
		// edge case for internalSubData since it doesn't have markets
		else if (markets.length === 1) {
			markets = ["Personal", "Fleet"];
			vehicleTypes = ["Sedan", "SUV"];
		}

		// reset line data object before adding new lines
		lineData.labels = [];
		lineData.datasets = [];

		// temp arrays to store data for lines to set to state with later
		let lines: any = [];
		let years = [];
        dfd.readCSV(paths.internalSub).then((internalSubData) => {
            
            // define years range [minYear - maxYear]
            const yearsFilter = internalSubData["Year"]
                .ge(minYear)
                .and(internalSubData["Year"].le(maxYear));
    
            // select rows in years range
            const internalSubDataInYearsRange = internalSubData.loc({ rows: yearsFilter });
    
            // == Adding markets lines ==
            if (vehicleTypes.length == 0 && powertrains.length == 0) {
                const allMarkets = internalSubDataInYearsRange
                    .groupby(["Market", "Year"])
                    .col(["value"])
                    .sum();
    
                for (const market of markets) {
                    const marketFilter = allMarkets["Market"].eq(market);
                    const eachMarket = allMarkets.loc({ rows: marketFilter });
    
                    pushLine(eachMarket, market);
                }
            }
    
            // == Adding vehicle types lines ==
            else if (vehicleTypes.length > 0 && powertrains.length == 0) {
                const allTypes = internalSubDataInYearsRange
                    .groupby(["Market", "Type", "Year"])
                    .col(["value"])
                    .sum();
    
                // if both markets are selected
                if (markets.length == 2) {
                    for (const type of vehicleTypes) {
                        const typeFilter = allTypes["Type"].eq(type);
                        let eachType = allTypes.loc({ rows: typeFilter });
                        eachType = eachType.groupby(["Year"]).col(["value_sum"]).sum();
                        eachType.rename({ value_sum_sum: "value_sum" }, { inplace: true });
    
                        pushLine(eachType, type);
                    }
                }
    
                // if only one market is selected
                else {
                    for (const market of markets) {
                        for (const type of vehicleTypes) {
                            const typeFilter = allTypes["Type"]
                                .eq(type)
                                .and(allTypes["Market"].eq(market));
                            const eachType = allTypes.loc({ rows: typeFilter });
    
                            pushLine(eachType, type);
                        }
                    }
                }
            }
    
            // == Adding powertrains lines ==
            else {
                const allPowertrains = internalSubDataInYearsRange
                    .groupby(["Market", "Type", "Powertrain", "Year"])
                    .col(["value"])
                    .sum();
    
                // both markets, both types
                if (markets.length == 2 && vehicleTypes.length == 2) {
                    for (const powertrain of powertrains) {
                        let powertrainFilter = allPowertrains["Powertrain"].eq(powertrain);
                        let eachPowertrain = allPowertrains.loc({ rows: powertrainFilter });
    
                        eachPowertrain = allPowertrains
                            .groupby(["Powertrain", "Year"])
                            .col(["value_sum"])
                            .sum();
                        powertrainFilter = eachPowertrain["Powertrain"].eq(powertrain);
                        eachPowertrain = eachPowertrain.loc({ rows: powertrainFilter });
                        eachPowertrain.rename({ value_sum_sum: "value_sum" }, { inplace: true });
    
                        pushLine(eachPowertrain, powertrain);
                    }
                }
    
                // both markets, either types
                else if (markets.length == 2) {
                    for (const type of vehicleTypes) {
                        for (const powertrain of powertrains) {
                            const powertrainFilter = allPowertrains["Type"]
                                .eq(type)
                                .and(allPowertrains["Powertrain"].eq(powertrain));
                            let eachPowertrain = allPowertrains.loc({ rows: powertrainFilter });
                            eachPowertrain = eachPowertrain.groupby(["Year"]).col(["value_sum"]).sum();
                            eachPowertrain.rename({ value_sum_sum: "value_sum" }, { inplace: true });
    
                            pushLine(eachPowertrain, powertrain, ` ${vehicleTypes[0]}s`);
                        }
                    }
                }
    
                // either markets, both types
                else if (vehicleTypes.length == 2) {
                    for (const market of markets) {
                        for (const powertrain of powertrains) {
                            const powertrainFilter = allPowertrains["Market"]
                                .eq(market)
                                .and(allPowertrains["Powertrain"].eq(powertrain));
                            let eachPowertrain = allPowertrains.loc({ rows: powertrainFilter });
                            eachPowertrain = eachPowertrain.groupby(["Year"]).col(["value_sum"]).sum();
                            eachPowertrain.rename({ value_sum_sum: "value_sum" }, { inplace: true });
    
                            pushLine(eachPowertrain, powertrain);
                        }
                    }
                }
    
                // 1 market, 1 type
                else {
                    for (const powertrain of powertrains) {
                        const powertrainFilter = allPowertrains["Market"]
                            .eq(markets[0])
                            .and(allPowertrains["Type"].eq(vehicleTypes[0]))
                            .and(allPowertrains["Powertrain"].eq(powertrain));
                        let eachPowertrain = allPowertrains.loc({ rows: powertrainFilter });
                        eachPowertrain = eachPowertrain.groupby(["Year"]).col(["value_sum"]).sum();
                        eachPowertrain.rename({ value_sum_sum: "value_sum" }, { inplace: true });
    
                        pushLine(eachPowertrain, powertrain, ` ${vehicleTypes[0]}s`);
                    }
                }
            }
    
            // adds a line with corresponding config to temp line array, then update chart state
            function pushLine(data, variable, type = "") {
                lines.push({
                    label: `${variable}${type}`,
                    data: data["value_sum"].values.map((value) => value / K),
                    borderColor: getColor(variable),
                    backgroundColor: getColor(variable),
                    order: getOrder(variable),
                });
                years = data["Year"].values;
    
                setLineData({ datasets: [...lines], labels: [...years] });
            }
    
            // update graph title
            internalSubLineOptions.plugins.title.text = `Internal Subsidies for all passenger vehicles ${minYear}-${maxYear}`;
        });

		// chart will only update if at least one of these variable change
	}, [markets, vehicleTypes, powertrains, minYear, maxYear]);

	return (
		<div className="">
			{/* @ts-ignore */}
			<Line data={lineData} options={internalSubLineOptions} />
		</div>
	);
}
export default memo(InternalSubLine);
