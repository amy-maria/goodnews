async function fetchArticles() {
  try {
    const response = await fetch('/api/articles');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchArticles;
