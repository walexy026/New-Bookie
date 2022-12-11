import {  useState } from "react";
import { Validate } from "./validate";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
// useEffect to be used later

const Useform = () => {
  const [values, setValue] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  // const [correctData, setCorrectdata] = useState(false);

  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validate(values));
   
      axios.post('https://bookie-app.onrender.com/api/user/signup', values).then((response) => {
        if(response?.status === 201) {
          localStorage.setItem('createdId',  response?.data?.userId);
          navigate('/otp')
        }
        
        console.log(response.data.token);
      })
      .catch (function (error) {
        console.error(error.response.data);     
      });


    // setCorrectdata(true);
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && correctData) {
  //       navigate("/page/account");
  //   }
  // }, [errors]);

  return { handleChange, handleSubmit, errors, values };
};

export default Useform;
