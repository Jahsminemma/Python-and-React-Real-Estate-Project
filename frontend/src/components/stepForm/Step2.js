import React from 'react'

const Step2 = ({ account_type, account_usage, handleChange, handleUpload, errors }) => {
    return (
        <div>
            <div className="col-12">
                <h6 className="mt-3 text-secondary">Select Account Type</h6>
                <select className="form-select" 
                name="account_type"
                 onChange = {handleChange}
                 value ={ account_type }
                 aria-label="select">
                     <option selected value="">Choose account type...</option>
                    <option value="Client">Client</option>
                    <option value="Agent">Agent</option>
                </select>
                <div className="error__message">
                {errors.account_type && <p className = "text-danger">{errors.account_type}</p>}
                </div>
            </div>
            <div class="col-12">
            <h6 className="mt-3 text-secondary">Select Account usage</h6>
                <select className="form-select mb-4"
                  name="account_usage"
                  onChange =  { handleChange }
                  value ={ account_usage }
                  aria-label="Default select example">
                    <option selected value="">Choose account usage...</option>
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                </select>
                <div className="error__image">
                    {errors.account_usage && <p className = "text-danger">{errors.account_usage}</p>}
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="file" name="profile_image" onChange={handleChange} class="form-control" id="inputGroupFile02"/>
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>
        </div>
    )
}

export default Step2
