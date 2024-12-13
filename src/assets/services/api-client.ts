import axios from "axios";

const apiClient = async (Endpoint: String) => {
  try {
    const api = "http://127.0.0.1:5050/" + Endpoint
    const params = {query: "היי זה בדיקה."}
    const {data} = await axios.post(api,  params )
    return data
  } catch (error) {
    console.error('Error updating data:', error);
  }
}
export default apiClient
