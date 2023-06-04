import { useAppDispatch } from "store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createUser, setLogged } from "../userSlice";
import { currentUserSelector } from "../Login/loginUserSelectors";
import { useNavigate } from "react-router-dom";

interface SignUpUser {
  name: string;
  password: string;
  email: string;
  phone: number;
}

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const { user, status, message } = useSelector(currentUserSelector);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const setClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (user.name && status === "idle") {
      dispatch(setLogged(true));
      navigate("/user");
    }
  }, [dispatch, navigate, user.name, status]);

  const handleOnSubmit = (values: SignUpUser) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      isAdmin: false,
      photo: "",
      messages: [],
      likedCars: [],
      userId: ''
    };

    dispatch(createUser(user));
  };

  return { handleOnSubmit, setClose, open, message };
};
