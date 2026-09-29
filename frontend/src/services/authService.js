import api from "./api";

class AuthService {

  /**
   * Login user and persist session
   */
  static async login(email, password) {

    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const { token, user } = response.data.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;

  }

  /**
   * Clear session
   */
  static logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

  }

}

export default AuthService;
