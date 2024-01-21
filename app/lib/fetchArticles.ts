export default async function fetchArticles() {
  const url =
    'https://real-time-news-data.p.rapidapi.com/top-headlines?country=US&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'process.env.RapidAPI_Key',
      'X-RapidAPI-Host': 'process.env.RapidAPI_Host',
    },
  };

  try {
    const response = await fetch(url, options);
    console.log(response.status);
    if (!response.ok) throw new Error('Error fetching articles');
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
