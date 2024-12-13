import apiClient from "../services/api-client";

interface ServerQuery {
  query: String;
}

const fun = (data: ServerQuery) => data.query;
const useQueryBot = async (mess: string) => fun(await apiClient("test_one/"));

export default useQueryBot;
