import React, { Fragment, useState } from 'react'
import Step1 from "./stepForm/Step1"
import Step2 from "./stepForm/Step2"
import Step3 from "./stepForm/Step3"
import Button from '@material-ui/core/Button';
import { useForm } from './useForm';
import validate from './ValidateInfo';
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../redux/actions/auth';
import Alerts from './Alert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { setAlert } from '../redux/actions/actionTypes';


const Signup = () => {
const [formStep, setFormStep] = useState(1)
const [totalStep] = useState(3)
const dispatch = useDispatch()
const alerts = useSelector(state => state.alert)
const onSubmit = () =>{
  const formData = new FormData()
  formData.append("full_name",  data.full_name)
  formData.append("email",  data.email)
  formData.append("password1",  data.password1)
  formData.append("password2",  data.password2)
  formData.append("account_type",  data.account_type)
  formData.append("account_usage",  data.account_usage)
  formData.append("profile_image", image.profile_image, image.profile_image.name)
  formData.append("phone_number",  data.phone_number)
  formData.append("verification_id",  data.verification_id)

  dispatch(signup(formData))

    if(alert.alertType === "success"){
      setFormStep(initial => initial + 1)
    }
}

const { data, image, handleChange, handleSubmit, setErrors, errors } = useForm(validate, onSubmit)

  const completeStep = () =>{
    const propOwn = Object.getOwnPropertyNames(errors);
    if(formStep === 1 && ( propOwn.length === 4 || propOwn.length < 4)){
      setFormStep(initial => initial + 1)
    }
    if(formStep === 2 && (propOwn.length === 2 || propOwn.length === 0)){
      setFormStep(initial => initial + 1)
    }
    else{
      setAlert("go back to check for errors", 'error')
      setErrors(validate(data))
    }
  }

  const previousStep = () => {
    if(formStep > 1){
        setFormStep(initial => initial - 1)
        setErrors(validate(data))
    }
  }

  

  const renderButton = () => {
    if(formStep > 3) return undefined
    else {
        return (
          <div className="button text-right">
          {formStep === 3 ? <Button onClick = { handleSubmit } color ="secondary" variant="contained">
            Create Account
            </Button> :
          <Button onClick = { completeStep } color ="secondary" variant="contained">
            {"Next >>>"}
            </Button>}
        </div> 
        )
    }
  }

  return (
    <div>
      <div className="sign_up">
                <h2 className="text-secondary mx-3 mt-4"> New Account</h2>
                <div className="form__container">
                    <div className="container card p-3">
                      <Alerts/>
                        <form className="align-items-center">
                          <div className="prev d-flex align-items-center justify-content-start bg-secondary">
                            {formStep > 1 && <ArrowBackIosIcon className="mx-3 text-white" onClick = {previousStep}>Back</ArrowBackIosIcon>}
                            <p style={{color:"white", position:"relative", top:"6px", marginLeft:"10px"}}>Step {formStep} of {totalStep}</p>
                          </div>
                             {formStep === 1 && <Step1 handleChange = { handleChange }
                                full_name={data.full_name}
                                email ={data.email} 
                                password1={data.password1}
                                password2 ={data.password2}
                                errors ={errors}
                             />}
                             {formStep === 2 && <Step2 handleChange ={ handleChange }
                                  account_type={data.account_type}
                                  account_usage={data.account_usage}
                                  profile_image={data.profile_image}
                                  errors ={errors}
                             />}
                             {formStep === 3 && <Step3 handleChange ={ handleChange }
                                errors ={errors}
                                phone_number ={data.phone_number}
                                verification_id={data.verification_id}
                             />}
                             {renderButton()}
                             {formStep === 4 && <>
                                <div className="form__success bg-success text-white text-center card">
                                  <h3>Congratulations</h3>
                                  <p>Your account has been created successfully</p>
                                </div>
                             </>}
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Signup
