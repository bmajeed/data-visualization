import Contact from "../components/Contact";
export default function Home() {
  return (
    <div className="justify-center items-center m-2">
      <div className="flex flex-col items-center justify-center m-2">
        <h2 className="font-medium text-3xl mb-2 text-sky-500 text-center">
          Transportation Energy Analysis Model
        </h2>
        <p className="items-center justify-around m-2 md:w-1/2">
          Developed at Aramco Detroit Research Center, the Transportation Energy
          Analysis Model <strong>(TEAM)</strong>
        </p>
        <p className="items-center justify-around m-2 md:w-1/2">
          Most of the information on this dashboard has been redacted for
          confidentiality reasons, and the data presented is mock data to
          display the functionality of the dashboard
        </p>
      </div>
      <div className="flex flex-col items-center justify-center m-2">
        <h2 className="font-medium text-3xl mb-2 text-sky-500 text-center">
          Functionalities
        </h2>
        <ul className="pl-4 md:w-1/2">
          <li className="list-disc mb-2">
            Users can dynamically filter scenarios and years and TEAM results
            will be updated accordingly.
          </li>
          <li className="list-disc mb-2">
            Users can dynamically filter the type, powertrain and vehicle
            technology and TEAM will show the coreesponding trend.
          </li>
          <li className="list-disc mb-2">
            Users can compare different powertrain and technologies at any year
            from 2021 to 2050.
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  );
}
