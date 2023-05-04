class AuthService {
  static async login(username, password) {
    const response = await fetch('/api/login', { // replace with real API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to log in');
    }
  }

  static async logout() {
    const response = await fetch('/api/logout', { // replace with real API endpoint
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Failed to log out');
    }
  }

  static async register(username, password) {
    const response = await fetch('/api/register', { // replace with real API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to register');
    }
  }
}

export default AuthService;
/*
This AuthService class provides three static methods: login, logout, and register. These methods make requests to a hypothetical API at /api/login, /api/logout, and /api/register, respectively.

The login and register methods expect a username and password and return the response data if the request was successful. If the request was not successful (i.e., the response status was not OK), they throw an error.

The logout method does not expect any arguments and does not
*/