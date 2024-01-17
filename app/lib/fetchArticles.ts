const url = 'https://newsnow.p.rapidapi.com/';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'newsnow.p.rapidapi.com',
  },
  body: {
    text: 'Europe',
    region: 'wt-wt',
    max_results: 25,
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
