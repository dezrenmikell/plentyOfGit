import axios from 'axios'

export default function MoviePage() {
  console.log('about to search movies')
//   const term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  const url = "https://api.tvmaze.com/search/shows?q=girls";

  return axios.get(url).then(response => {
    console.log('raw response:', response)
    return response.data.map(result => {
      const {name, image} = result.show;
      return {
        name,
        image: image && image.medium 
               || 'https://cdn.browshot.com/static/images/not-found.png'
      }
    })
  });
}