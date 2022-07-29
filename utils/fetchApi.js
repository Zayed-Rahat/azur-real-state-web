import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '7b88d4875dmsh3c16eb59c4ae55ep1e4713jsnb0781d6df900',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      },
  });
    
  return data;
}

