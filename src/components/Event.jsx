import React from "react";
/**
 * 
 * Creating an event component, the component
 * is a table cell, but customized with information
 * related to an event, such as location
 */
const Event = (props) =>{
    return (
        <td className={'Event ' + props.color} >
            <h5>{props.event}</h5>
        </td>
    )
}
export default Event;