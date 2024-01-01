import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';

export default function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [getData, setGetData] = useState(false);
    // const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setGetData(true);
    }


    const { data, isLoading, error } = useFetch('https://catfact.ninja/facts')

    console.log(data)


    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 mt-4'>
                <h1>{isLoading}</h1>
                <h1>{error}</h1>

                <form onSubmit={handleSubmit}>
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
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button disabled={getData} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
