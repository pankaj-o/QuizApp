import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";


export default function Card() {
 let  v=0
  const [Adata, setAdata] = useState([]);

  let currentDate = new Date();
  let time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  useEffect(() => {
    const dataf = async () => {
      const response = await axios.get(
        "https://quizapi.io/api/v1/questions?apiKey=pp1d4IvmpXgtelfNIBolTGEUWo0j8g3VpzKYo80C&category=linux&difficulty=Easy&limit=20&tags=Linux"
      );

      setAdata(response.data);
    };
    dataf();
  }, []);
   
   function Next(){
    
    setAdata(Adata[v++])
   }
   function Prev(){
    
    setAdata(Adata[v--])
   }

  return (
    <>
      <div className="Outer_body">
        <div className="heading">
          <h1>Welcome to Quiz App</h1>
        </div>

        <div className="card_container">
          <div className="card_container_left">
            <div className="question_number">
              <h2> Question 1/3</h2>
            </div>
            <div className="Question">
              <h3>{Adata.data[0].question}</h3>
            </div>
          </div>
          <div className="card_container_right">
            <div className="timedive">
              <p>
               
                Date= {currentDate.toLocaleDateString()} Time={time}
              </p>
            </div>
            <ul className="card_container_right_items">
              <button className="bttn">{Adata.data[v].answers.answer_a} </button>
              <button className="bttn">
                
                {Adata.data[v].answers.answer_b}
              </button>
              <button className="bttn"> {Adata.data[v].answers.answer_c}</button>
              <button className="bttn">
                
                {Adata.data[v].answers.answer_d}
              </button>
            </ul>
            <div className="submitbtn">
              <button className="bttn btnnps">Submit</button>
            </div>
            <div className="nextprevbtn">
              <button disabled={Adata.length-1}className="bttn btnnps" onClick={Next}>Prev</button>
              <button disabled={v===0}className="bttn btnnps" onClick={Prev}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
