import { Tabs, message } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';

import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import Admin from '.';

function Login() {
    const dispatch = useDispatch();
    // const [admin,setAdmin]=useState(true)
    const [user, setUser] = React.useState({
        username: "",
        password: ""
    })

    const login = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("https://capstone-0wh7.onrender.com/api/portfolio/admin-login", user);
            dispatch(HideLoading())
            
             if (response.data.success) {
         message.success(response.data.message)
            //  setAdmin(!admin);
            sessionStorage.setItem("token", response.data);
            window.location.href ="/admin";

         }
             else {
             message.error(response.data.message)
            }
        } catch (error) {
            message.error(error.message);
            dispatch(HideLoading())
        }
    }
    return (
        <div className='d-flex  justify-content-center  align-items-center mt-5 width-auto'>
            <div className='d-flex gap-5 flex-column justify-content-center shadow border border-secondary p-4'>
                <h1>Admin Login</h1>
                <input type="text" placeholder="Username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })} />
                <input type="text" placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button className='ms-5 me-5 btn btn-secondary'
                    onClick={login}>Login</button>
                    
            </div>
            {/* <div>
            {admin ?  <Admin/>:null}
            </div> */}
        </div>
    )
}

export default Login