/* eslint-disable react-hooks/exhaustive-deps */
import LogoImg from "assets/images/logo-white.png";
import Picture1 from "assets/images/pic3.png";
import Picture2 from "assets/images/pic4.png";
import Picture3 from "assets/images/pic5.png";
import * as S from "./styles";
import { ButtonComponent, InputComponent } from "components";
import GoogleIcon from "assets/images/icon/search.png";
import AppleIcon from "assets/images/icon/apple.png";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return (
    <S.Container>
      <S.Left>
        <S.WrapTitlePage>
          <S.Logo>
            <img src={LogoImg} alt="logo.png" />
          </S.Logo>
          <S.MainTitle>Welcome back!</S.MainTitle>
          <S.SubTitle>
            User Experience & Interface Design <br /> Strategy SaaS Solutions
          </S.SubTitle>
        </S.WrapTitlePage>
        <S.WrapImage>
          <img src={Picture1} alt="" className="img1" />
          <img src={Picture2} alt="" className="img2" />
          <img src={Picture3} alt="" className="img3" />
        </S.WrapImage>
      </S.Left>
      <S.Right>
        <S.WrapFormLogin>
          <div>
            <S.TitleSignin>Sign In</S.TitleSignin>
            <S.SubTitleSignin>Your Social Campaigns</S.SubTitleSignin>
            <S.WrapBtnSocial>
              <ButtonComponent
                background="#fff"
                bordercolor="#ebebf9"
                bghover="#ebebf9"
                bordercolorhover="#ebebf9"
                colorhover="#000"
                fullwidth={true}
              >
                <img src={GoogleIcon} alt="google.png" /> Sign in with Google
              </ButtonComponent>
              <ButtonComponent
                background="#fff"
                bordercolor="#ebebf9"
                bghover="#ebebf9"
                bordercolorhover="#ebebf9"
                colorhover="#000"
                fullwidth={true}
              >
                <img src={AppleIcon} alt="apple.png" /> Sign in width Apple
              </ButtonComponent>
            </S.WrapBtnSocial>
            <S.Sepertor>Or with email</S.Sepertor>
            <S.FormGroup>
              <S.Item>
                <S.Label>Email address</S.Label>
                <InputComponent />
              </S.Item>
              <S.Item>
                <S.Label>Password</S.Label>
                <InputComponent type="password" />
              </S.Item>
              <S.ForgotPassword>
                <span>Forgot Password ?</span>
              </S.ForgotPassword>
              <ButtonComponent
                fullwidth
                color="#fff"
                colorhover="#fff"
                fontsize={16}
                bghover="#3d3690"
                onClick={() => history.push("/dashboard")}
              >
                Sign in
              </ButtonComponent>
            </S.FormGroup>
          </div>
        </S.WrapFormLogin>
      </S.Right>
    </S.Container>
  );
};

export default Login;
