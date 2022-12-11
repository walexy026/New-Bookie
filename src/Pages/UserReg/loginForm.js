import {  useState } from "react";
import { Validate } from "./validate";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
// useEffect, to be used later

const LoginForm = () => {
    const [values, setValue] = useState({
        phoneNumber: "",
        password: "",
      });
    
      const [errors, setErrors] = useState({});
      const navigate = useNavigate()
    
    //   const [correctData, setCorrectdata] = useState(false);
    
      const handleChange = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(Validate(values));
       
          axios.post('https://bookie-app.onrender.com/api/user/login', values).then((response) => {
            console.log(response);
            if(response?.status === 200){
              navigate("/Dashboard")
            }
           
            
          })
          .catch (function (error) {
           
            console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
          });
    
    
        // setCorrectdata(true);
      };
    
    //   useEffect(() => {
    //     if (Object.keys(errors).length === 0 && correctData) {
  
    //   }, [errors]);
    
      return { handleChange, handleSubmit, errors, values };

  
}

export default LoginForm