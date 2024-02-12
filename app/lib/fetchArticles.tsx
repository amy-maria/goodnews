const useLocalData = true;

async function fetchArticles() {
  if (useLocalData) {
    try {
      const response = await fetch(`http://localhost:3000/data/data.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    //let apiKey = `3e3c176de13144be9b51017d1787f4cd`;
    const url =
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=3e3c176de13144be9b51017d1787f4cd';
    try {
      const response = await fetch(url);

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
export default fetchArticles;
