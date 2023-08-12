const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '912e416af1msh36432120ec4ff68p103ca1jsn81cda118148b',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));