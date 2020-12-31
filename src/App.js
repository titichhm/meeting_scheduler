import React,{useEffect,useState, Component} from 'react';
import './App.css';
import Header from './components/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyA8aGu5ktFSd8PgCzuFEXomCLqxQ1Y52Fk",
  authDomain: "meeting-app-a8826.firebaseapp.com",
  databaseURL: "https://meeting-app-a8826.firebaseio.com",
  projectId: "meeting-app-a8826",
  storageBucket: "meeting-app-a8826.appspot.com",
  messagingSenderId: "498874439037"
};
firebase.initializeApp(config);


const App=()=> {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'http://fathomless-shelf-5846.herokuapp.com/api/schedule?date=%227/8/2019%22';
  const [allData,setData]=useState([]);
  
  useEffect(()=>{
    getData();
  },[]);

  const getData =  async () =>{
    const response= await fetch(proxyUrl + targetUrl);
    const data=await response.json();
    setData(data);
  }


  return( 

    <div className="App">
      <div style={{height:150,backgroundColor:"#9370DB",color:"white",fontSize:20,fontFamily:"Bahnschrift Light"}}>
        <div className="column">
          <b><br/><br/><FontAwesomeIcon icon={faArrowDown} /> Database Setup <FontAwesomeIcon icon={faArrowDown} /> </b>
        </div>
        <div className="column">
          <b><br/><FontAwesomeIcon icon={faArrowDown} />     Select a date (Default - 7/8/2019)     <FontAwesomeIcon icon={faArrowDown} /></b><br/> <br/>      
          <FontAwesomeIcon icon={faCalendarAlt} color='white'/>  <input type="date" style={{height:20}} className="DATE" onChange={v => getData(v.target.value)}/>
          <p className="warning">(Data might take some time load)</p>
        </div>  
      </div>

      <br/>
      <div className="row">
        <div className="column">
          <p></p>
        </div>

        <div className="column">{allData.map(dta=>(
          <Header head={dta.description} st={dta.start_time} et={dta.end_time} pt={dta.participants}/>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
