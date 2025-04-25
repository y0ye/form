import { Outlet } from "react-router"
import classes from '@/styles/authlayout.module.css'

export default function AuthLayout() {
    return (
        <div className={classes.authwrapper}>
            <Outlet />
        </div>
    )
}