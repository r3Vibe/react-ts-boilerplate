import { ReactNode, useEffect } from "react";
import { instance } from "../http";
import { useAuthStore } from "../store/auth.store";
import axios from "axios";
import { toast } from "react-toastify";
import { refreshTokens } from "../http/api";

/**
 * @author Arnab Gupta
 * @description Axios interceptor that will be wrapping the app. used to manage tokens and toat messages
 */
export default function AxiosInterceptorWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { isLoggedIn, access_token, refresh_token, setTokne, setLogin } =
    useAuthStore((state) => state);

  useEffect(() => {
    // request interceptor
    const requestIntercept = instance.interceptors.request.use(
      (config) => {
        // user is logged in but the header does not have Authorization token so we add the token in the header
        if (isLoggedIn && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${access_token}`;
        }

        return config;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = instance.interceptors.response.use(
      (response) => {
        // success means http status codes 200-299. for all this responses if we have a message to show we will show it.
        if (response.data.message && response.data.message !== "") {
          toast.success(response.data.message);
        }
        return response;
      },
      async (error) => {
        // set the previous request
        const prevRequest = error?.config;

        // when user token has expired we throw 401. here we need to refresh the tokens and update the state as well.
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          // this here makes sure we do not fall into a loop of sending requests.
          prevRequest.sent = true;

          // refresh tokens
          if (refresh_token) {
            const newTokens = await refreshTokens(refresh_token);

            // set the newly gained token in the header
            prevRequest.headers[
              "Authorization"
            ] = `Bearer ${newTokens.access_token}`;

            setTokne(newTokens.access_token, "access");
            setTokne(newTokens.refresh_token, "refresh");
          }

          // continue with the previous request so the request don't get left out.
          return instance(prevRequest);
        }

        // when refresh token has also expired  we need to logout the users.
        if (error?.response?.status === 403) {
          // logout the user
          setTokne(null, "access");
          setTokne(null, "refresh");
          setLogin(false);
          toast.error("Please login!");
        }

        // in case axios cancells the request no need to throw and show the error
        if (axios.isCancel(error)) return;

        // for other error responses
        if (
          error?.response?.status !== 403 ||
          error?.response?.status !== 401
        ) {
          toast.error(error?.response?.data?.message);
        }

        return Promise.reject(error);
      }
    );

    // clear the instance interceptos during unmount
    return () => {
      instance.interceptors.request.eject(requestIntercept);
      instance.interceptors.response.eject(responseIntercept);
    };
    // eslint-disable-next-line
  }, []);
  return <>{children}</>;
}
