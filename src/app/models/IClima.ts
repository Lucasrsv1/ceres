export interface IClima {
	by: "geo_ip";
	valid_key: boolean;
	results: {
		temp: number;
		date: string;
		time: string;
		condition_code: string;
		description: string;
		currently: string;
		cid: string;
		city: string;
		img_id: string;
		humidity: number;
		wind_speedy: string;
		sunrise: string;
		sunset: string;
		condition_slug: string;
		city_name: string;
		forecast: Array<{
			date: string;
			weekday: string;
			max: number;
			min: number
			description: string;
			condition: string;
		}>
	},
	execution_time: number;
	from_cache: boolean
}
