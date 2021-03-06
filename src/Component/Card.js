import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
// import Api from "../ApiData/Api";

export default function Card() {
  
  const [Adata, setAdata] = useState('');
  let [other, setOther] = useState(0);
  const [ans,setAns] =useState('')

  

  let currentDate = new Date();
  let time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  useEffect(() => {
    const dataf = async () => {
        const response= await axios.get("https://quizapi.io/api/v1/questions?apiKey=pp1d4IvmpXgtelfNIBolTGEUWo0j8g3VpzKYo80C&category=linux&difficulty=Easy&limit=20&tags=Linux")
      setAdata(response.data);
      
    };
    dataf();
   
  }, [currentDate.getSeconds()]);

  const Next=()=> {
    setOther(other++);
  }
  const Prev=()=> {
    setOther(other--);
  }
 
  return (
    <>
      <div className="Outer_body">
        <div className="heading">
          <h1>Welcome to Quiz App {console.log(Adata?.data?.length())}</h1>
        </div>

        <div className="card_container">
          <div className="card_container_left">
            <div className="question_number">
              <h2> Question 1/3</h2>
            </div>
            <div className="Question">
              <h3>{Adata[other]?.question}</h3>
            </div>
          </div>
          <div className="card_container_right">
            <div className="timedive">
              <p>
                Date= {currentDate.toLocaleDateString()} Time={time}
              </p>
            </div>
            <ul className="card_container_right_items">
              <button onClick={()=>{setAns("A")}} className="bttn">{Adata[other]?.answers?.answer_a}</button>
              <button  onClick={()=>{setAns("B")}} className="bttn">{Adata[other]?.answers?.answer_b}</button>
              <button onClick={()=>{setAns("C")}} className="bttn">{Adata[other]?.answers?.answer_c}</button>
              <button onClick={()=>{setAns("D")}}  className="bttn">{Adata[other]?.answers?.answer_d}</button>
            </ul>
            <div className="submitbtn">
              <button className="bttn btnnps">Submit</button>
            </div>
            <div className="nextprevbtn">
              <button
               
                disabled={other === 0}
                className="bttn btnnps"
                onClick={Prev}
              >
                Prev 
              </button>
              <button 
          disabled={other === 20}
        
               className="bttn btnnps" onClick={Next}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
