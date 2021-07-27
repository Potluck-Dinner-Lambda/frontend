import React,{useState} from 'react'
import validation from './validation'
import axios from 'axios'

function SignupForm() {
    const [values, setValues] = useState({
        username:"",
        password:"",
    })
    const[errors, setErrors] =useState({});
    const handleChange = (event) =>{
     setValues({
         ...values,
         [event.target.name]:event.target.value,
     })   
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values))
        registerUser(values);

    }
    const registerUser = (newUser) =>{
        console.log(newUser)
        axios.post('https://ft-potluck-planner-backend.herokuapp.com/api/auth/register', newUser)
        .then(res =>{
            console.log(res.data)
            setValues(res.data)
        })
    }


    return (
        <div className="container">
            <div className="app-wrapper">
                <h2 className="title">Create Account</h2>
            </div>
            <form className="form-wrapper">
                <div className="username">
                    <label className="label"> Username</label>
                    <input className="input" type="text" name="username" value={values.username} onChange={handleChange}/>
                    {errors.username && <p className="errors">{errors.username}</p>}
                </div>
                <div className="password">
                    <label className="label">Password</label>
                    <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p className="errors">{errors.password}</p>}
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm;
