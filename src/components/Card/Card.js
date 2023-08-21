import React from "react";
import "./Card.css"
import { Square } from "react-feather";
import Priority from "../../Groups/Priority";
import BoardComponent from "../Fetchs/BoardComponent";


function Card(props){

    return (
        <div className="card">
          <div className="card_top">
             <a className="card_id">{props.card_id}</a>
             {/* <img className="card_img" src ="">img</img> */}
          </div>
          <div className="cardTitle" >{props.card_title}</div>
          <div className="card_footer">
             <a className="card_prior"><Square /></a>
             <a className="card_tag">{props.card_tag}</a>
          </div>
           

        </div>
    )

}

  {/* <p className="card_tag"><Square /></p> */}

export default Card;