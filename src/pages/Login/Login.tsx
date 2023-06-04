import { LoginContainer } from "features/User";
import { Container } from "Components/Container";
import "./login.scss";
import { Logo } from "Components/UserComponents";

export const Login = () => {
  return (
    <Container className="login_page">
      <LoginContainer />
      <Logo text="Login" />
    </Container>
  );
};
