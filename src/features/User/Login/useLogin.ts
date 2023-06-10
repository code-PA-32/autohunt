import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "store";
import { loginUser, setLogged } from "../userSlice";
import { currentUserSelector } from "./loginUserSelectors";

interface LoginFormValues {
  password: string;
  email: string;
}

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, status } = useSelector(currentUserSelector);

  useEffect(() => {
    if (status === "idle" && user.name) {
      navigate("/user");
      dispatch(setLogged(true));
    }
  }, [user, status, dispatch, navigate]);

  const handleOnSubmit = (values: LoginFormValues) => {
    const loginUserPayload = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(loginUserPayload));
  };

  return { handleOnSubmit };
};
