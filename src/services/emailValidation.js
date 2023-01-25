import axios from "axios";

const validate = async (email) => {
  const response = await axios.get(
    `https://emailvalidation.abstractapi.com/v1/?api_key=7e387e01d6e74150904498952e707aae&email=${email}`
  );
  return response?.data?.deliverability ;
};

export default validate;
