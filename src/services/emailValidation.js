import axios from "axios";

const validate = async (email) => {
  const response = await axios.get(
    `https://emailvalidation.abstractapi.com/v1/?api_key=YOUR_API_KEY=${email}`
  );
  return response?.data?.deliverability ;
};

export default validate;
