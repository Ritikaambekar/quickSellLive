import React,{useState} from "react";
import StatusComponent from "../../Groups/Status";
import UserComponent from "../Fetchs/UserComponent";
import BoardComponent from "../Fetchs/BoardComponent";
const Navbar = () => {
    const [activeComponent, setActiveComponent] = useState('A');
  
    const toggleComponent = (componentName) => {
      setActiveComponent(componentName);
    };
  
    let componentToShow = null;
  
    switch (activeComponent) {
      case 'Prioritys':
        componentToShow = <BoardComponent />;
       
      case 'Status':
        componentToShow = <StatusComponent />;
     
      case 'User':
        componentToShow = <UserComponent />;
     
      default:
        componentToShow = <BoardComponent />;
    }
  
    return (
      <div>
       <nav className="app_navbar">
            <button onClick={() => toggleComponent('Prioritys')}>Show Component A</button>
            <button onClick={() => toggleComponent('Status')}>Show Component B</button>
            <button onClick={() => toggleComponent('User')}>Show Component C</button>
            {componentToShow}

       </nav>

        
      </div>
    );
  };
  


export default Navbar;

