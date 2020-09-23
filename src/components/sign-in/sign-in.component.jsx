import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from  '../../components/custom-button/custom-button.component'
import{ signInWithGoogle,auth} from '../../firebase/firebase.utils'

export class SignIncomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    handleSubmit=async(event)=>{
      event.preventDefault()
      const{email,password}=this.state
      try{
        await auth.signInWithEmailAndPassword(email,password)
        this.setState({
            email:'',
            password:''
        })
      } catch(e){
         console.log(e)
      }
    
    }
    handleChange=(event)=>{
 const{value,name}=event.target
 this.setState({
     [name]:value
 })
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput  handleChange={this.handleChange}  name='email' type='email' value={this.state.email} label='email' required/>
                    
        
                <FormInput  onChange={this.handleChange} name='password' type='password' label='password' value={this.state.password} required/>
                    <div  className='buttons'>
                    <CustomButton type='submit' >SIGN IN</CustomButton><br/>
                    <CustomButton isGooglesignIn  onClick={ signInWithGoogle} > {''} SIGN IN With Google{''}</CustomButton>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignIncomponent
