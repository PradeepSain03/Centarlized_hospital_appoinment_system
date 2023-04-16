import React, { useEffect } from 'react';
import axios from 'axios';
import Layout from 'antd/es/layout/layout';
import LayOut from '../component/Layout';

const Home = () => {
    const getUserData = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/api/v1/user/getUserData", {}, {
                headers: {
                    Authorization: "Bearer" + localStorage.getItem("token"),
                },
            }
            );
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getUserData()
    }, []);

    return (
      <LayOut>
            <h1>Home</h1>
            </LayOut> 
    )
}

export default Home;