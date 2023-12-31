import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../../app/store';

const Login = ({ name, displayName, setForm }) => {
    const { error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const formName = evt.target.name;
        const email = evt.target.email.value;
        const password = evt.target.password.value;
        dispatch(authenticate({ email, password, method: formName }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit} name={name}>
                <div>
                    <label htmlFor="email">
                        <small>email</small>
                    </label>
                    <input name="email" type="text" />
                </div>
                <div>
                    <label htmlFor="password">
                        <small>Password</small>
                    </label>
                    <input name="password" type="password" />
                </div>
                <div>
                    <button type="submit">{displayName}</button>
                </div>
                {error && <div> {error} </div>}
            </form>
            <button onClick={() => setForm(false)}>Create account?</button>
        </div>
    );
};

export default Login;
