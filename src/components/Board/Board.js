import React from "react";
import "./Board.css"
import { MoreHorizontal, Plus } from "react-feather";
import Card from "../Card/Card";
import Priority from "../../Groups/Priority";



function Board(props){
    return (
        <div  className="board">
          <div className="board_top">
              <p className="board_top_title">{props.board_title}
                <span>2</span>
              </p>
              <a><Plus />
              <MoreHorizontal /> 
              </a>  
          </div>
          <div className="board_cards">
             {/* <Card
              id = ""
             />
             <Card /> */}
             
          </div>

        </div>
        
    )

}

export default Board;
