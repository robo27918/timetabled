import './App.css';
import Calendar from './components/Calendar';
const App = () => {
  return (
    <div className="App">
      <img src="https://www.flysanjose.com/sites/default/files/sites/default/files/blog-photos/Mexico-City-Depositphotos_13449494_edited.jpg"/>
      <h1>Seven Days in Mexico City  🇲🇽</h1>
      <h2> Welcome fellow traveler! Check out this calendar to get 
        to know the city and see all the sights during your stay
      </h2>
      <Calendar />
    </div>
  )
} 
export default App