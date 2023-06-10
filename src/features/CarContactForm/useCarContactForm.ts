import { productDetailsSelector } from "features/ProductDetails/productDetailsSelector";
import { currentUserSelector } from "features/User/Login/loginUserSelectors";
import { createUpdateChat } from "features/User/UserChats/userChatsSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";

interface CarContact {
  name: string;
  email: string;
  phone: number;
  subject: string;
  comment: string;
}

export const useCarContactForm = () => {
  const dispatch = useAppDispatch();
  const {
    user: { userId },
  } = useSelector(currentUserSelector);
  const {
    product: { id, saleId },
  } = useSelector(productDetailsSelector);
  const handleOnSubmit = (values: CarContact) => {
    const data = {
      users: [userId, saleId],
      car: id,
      subject: values.subject,
      message: {
        senderId: userId,
        receiverId: saleId,
        text: values.comment,
      },
    };
    dispatch(createUpdateChat(data));
  };

  return { handleOnSubmit };
};
