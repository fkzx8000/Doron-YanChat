import apiClient from "../services/api-client";

interface ServerQuerys {
  query1: String;
  query2: String;
  query3: String;
}

const fun = (data: ServerQuerys) => data.query1;

const useQuerysBot = async () => {
  const data = await apiClient("test_many/");
  return fun(data);
};

export default useQuerysBot;
