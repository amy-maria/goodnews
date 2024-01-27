async function fetchArticles() {
  const url =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=3e3c176de13144be9b51017d1787f4cd';

  //let apiKey = `process.env.API_Key`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default fetchArticles;
