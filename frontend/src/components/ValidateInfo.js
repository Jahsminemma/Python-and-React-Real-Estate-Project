
export default function ValidateInfo(data){ 
    const error = {}
    String.prototype.isNumber = function(){return /^\d+$/.test(this);}
  
    if(!data?.full_name){
        error.full_name = "Full name is required"
    }

    if(!data?.email){
        error.email = "Email required"
    }else if(data?.email && !RegExp(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/).test(data.email)){
        error.email = "Email is invalid"
    }

    if(!data?.password1){
        error.password1 = "Password is required"
    }else if(data.password1.length < 8){
        error.password1 = "Password must be atleast 8 characters long"
    }
    else if(data?.password1 && RegExp(/^\d+\.\d+$|^\d+$/).test(data.password1)){
        error.password1 = "This password is entirely numeric."
    }
    if(data?.password2 !== data.password1){
        error.password2 = "Password does not match"
    }
    if(!data?.account_type){
        error.account_type = "Account type required"
    }
    if(!data?.account_usage){
        error.account_usage = "Account usage required"
    }
    if(!data?.phone_number){
        error.phone_number = "Phone number required"
    }
    if(!data?.verification_id){
        error.verification_id = "Verification id is required"
    }

    return error
}