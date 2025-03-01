const baseURL = "https://fitlog-y59t.onrender.com/api";

export const UserSignUp = async (data) => {
  const response = await fetch(`${baseURL}/user/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return response.json();
};

export const UserSignIn = async (data) => {
  const response = await fetch(`${baseURL}/user/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return response.json();
};

export const getDashboardDetails = async (token) => {
  const response = await fetch(`${baseURL}/user/dashboard`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.json();
};

export const getWorkouts = async (token, date) => {
  const response = await fetch(`${baseURL}/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.json();
};

export const addWorkout = async (token, data) => {
  const response = await fetch(`${baseURL}/user/workout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return response.json();
};
