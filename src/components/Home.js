import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';


function Home(props) {
    // const{ user, setUser }=props;
    const [user, setUser]= useState({username:"", password:""});
    const[form , setForm] = useState({potluck_name : "",
    potluck_date :  Date().toLocaleString(),
    potluck_time : "9:00AM",
    potluck_location: "",
})
    const [name, setName]= useState("")
    useEffect(() => {
        const username = JSON.parse(localStorage.getItem('user')).message
        setName(username)
    }, [])
    // console.log('Home',user)
    const setPlan = (newPlan)=>{

        const headers = {
            authorization: `${user.token}`,
            'Access-Control-Allow-Origin': true,
            Accept: 'application/json',
            'Content-Type':'application/json',
        };

        console.log("making is call now", user.token);
        axios.post('https://ft-potluck-planner-backend.herokuapp.com/api/potlucks/', newPlan, 
        {headers})
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    const hist = useHistory();
    const routeToLogin =() =>{
        hist.push('/');}

    const Logout =()=>{
        setUser({username:"", password:""});
        localStorage.removeItem('user')
        routeToLogin();
    }
    const submit = (e) =>{
        e.preventDefault();
        setPlan(form);
    }

    return (
        <div>
            <header className="App-Header">
                <div className = "welcome">
				<h1>Potluck planner</h1>
                <h2><span>{name}</span></h2>
          		<button onClick={Logout}>Logout</button>
                </div>
            </header>
        	<div>
				<h1>Potluck planner</h1>
                <h2>Let get started with Potluck</h2>
                <form onSubmit={submit}>
                <div className="form-group">
                   
                    <label htmlFor='potluckName'>PotluckName</label>
                    <input type ="text" name="potluck_name" id="potluck_name" onChange={e => setForm({...form, potluck_name: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Date">potluckDate</label>
                    <input type="date" name="potluck_date" id="potluck_date" onChange={e => setForm({...form, potluck_date: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Time">potluckTime</label>
                    <input type="time" name="potluck_time" id="potluck_time" onChange={e => setForm({...form, potluck_time: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Location">potluck_location</label>
                    <input type="location" name="potluck_location" id="potluck_location" onChange={e => setForm({...form, potluck_location: e.target.value})}/>
                </div>
                <input type="submit" value="PLAN" />
                </form>

    
            </div>	
        </div>
    )
}

export default Home

