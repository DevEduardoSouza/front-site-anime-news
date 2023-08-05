const apiUrl = 'http://localhost:8080/api/news/';

const urlParams = new URLSearchParams(window.location.search);
const newsId = urlParams.get('id');
console.log("id = " + newsId);


const getNews = {
  async getAllNews() {
   
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        return data;
    
  },
  async getOneNews(id) {
    try {
      const res = await fetch(`${apiUrl}one/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
        console.error('Error fetching one news:', error);
        throw error;
    }
  },
}

getNews.getOneNews(newsId);