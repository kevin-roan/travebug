import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://techasainfotech.com/travel_bug/web_api/home",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAbout = async () => {
  try {
    const response = await apiClient.get("/about");
    return response.data.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
};

export const fetchHome = async () => {
  try {
    const response = await apiClient.get("/home");
    return response.data.data;
  } catch (error) {
    console.log("Error fetching home data", error);
    throw error;
  }
};
