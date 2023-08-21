import React, { useState, useEffect } from 'react';


function Status() {
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

  // Group tickets by status
  const statusGroups = {};
  tickets.forEach(ticket => {
    if (!statusGroups[ticket.status]) {
      statusGroups[ticket.status] = [];
    }
    statusGroups[ticket.status].push(ticket);
  });

  return (
    <div className="">
      <h1>Tickets Grouped by Status</h1>
      <div className=''>
        {Object.keys(statusGroups).map(status => (
          <div className="" key={status}>
            <h2>Status: {status}</h2>
            <ul>
              {statusGroups[status].map(ticket => (
                <li className="" key={ticket.id}>
                  <p>{ticket.title}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
      
    </div>
  );
}

export default Status;
