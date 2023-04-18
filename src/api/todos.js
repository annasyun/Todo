import axios from "axios";

export const getTodosAxios = async () => {
  const response = await axios.get("http://localhost:5000/todos");
  return response;
};

export const updateTodosAxios = async (id, body) => {
  const response = await axios.put(`http://localhost:5000/todos/${id}`, body);
  return response.data;
};

export const postTodosAxios = async (body) => {
  const response = await axios.post("http://localhost:5000/todos", body);
  return response.data;
};

export const deleteTodosAxios = async (id) => {
  const response = await axios.delete(`http://localhost:5000/todos/${id}`);
  return response.data;
};
