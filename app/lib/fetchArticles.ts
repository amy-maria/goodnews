export default async function fetchArticles() {
  const url =
    'https://google-news-api1.p.rapidapi.com/search?language=en&limit=25';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bfab46e2fdmsh08bf157c46b411fp139e7ejsnfa282ac37bdf',
      'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    console.log(response);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
