import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  DEFAULT_BASE_URL,
} from "../contants/from-env";
import { goBack } from "../utils";
import PopupService from "../utils/PopupService";
class Services {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: DEFAULT_BASE_URL,
      timeout: 90000,
    });

    this.axios = axios;
    this.axios.defaults.withCredentials = false;

    // //! Interceptor request
    this.axios.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        console.log("error req", error);

        return Promise.reject(error);
      }
    );
    // ! Interceptor response
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        const config = error?.config;
        const isNoInternet = error
          ?.toString()
          ?.startsWith("Error: Network Error");
        const status = error?.response?.status;
        const isTimeoutOrServerError =
          error?.code == "ECONNABORTED" || status >= 500;
        // const isAuthenticationError =
        //   status == 401 || (status == 400 && config?.url == API_URLS.LOGIN);
        if (isNoInternet) {
          PopupService.instance.current.open({
            visible: true,
            content:"no_internet",
            onOk: () => {
              PopupService.instance.current.close();
            },
          });
        } else if (isTimeoutOrServerError) {
          PopupService.instance.current.open({
            visible: true,
            content: "general_error",
            onOk: () => {
              PopupService.instance.current.close();
            },
          });
        }
        // else if (isAuthenticationError) {
        //   _doExpired();
        // }
        return Promise.reject(error);
      }
    );
  }
  //!

  get<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axios.get<T, R>(url, { ...config });
  }

  post<T = any, R = T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.post<T, R>(url, data, { ...config });
  }

  delete<T = any, R = T>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axios.delete<T, R>(url, { ...config });
  }

  put<T = any, R = T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.put<T, R>(url, data, { ...config });
  }
  patch<T = any, R = T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axios.patch<T, R>(url, data, { ...config });
  }
}

export default new Services();
