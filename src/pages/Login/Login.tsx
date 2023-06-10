import { LoginContainer } from "features/User";
import { Container } from "Components/Container";
import { Logo } from "Components/UserComponents";

import "./login.scss";

export const Login = () => {
  return (
    <Container className="login_page">
      <LoginContainer />
      <Logo text="Login" />
    </Container>
  );
};
