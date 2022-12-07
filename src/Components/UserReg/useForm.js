import { useEffect, useState } from "react";
import { Validate } from "./validate";
import axios  from "axios";


const Useform = () => {
  const [values, setValue] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [correctData, setCorrectdata] = useState(false);

  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validate(values));
   
      axios.post('https://bookie-app.onrender.com/api/user/signup', values).then((response) => {
        console.log(response);
        
        console.log(response.data.token);
      })
      .catch (function (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
      });


    setCorrectdata(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && correctData) {
      //   navigate("/page/account");
    }
  }, [errors]);

  return { handleChange, handleSubmit, errors, values };
};

export default Useform;
