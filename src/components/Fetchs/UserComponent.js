import React, { useState, useEffect } from 'react';
import Board from '../Board/Board';
import "../Board/Board.css"
import "../Card/Card.css"
import Card from '../Card/Card';
import { Circle, MoreHorizontal, Plus } from "react-feather";

const UserComponent = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      // Replace with your actual API endpoint or data source
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };

    fetchData();
  }, []);

  // Create a map of user names for easy lookup
  const userNameMap = {};
  users.forEach(user => {
    userNameMap[user.id] = user.name;
  });

  // Group tickets by user
  const userGroups = {};
  tickets.forEach(ticket => {
    if (!userGroups[ticket.userId]) {
      userGroups[ticket.userId] = [];
    }
    userGroups[ticket.userId].push(ticket);
  });

  

    return (
    
        <div className='column-container'>
            {Object.keys(userGroups).map(item => (
                <div className="column" key={item}>
                    <div className="board_top">
                        <p className="board_top_title">
                            {/* {boardTitles[item]} */}
                            {userNameMap[item]}{' '}
                            {/* <span>2</span> */}
                        </p>
                        <Plus />
                        <MoreHorizontal />   
                    </div>
                    <div className="board_cards">
                            {userGroups[item].map(ticket => (
                                
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

   
};

export default UserComponent;