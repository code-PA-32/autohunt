import { Container } from "Components/Container";
import { Logo } from "Components/UserComponents";
import { SignUp } from "features/User";

import "./signUp.scss";

export const SignUpPage = () => {
  return (
    <Container className="sign_up">
      <SignUp />
      <Logo text="Register" />
    </Container>
  );
};
