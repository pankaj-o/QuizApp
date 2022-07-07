
import axios from "axios"

export default function Api() {
    const response=axios.get("https://quizapi.io/api/v1/questions?apiKey=pp1d4IvmpXgtelfNIBolTGEUWo0j8g3VpzKYo80C&category=linux&difficulty=Easy&limit=20&tags=Linux").then((resp)=>{console.log(resp)}).catch((Error)=>{console.log(Error)})


  return response
   
  
}
