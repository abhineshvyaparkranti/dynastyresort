 
import axiosInstance from './axiosInstance';

 
export const getFacilities = async () => {
  try {
    const response = await axiosInstance.get('/get-facilities');
    return response.data;
    // console.log("response data about us=============>", response.data );
  } catch (error) {
    console.error('Error fetching wedding packages:', error);
    throw error;
  }
};