import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import Board from '../components/Board/Board';

function Priority(){
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

  return (
    <div>
        <div className="">
        <h1>Tickets Grouped by Priority</h1>
        <div className="">
                
                {Object.keys(priorityGroups).map(priority => (
                    <div className="priority-box" key={priority}>
                
                        <h2 className="priority-head">Priority {priority}</h2>
                        <div className="">
                            {priorityGroups[priority].map(ticket => (
                            <p className="" key={ticket.id}>{ticket.title}</p>
                            ))}
                        </div>    
                        

                    </div>
                
                ))}
            </div> 
        </div>
    </div>
  );
}
export default Priority;