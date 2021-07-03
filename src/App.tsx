import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();
export default function App() {
	return (
		<div className="App">
			<h1>user</h1>
			<h2>{user.name}</h2>
			<h2>{user.location.lat}</h2>
			<h2>{user.location.lng}</h2>
			<h1>Company</h1>
			<h2>{company.name}</h2>
			<h2>{company.slogan}</h2>
			<h2>{company.location.lat}</h2>
			<h2>{company.location.lng}</h2>
			<Map />
		</div>
	);
}
