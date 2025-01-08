import axios from "axios";

export const getContactFormData = () => {
  return axios.get(`${import.meta.env.VITE_API_URL}/contact_us`);
};

export const getPackageTypeList = async () => {
  const result = await axios.get(
    `${import.meta.env.VITE_API_URL}/package_type_list`,
  );
  console.log(result);
  return result.data();
};

export const getContactInformation = async () => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/contact_us`)
    .then((response) => {
      return response.data.data.addresses;
    })
    .catch((error) => {
      console.log("Error fetching data", error);
      return { error: true, message: error.message };
    });
};
