import axios from 'axios';

const API_URL = 'https://dog.ceo/api/breeds/image/random'

interface IDog {
    message: string;
    status: string;
  }


export function getDogs(){
    axios.get<IDog>(API_URL).then(response => {
        return {
            image: response.data.message
        }
    })
}