import { useState } from "react";


export const useForm = (validate, onSubmit ) => {
    const [data, setData] = useState({});
    const [image, setImage] = useState({})


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

      if(e.target.name ==="profile_image"){
        setImage({
          ...image,
          profile_image : e.target.files[0]
        });
      }else{
      setData({
        ...data,
        [e.target.name] : e.target.value
      });
    }
    };


    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(data));
      onSubmit()
    };

    return {
      data,
      image,
      handleChange,
      handleSubmit,
      errors,
      setErrors
    };
  };