import React,{useState} from "react";
import "./App.css"
import Board from "./components/Board/Board";
import Priority from "./Groups/Priority";
import BoardComponent from "./components/Fetchs/BoardComponent";
import StatusComponent from "./components/Fetchs/StatusComponent";
import UserComponent from "./components/Fetchs/UserComponent";
import Navbar from "./components/Navbar/Navbar";
import { Sliders } from "react-feather";



function App(){
    const [currentPage, setCurrentPage] = useState('home'); // Default page is 'home'

    const renderPage = () => {
        switch (currentPage) {
        case 'home':
            return <StatusComponent />;
        case 'about':
            return <BoardComponent />;
        case 'contact':
            return <UserComponent />
        default:
            // return <Home />;
        }
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <div className="app">
           <nav className="app_navbar">
           {/* <div class="dropdown">

                <button class="dropdown-toggle" onClick={toggleDropdown}>Display</button>
                <div class="dropdown-content">
                    <a class="dropdown-item" href="#" onClick={() => setCurrentPage('home')}>Group-By-Status<button>yes</button></a>{"    "}
                    <a class="dropdown-item" href="#" onClick={() => setCurrentPage('about')}>Group-By-Priority</a>{"    "}
                    <a class="dropdown-item" href="#" onClick={() => setCurrentPage('contact')}>Group-By-User</a>
                </div>
            </div> */}
            <div className="dropdown">
                <ul>
                    <button className="dropdown-toggle" onClick={toggleDropdown}>
                        <Sliders />
                        Display
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <a class="dropdown-item" href="#" onClick={() => setCurrentPage('home')}>Group-By-Status</a>{"    "}
                            <a class="dropdown-item" href="#" onClick={() => setCurrentPage('about')}>Group-By-Priority</a>{"    "}
                            <a class="dropdown-item" href="#" onClick={() => setCurrentPage('contact')}>Group-By-User</a>
                            
                        </div>
                    )}
                        
                        {/* <a href="#" onClick={() => setCurrentPage('home')}>Group-By-Status</a>{"    "}
                        <a href="#" onClick={() => setCurrentPage('about')}>Group-By-Priority</a>{"    "}
                        <a href="#" onClick={() => setCurrentPage('contact')}>Group-By-User</a> */}
                </ul>
            </div>

                
          </nav>
            <div className="app_outer">
              <div className="app_boards">
                {renderPage()}
                {/* <UserComponent /> */}
                {/* <Board />
                <Board /> */}
              
               </div>
           </div>
           {/* <main>{renderPage()}</main> */}

           {/* <div className="app_navbar">
                <ul>
                    <li>
                        <button onClick={() => setCurrentPage('home')}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => setCurrentPage('about')}>About</button>
                    </li>   
                </ul>
              
           </div>

           <div className="app_outer">
              <div className="app_boards">
              <BoardComponent />
              <UserComponent />
              <StatusComponent />
              
               </div>
           </div> */}
         <div>
         {/* <Priority /> */}

        </div>
        </div>
      
    )
}

export default App;