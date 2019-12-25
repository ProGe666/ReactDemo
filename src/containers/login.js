
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import './Login.scss';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {login} from "../actions/auth.action";
import Snackbar from "@material-ui/core/Snackbar";


const Login = (props) => {
    // (props) =>{
    //     return <input {...props}/>
    // }
    //const [username,setUsername] = React.useState('');
    // array distructure
    //const [password,setPassword] = React.useState('');

    const [user,setUser] = React.useState({
        username:'',
        password:''
    });
    const [open, setOpen] =React.useState(false);
    const[loginMsg,setLoginMsg] = React.useState('');
    const handleLogin =(event) =>{
        event.preventDefault();
        console.log(user);
        props.login(
            user,
            ()=>{
                setOpen(true);
                setLoginMsg('Logged in successfully!')
                props.history.goBack();
            },
            ()=>{
                setOpen(true);
                setLoginMsg('Username/Password does\'t match')
            }
            )
    };
    const handleFormControl = (event)=>{
        //setUsername(event.target.value);
        setUser({
            ...user,
            [event.target.id]:event.target.value
        })
    };
    const handleClose =() =>{
        setOpen(false);
    };
    return (
       // <h4>Log in</h4>
        <Card className="Card">
            <h4 className="card-title">Login</h4>
            <CardContent>
                <form onSubmit={handleLogin}>
                    <div className="card-form-control">
                        <TextField
                            id="username"
                            label="Username"
                            value={user.username}
                            onChange={handleFormControl}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            value = {user.password}
                            type="password"
                            onChange={handleFormControl}
                        />

                    </div>

                    <Button type = "submit" className="form-submit" variant="contained" color="primary">
                        Login
                    </Button>
                    <Snackbar
                        className={loginMsg.includes('success')? 'success':'fail'}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={open}
                        autoHideDuration={1500}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={loginMsg}
                        onClose={handleClose}

                    />
                </form>
            </CardContent>
        </Card>

    );

};


//react redux provides hooks to simulate mapStateToProps/mapDispatchToProps
//which is called useSelector/useDispatch
export default connect(null,{login})(Login);
