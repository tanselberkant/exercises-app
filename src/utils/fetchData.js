export const exerciseOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  // console.log(url, options, data)
  return data;
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

