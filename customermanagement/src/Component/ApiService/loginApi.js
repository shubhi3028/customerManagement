import { myAxios } from "./helper";

// Axios Functionality
export const loginUser = async (loginDetail) => {
  const response = await myAxios.post('/api/auth', loginDetail);
  return response.data;
}

