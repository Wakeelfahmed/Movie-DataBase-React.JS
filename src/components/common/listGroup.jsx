import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useMediaQuery } from 'react-responsive';

const ListGroup = (props) => {
    const {items, textProperty, 
        valueProperty, 
        onItemSelect,
        selectedItem
    } = props; 
    
    let smallScreen = useMediaQuery ({query: '(max-width: 767px)'});
    return (
        <ul className={ useMediaQuery ({query: '(max-width: 767px)'}) ? "list-group list-group-horizontal"  : "list-group"}>
            {items.map(item=>(
                <li key={item[valueProperty]}
                  onClick={() => onItemSelect(item)} 
                  className={item === selectedItem 
                    ? "list-group-item active"
                     : "list-group-item"} 
                >
                    {item[textProperty]}
                </li>
          ))}
        </ul>
    );
}
ListGroup.defaultProps = {
    textProperty:"name",
    valueProperty:"_id"
} 

export default ListGroup;