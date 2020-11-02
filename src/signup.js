import React from 'react';
import styles from './signup.module.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


class Signup extends React.Component {

    constructor(props) {
        super(props);
      this.state = {
            firstName :"",
            lastName: "",
            username : "",
            emailAddress : "",
            country : "",
            gender : "",
            phoneNumber : "",
        }
    }

   

   


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name)
        console.log(event.target.value)
    }

    handleSubmit = event =>{
        event.preventDefault();
        axios.post("https://hmsback.herokuapp.com/openAPI/register", this.state).then(res=>{console.log(res)}).catch(res=>{console.log(res)})

        // const history = useHistory();
        // this.navigateTo = () =>
         this.props.history.push('/signin');//eg.history.push('/login');
    }

render() {
    
return (
    <div className={styles.app}>
        <div className={styles.topdiv}>
            <h1 className='h1'>SIGNUP FORM</h1>

        </div>
        <div className='middiv'>
            <form onSubmit={this.handleSubmit} >
                <div>
                    <TextField className="fill-row" type='text' id="outlined-required" label="FIRST NAME" variant="outlined"
                        onChange={this.handleChange} required inputProps={{ 'pattern': '[A-Za-z]{5,}' }} />
                    {/* onChange={handleFirstnameChange} required inputProps={{  'pattern': /(?=.*[a-z])(?=.*[A-Z]).{6,}/}} /> */}

                </div>
                <div>
                    <TextField className="fill-row" type='text' id="outlined-required" label="LAST NAME" variant="outlined"
                        onChange={this.handleChange} required inputProps={{ 'pattern': '[A-Za-z]{5,}' }} />
                </div>
                <div>
                    <TextField className="fill-row" type='text' id="outlined-required" label="USER NAME" variant="outlined"
                        onChange={this.handleChange} required inputProps={{ 'pattern': '[A-Za-z]{3,}' }} />
                </div>
                <div>
                    <TextField className="fill-row" type='text' id="outlined-required" label="EMAIL ADDRESS" variant="outlined"
                        onChange={this.handleChange} required inputProps={{ 'pattern': '[A-Za-z0-9]+[@][A-Za-z]+[.][a-zA-Z]{3}' }} />
                </div>
                <div>
                    <select type='select' name="country" onChange={this.handleChange} required>
                        <option  >SELECT A COUNTRY *</option>
                        <option value="NIGERIA" >NIGERIA</option>
                        <option value="GHANA">GHANA</option>
                        <option value="USA">USA</option>
                        <option value="SPAIN">SPAIN</option>
                    </select>
                </div>

                <div className='radio'>
                    <div className='male'>
                        <label htmlFor="female">Male</label>
                        <input type="radio" id="male" name="gender" value="male" onChange={this.handleChange} required /><br />
                    </div>
                    <div className='female'>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female" onChange={this.handleChange} required /><br />
                    </div>
                </div>

                <div>
                    <TextField className="fill-row" type='tel' id="outlined-required" label="PHONE NUMBER" variant="outlined"
                        onChange={this.handleChange} required inputProps={{ 'pattern': '[0-9]{11}' }} />
                </div>

                <div>
                    <h6>
                        <a href='./signin'>Already have an account</a>
                    </h6>
                    <button onSubmit = {this.handleSubmit} >REGISTER</button>
                </div>
            </form>
        </div>
    </div>
);
    
}
}



export default Signup;