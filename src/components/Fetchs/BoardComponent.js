import React, { useState, useEffect } from 'react';
import Board from '../Board/Board';
import "../Board/Board.css"
import "../Card/Card.css"
import Card from '../Card/Card';
import { MoreHorizontal, Plus } from "react-feather";


const BoardComponent = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
      // Simulating fetching data from an API
      const fetchData = async () => {
        // Replace with your actual API endpoint or data source
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
      };

      fetchData();
    }, []);

    // Group tickets by priority
    const priorityGroups = {};
    tickets.forEach(ticket => {
      if (!priorityGroups[ticket.priority]) {
        priorityGroups[ticket.priority] = [];
      }
      priorityGroups[ticket.priority].push(ticket);
    });

    const boardTitles = {
        0: 'No Priority',
        1: 'Low',
        2: 'Medium',
        3: 'High',
        4: 'Urgent'
       
    };

    return (
    
        <div className="column-container">

            {Object.keys(priorityGroups).map(item => (
                
                
                <div className="column" key={item}>
                    <div className="board_top">
                        <p className="board_top_title">
                        {boardTitles[item]}
            
                        </p>
                        <a>
                        <Plus />
                        <MoreHorizontal />  
                        </a> 
                    </div>
                    <div className="board_cards">
                            {priorityGroups[item].map(ticket => (
                                
                                    <Card 
                                        card_id = {ticket.id}
                                        card_title = {ticket.title}
                                        card_tag = {ticket.tag.join(',')}
                                
                                    />
                                

                                
                            ))}
                    </div> 
                  
                </div>
            ))}
        </div>    
        
    );

    // {Object.keys(priorityGroups).map(priority => (
    //     <div className="priority-box" key={priority}>
    
    //         <h2 className="priority-head">Priority {priority}</h2>
    //         <div className="">
    //             {priorityGroups[priority].map(ticket => (
    //             <p className="" key={ticket.id}>{ticket.title}</p>
    //             ))}
    //         </div>    
            

    //     </div>
    
    // ))}

    // return (
    //     <div  className="board">
    //       <div className="board_top">
    //           <p className="board_top_title">
    //             <span>2</span>
    //           </p>
    //           <Plus />
    //           <MoreHorizontal />   
    //       </div>
    //       <div className="board_cards">
    //          <Card
    //           id = ""
    //          />
    //          <Card />
             
    //       </div>

    //     </div>
    // )
};

export default BoardComponent;
