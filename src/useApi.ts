import axios from "axios";
import { useEffect, useState } from "react";

//https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-exchange-rates
const apiClient = axios.create({
  baseURL: "https://api.coinbase.com/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

type CurrencyResponse = {
  data: {
    currency: string;
    rates: {
      ETH: number;
    };
  };
};
export const useApi = () => {
  const [currencyRate, setCurrencyRate] = useState<CurrencyResponse>();
  useEffect(() => {
    apiClient
      .get<CurrencyResponse>("v2/exchange-rates", {
        params: { currency: "BTC" },
      })
      .then((response) => {
        console.log(response.status);
        setCurrencyRate(response.data);
      });
  }, []);
  return currencyRate;
};
