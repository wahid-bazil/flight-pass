import axios from 'axios';

const baseURL = 'http://localhost:8082/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		Authorization: localStorage.getItem('access_token')
			? 'JWT ' + localStorage.getItem('access_token')
			: '',
		'Content-Type': 'application/json',
		accept: 'application/json',
	}, 
});




export default axiosInstance;