import React from "react";
import Event from "./Event";
const Calendar = () => {
    return (<div className="Calendar">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td className="time">8 AM</td>
                <Event event= "Breakfast ☕️" color="green"/>
                <td></td>
                <td></td>
                <td></td>
                <Event event= "Breakfast at Cafe Nin ☕️" color="blue"/>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">9 AM</td>
                <td></td>
                <td></td>
                <Event event = "Breakfast at El Zocalo" color="pink"/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">10 AM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">11 AM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">12 PM</td>
                <td></td>
                <td></td>
                <Event event="Mercado Jamaica" color="dodgerblue"/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time"> 1 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event="Vist Palacio Nacional" color="pink"/>
                <td></td>
             </tr>

             <tr>
                <td className="time">2 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time"> 3 PM</td>
                <td></td>
                <Event event="Visit Xochimilco" color="green"/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">4 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event="Omusubi house"color="dodgerblue"/>
             </tr>

             <tr>
                <td className="time">5 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <Event event="Museo Frida Kahlo" color="blue" />
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">6 PM</td>
                <td></td>
                <Event event={"Chapultepec Castle"} color={"lightpurple"}/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">7 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event="Dinner at Mercaderes" color ="green"/>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">8 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>

             <tr>
                <td className="time">9 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
             </tr>
            </tbody>
        </table>
    </div>)

}
export default Calendar;