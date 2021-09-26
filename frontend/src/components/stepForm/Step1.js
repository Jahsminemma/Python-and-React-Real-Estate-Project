import React from 'react'
import PropTypes from "prop-types"

const Step1 = ({ full_name, email, password1, password2, handleChange, errors }) => {
   
    return (
        <div>
            <h4 className="text-secondary mt-2">Personal Details</h4>
           <div className="input-group mb-3">
                <span className
                ="input-group-text" id="basic-addon1">Fullname or Company</span>
                <input type="text"
                    className="form-control"
                    placeholder="full name"
                    name ="full_name"
                    aria-label="full_name"
                    value = {full_name}
                    onChange = { handleChange }
                    aria-describedby="basic-addon1"
                  
                />
            </div>
            {errors.full_name && <p className = "text-danger d-block">{errors.full_name}</p>}
            <div className="input-group mb-3">
                <input type="email"
                    className="form-control"
                    placeholder="email"
                    aria-label="email"
                    name = "email"
                    onChange = { handleChange }
                    value = {email}
                    required
                    aria-describedby="basic-addon2" 
                />
                <span class="input-group-text" id="basic-addon2">@example.com</span>
            </div>
                {errors.email && <p className = "text-danger">{errors.email}</p>}
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                <input type="password"
                name ="password1"
                onChange = { handleChange }
                value ={password1}
                required
                className="form-control"
                id="exampleInputPassword1"/>
                {errors.password1 && <p className = "text-danger">{errors.password1}</p>}
                    
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">Confirm password</label>
                <input type="password"
                name="password2"
                onChange = { handleChange }
                value ={password2}
                className="form-control"
                required
                id="exampleInputPassword2"
                    />
                {errors.password2 && <p className = "text-danger">{errors.password2}</p>}
            </div>
        </div>
    )
}

Step1.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
}

export default Step1
