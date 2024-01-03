import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';


export default function Auth(props) {
    const isLogin = props.isLogin
    const title = isLogin ? "Login" : "Register"
    const link = isLogin ? "/register" : "/login"
    const descriotion = isLogin ? "Register" : "Login"
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [successSubmit, setSuccessSubmit] = useState(false);
    const navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token')
    // const emailRef = useRef(null);


    const user = isLogin ? { email, password } : { email, username, password }

    // console.log(props)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Click!")
        doFetch({
            method: "get",
            data: { user }
        })

        if (successSubmit) {
            console.log("REDIRECT TO HOME");
            navigate('/')
        }
    }


    const [{ data, isLoading, error }, doFetch] = useFetch('/facts')


    useEffect(() => {
        if (!data) {
            return;
        }

        // Assuming data is an array and has at least one element
        const fact = data?.[0]?.fact;

        if (!fact) {
            console.error("Data is missing the expected 'fact' property.");
            return;
        }

        console.log("GET DATA:", fact);

        // Uncomment the line below if you want to store 'fact' in localStorage
        // localStorage.setItem('fact', fact);

        setToken(fact);
        setSuccessSubmit(true);

    }, [data, setToken, setSuccessSubmit]);


    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 mt-4'>
                <h1>{title}</h1>
                {error && (<h1>{error}</h1>)}
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={password}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group form-check">
                        <Link to={link}>{descriotion}</Link>
                    </div>
                    <button disabled={isLoading} type="submit" className="btn btn-primary">{title}</button>
                </form>
            </div>
        </div>
    )
}
