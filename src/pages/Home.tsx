import Contact from "../components/Contact";
export default function Home() {
	return (
		<div className="justify-center items-center m-2">
			<div className="flex flex-col items-center justify-center m-2">
				<h2 className="font-medium text-3xl mb-2 text-sky-500 text-center">
					Transportation Energy Analysis Model
				</h2>
				<p className="items-center justify-around m-2 md:w-1/2">
					Developed at Aramco Detroit Research Center, the Transportation Energy Analysis
					Model <strong>(TEAM)</strong> is a Python-based model to project market
					penetration of alternative fuel technologies, energy demand and greenhouse gas
					emissions for the light-duty transport sector in China. TEAM consists of two
					modules: the market penetration module and the vehicle fleet module. On the
					demand side, the consumer choice is modeled considering the impacts of
					technology cost, energy cost, as well as the inconvenience cost that includes
					refueling and charging availability. On the supply side, TEAM simulates the
					technology supply by the auto-industry with the objective of maximizing the
					industry profit under the constraints of government policies. The outputs of the
					market penetration module are served as inputs for the vehicle fleet module,
					which combines the vehicle fuel economy, vehicle scrappage rate, vehicle
					kilometers traveled, vehicle sales, and GHG intensities of fuels/electricity to
					assess energy demand and GHG emissions.
				</p>
			</div>
			<div className="flex flex-col items-center justify-center m-2">
				<h2 className="font-medium text-3xl mb-2 text-sky-500 text-center">Functionalities</h2>
				<ul className="pl-4 md:w-1/2">
					<li className="list-disc mb-2">
						Users can dynamically filter scenarios and years and TEAM results will be
						updated accordingly.
					</li>
					<li className="list-disc mb-2">
						Users can dynamically filter the type, powertrain and vehicle technology and
						TEAM will show the coreesponding trend.
					</li>
					<li className="list-disc mb-2">
						Each scenario yields outputs including LDV sales and market shares by
						technology and year, LDV stocks <br /> by technology and year and GHG
						emissions and fuel economy use by fuel type and year.
					</li>
					<li className="list-disc mb-2">
						Users can compare different powertrain and technologies at any year from
						2021 to 2050.
					</li>
				</ul>
			</div>
			<Contact />
		</div>
	);
}
