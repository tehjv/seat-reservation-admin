import React from "react";
import { Icon, Input, Button } from 'semantic-ui-react'

const Login = ({ props }) => {
    const login = () => {
        console.log('logging in')
        props.setIsLoggedIn(true);
    }

    return (<div className="grid grid-cols-1 grid-rows-3 h-full">
        <div>
            <img></img>
        </div>
        <div className="row-span-2">
            <div className="m-auto w-max h-48 flex flex-col justify-around">
                <div>
                    <Input iconPosition='left' placeholder='Username'>
                        <Icon name='user' />
                        <input />
                    </Input>
                </div>
                <div>
                    <Input iconPosition='left' placeholder='Password'>
                        <Icon name='lock' />
                        <input />
                    </Input>
                </div>
                <div className="text-center">
                    <Button primary onClick={login}>Login</Button>
                </div>
            </div>
        </div>
    </div>);
}

export default Login;
