const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_URL = 'https://nomoreparties.co/news/v2' 

function getNews(keyword) {
  const today = new Date()
  const weekAgo = new Date()
  weekAgo.setDate(today.getDate() - 7)

  const from = weekAgo.toISOString().split('T')[0] 
  const to = today.toISOString().split('T')[0]

  return fetch(
    `${BASE_URL}/everything?q=${keyword}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`
  )
    .then((res) => {
      if (!res.ok) throw new Error('Error en la solicitud')
      return res.json()
    })
    .then((data) => data.articles)
}

export { getNews }
