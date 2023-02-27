import axios from 'axios';

const API_URL = 'https://dog.ceo/api/breeds/image/random'

interface IDog {
    message: string;
    status: string;
  }


export async function getDogs(){
    const response = await axios.get<IDog>(API_URL);
    return response.data.message
}