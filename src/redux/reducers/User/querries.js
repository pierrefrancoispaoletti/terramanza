import axios from "axios";
import { serverURI } from "../../../_const";
import { setCurrentUser, setUserMessage } from "./actions";

export const logger = async (credentials, dispatch, setLoading) => {
  const { email, password } = credentials;
  setLoading(true);
  try {
    const response = await axios({
      method: "POST",
      url: `${serverURI}/auth/login`,
      data: { email, password },
    });
    if (response.data.status === 200) {
      dispatch(
        setCurrentUser({ token: response.data.token, role: response.data.role })
      );
    }
    dispatch(setUserMessage(response.data.message));
    setLoading(false);
  } catch (error) {
    dispatch(setUserMessage("Il y à eu un problème"));
  }
};

export const validateToken = (token) => {
  return axios({
    method: "POST",
    url: `${serverURI}/verify/`,
    data: { token },
  });
};
