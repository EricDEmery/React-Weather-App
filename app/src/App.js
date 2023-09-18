import logo from './logo.svg';
import axios from 'axios'
import './App.css';

export default function App() {

  function getWeatherData() {

    axios .get('https://api.openweathermap.org/data/2.5/weather?zip=40701,us&appid=4ae6e899c88552da0e4cb0abb5724071')
    .then((response) => {
        //handle success
        console.log(response);
    })
    .catch((error) => {
        //handle error
        console.log(error);
    })
    
    .finally(function () {
    
    });
    }

  return (
    <>
    getWeatherData()
    </>
        )

}
