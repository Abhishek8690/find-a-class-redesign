const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://referential.p.rapidapi.com/v1/city',
  params: {
    ip: '128.218.229.26'
  },
  headers: {
    'X-RapidAPI-Key': '7956eb99b3msh810abc0dc04db37p10ae70jsn0e257df77283',
    'X-RapidAPI-Host': 'referential.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
export default response.data;