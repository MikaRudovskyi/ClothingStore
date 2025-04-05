import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post("/api/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post("/api/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await axios.put(
      "http://localhost:5000/api/auth/update",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
