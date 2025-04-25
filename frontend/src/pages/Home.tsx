import classes from '@/styles/home.module.css'

import Sidebar from '../Components/Sidebar'
import Content_Home from '../Components/Content_Home'
import { useGlobalState } from "@/context/state.tsx";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


export default function Home() {
    const [user] = useGlobalState("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.auth) {
            console.log("Failed to Authenticate");
            navigate("login");
        }
    }, [user.auth, navigate]);

    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <Sidebar />
                <Content_Home />
            </div>
        </div>
    )
}