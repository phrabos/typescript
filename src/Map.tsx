import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const center = {
	lat: 0,
	lng: 0,
};

const containerStyle = {
	width: '400px',
	height: '400px',
};

export const Map: React.FC = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_API_KEY
			? process.env.REACT_APP_API_KEY
			: 'default',
	});

	return isLoaded ? (
		<>
			<GoogleMap center={center} zoom={1} mapContainerStyle={containerStyle} />
		</>
	) : (
		<></>
	);
};
