import React, { useState, useEffect } from 'react';


function User() {
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
    <div className="">
      <h1>Tickets Grouped by Users</h1>
      <div className=''>
        {Object.keys(userGroups).map(userId => (
          <div  className="" key={userId}>
            <h2>User: {userNameMap[userId]}</h2>
            <ul>
              {userGroups[userId].map(ticket => (
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

export default User;
