import React from 'react';
import axios from 'axios';
import styles from './signin.module.css';
//import './another-stylesheet.css';
import TextField from '@material-ui/core/TextField';



class Signin extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name)
        console.log(event.target.value)
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post("https://hmsback.herokuapp.com/openAPI/login", this.state).then(res => { console.log(res) }).catch(res => { console.log(res) })

        // const history = useHistory();
        // this.navigateTo = () =>
        this.props.history.push('/signin');//eg.history.push('/login');
    }

    render() {

        return (
            <div className={styles.app}>
                <div className='topdiv'>
                    <h1 className='h1'>SIGNUP FORM</h1>

                </div>
                <div className={styles.middivv}>
                    <form className={styles.form}>
                        <div className={styles.divv}>
                            <TextField
                                className={styles.fill}
                                required
                                type='text'
                                id="outlined-required"
                                label="USER NAME"
                                variant="outlined"
                                inputProps={{ 'pattern': '[A-Za-z]{8,}' }}
                            />
                        </div>
                        <div className={styles.divv}>
                            <TextField className={styles.fill} required id="outlined-required" label="PASSWORD" variant="outlined"
                                inputProps={{ 'pattern': '[A-Za-z]{8,}' }} name='password'
                                title='password input' helperText='Letters, numbers and special character' />
                        </div>
                        <div className={styles.divv}>
                            <h6>
                                <a href='./signup' >Don't have an account</a>
                            </h6>
                            <button onSubmit={this.handleSubmit}>REGISTER</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Signin;