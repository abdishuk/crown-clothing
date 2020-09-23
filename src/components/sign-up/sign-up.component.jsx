
import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import{auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName:'',
             email:'',
             password:'',
             confirmpassword:''
        }
    }
    HANDLESUBMT=async(event)=>{
  event.preventDefault()
  const{displayName,email,password,confirmpassword}=this.state
  if(password!==confirmpassword){
      alert('passwords dont match')
      return
  }
  try{
    const{user}=await auth.createUserWithEmailAndPassword(email,password)
   await createUserProfileDocument(user,{displayName})
   this.state = {
    displayName:'',
    email:'',
    password:'',
    confirmpassword:''
}

  } catch(error){
      console.log(error)
  }
    }
    handlechange=(event)=>{
        const{name,value}=event.target
        this.setState({
            [name]:value
        })

    }
    
    render() {
        const{displayName,email,password,confirmpassword}=this.state
        return (
            <div className='sign-up'>
                <h1 className='title'>I do not have an account</h1>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.HANDLESUBMT}>
              <FormInput name='displayName' type='text' value={displayName} label='displayName' onChange={this.handlechange} required/>
              <FormInput name='email' type='email' value={email} label='Email' onChange={this.handlechange} required/>
              <FormInput name='password' type='password' value={password} label='password' onChange={this.handlechange} required/>
              <FormInput name='confirmpassword' type='password' value={confirmpassword} label='ConfirmPassword' onChange={this.handlechange} required/>
              <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
                
            </div>
        )
    }
}

export default SignUp
