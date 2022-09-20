import { Divider } from "@mantine/core";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<div className="text-sky-500 text-4xl p-2 items-center justify-center flex">
				<Link className="hover:text-sky-700 p-2" to="/">
					Home
				</Link>
				<Link className="hover:text-sky-700 p-2" to="/Dashboard">
					Dashboard
				</Link>
			</div>
			<div>
				<Divider mb="sm" size="md" />
			</div>
		</div>
	);
}
