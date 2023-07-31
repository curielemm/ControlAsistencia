import axios from "axios";

const API_BASE_URL =
  "https://bce4-2806-10ae-3-bc4a-34e3-c38-684c-3a3e.ngrok-free.app/api/login"; // Reemplaza con la URL de tu API Laravel

const ApiService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}`, {
        email,
        password,
      });

      // Maneja la respuesta exitosa de la API
      if (response.status === 200) {
        const { access_token } = response.data;
        console.log(response.data);
        return { success: true };
      }
    } catch (error) {
      if (error.response?.status === 401) {
        console.log("Credenciales incorrectas");
        return { success: false, error: "Credenciales incorrectas" };
      }
      // Maneja el error de la solicitud
      if (error.response?.data?.error) {
        console.log("Error de inicio de sesión:", error.response.data.error);
        return { success: false, error: error.response.data.error };
      } else {
        console.log("Error de inicio de sesión:", error.message);
        return { success: false, error: error.message };
      }
    }
  },
};

export default ApiService;
