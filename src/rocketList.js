import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from './styles';
export function Rocket() {
	const [rockets, setRockets] = useState([]);
	async function getRockets() {
		let res = await axios('https://api.spacexdata.com/v4/rockets');
		let data = res.data;
		console.log(data);
		setRockets(data);
	}
	useEffect(() => {
		getRockets();
	}, []);

	return (
		<div>
			<div>
				{rockets.map((rocket) => (
					<Card>
						<div key={rocket.id}>{rocket.name}</div>
					</Card>
				))}
			</div>
		</div>
	);
}
