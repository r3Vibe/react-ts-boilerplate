import useSWR from "swr";
import { getProducts } from "../http/api";

export default function useFetchProducts() {
  const { data } = useSWR("products", () => getProducts(), { suspense: true });

  console.log(data);
  return data;
}
