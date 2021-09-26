import React from 'react'

const Step3 = ({handleChange, errors, phone_number, verification_id}) => {

    return (
        <div>
            <h5 className="mt-4 mb-8">User Authentication</h5>
            <div className="block mt-6">
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">+234</span>
                <input type="text"
                  name="phone_number"
                  onChange = {handleChange}
                  value ={phone_number }
                  class="form-control"
                  placeholder="08122394673"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"/>
            </div>
                {errors.phone_number && <p className = "text-danger">{errors.phone_number}</p>}
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Verification ID</span>
                <input type="text" name="verification_id" onChange = {handleChange}
                    value ={verification_id}
                    className="form-control" 
                    placeholder="Enter NIN or Passport verification number"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"/>
            </div>
            {errors.verification_id && <p className = "text-danger">{errors.verification_id}</p>}
        </div>
        </div>
    )
}

export default Step3
