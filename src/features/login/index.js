import React from "react";
import { Icon, Input, Button } from 'semantic-ui-react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    input: {
        border: `1px solid ${theme.palette.secondary.light} !important`,
        color: `${theme.palette.text.secondary} !important`,
        padding: "1rem 2rem !important",
        '&:hover, &:active, &:focus, &:focus-visible': {
            border: `1px solid ${theme.palette.secondary.main} !important`,
            color: `${theme.palette.text.primary} !important`,
            outline: 'none !important'
        }
    },
    login: {
        color: `${theme.palette.primary.contrastText} !important`,
        background: `${theme.palette.primary.main} !important`,
        border: `1px solid ${theme.palette.primary.light} !important`
    }
}));

const Login = ({ props }) => {
    const themeClasses = useStyles();
    const login = () => {
        console.log('logging in')
        props.setIsLoggedIn(true);
    }

    return (<div className="grid grid-cols-1 grid-rows-3 h-full">
        <div>
            {/* <img></img> */}
        </div>
        <div className="row-span-2">
            <div className="m-auto w-max h-48 flex flex-col justify-around">
                <div>
                    <Input iconPosition='left' placeholder='Username'>
                        <Icon name='user' />
                        <input className={themeClasses.input} />
                    </Input>
                </div>
                <div>
                    <Input iconPosition='left' placeholder='Password'>
                        <Icon name='lock' />
                        <input className={themeClasses.input} />
                    </Input>
                </div>
                <div className="text-center">
                    <Button onClick={login} className={themeClasses.login}>Login</Button>
                </div>
            </div>
        </div>
    </div>);
}

export default Login;
