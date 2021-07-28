import axios from 'axios';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import SignupForm from './SignupForm';


function LoginForm(props) {
    // const{ user, setUser} = props
    const [user, setUser]= useState({username:"", password:"", message:""});
	const [error, setError] = useState("");
    const hist = useHistory();
    const routeToHome =() =>{        
        hist.push('/home');
        console.log(user)
    }

    const submitHandler = e =>{
        e.preventDefault();
        loginUser(user);
    }

    const loginUser = (newLogin)=>{
        axios.post("https://ft-potluck-planner-backend.herokuapp.com/api/auth/login", newLogin)
        .then(res => {            
            setUser(res.data.message)
            localStorage.setItem("user", JSON.stringify(res.data))
            if(res.status == '200'){
                routeToHome();
            }
        })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/*Error*/}
                <div className="form-group">
                    <label htmlFor='username'>Username</label>
                    <input type ="text" name="username" id="username" onChange={e => setUser({...user, username: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setUser({...user, password: e.target.value})}/>
                </div>
                <input type="submit" value="LOGIN" />
                <div>Don't have an account<SignupForm/></div>
            </div>
        </form>
    )
}

export default LoginForm;