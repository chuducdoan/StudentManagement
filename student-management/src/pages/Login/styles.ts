import { styled } from "styled-components";
import BG from "assets/images/pic-2.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

export const Left = styled.div`
  width: 100%;
  max-width: 560px;
  background-color: #4d44b5;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 140px;
    height: 100%;
    background-color: #4d44b5;
    z-index: -1;
    clip-path: polygon(0% 100%, 100% 0%, 0% 0%);
    box-shadow: 0.125rem 0rem 1.875rem rgba(0, 0, 0, 0.15);
  }
`;

export const WrapTitlePage = styled.div``;

export const Logo = styled.div`
  padding-top: 48px;
  margin-bottom: 30px;
`;

export const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 8px;
  font-family: "Popin-Semibold";
  line-height: 36px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
`;

export const WrapImage = styled.div`
  min-height: 450px;
  background-image: url(${BG});
  min-width: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .img1 {
    position: absolute;
    top: 0;
    right: 0;
    width: 125px;
    border-radius: 5px;
    animation: move1 4s infinite;
  }

  .img2 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 35px;
    width: 150px;
    border-radius: 5px;
    animation: move2 4s infinite;
  }

  .img3 {
    position: absolute;
    border-radius: 0.375rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 150px;
    right: 32px;
    bottom: 19px;
    animation: move3 4s infinite;
  }

  @keyframes move1 {
    0% {
      transform: rotate(-1deg) translate(-2px, -2px);
    }

    50% {
      transform: rotate(1deg) translate(2px, 2px);
    }

    100% {
      transform: rotate(-1deg) translate(-2px, -2px);
    }
  }

  @keyframes move2 {
    0% {
      transform: rotate(1deg) translate(2px, 2px);
    }

    50% {
      transform: rotate(-1deg) translate(-2px, -2px);
    }

    100% {
      transform: rotate(1deg) translate(2px, 2px);
    }
  }

  @keyframes move3 {
    0% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(5px, 0);
    }
    40% {
      transform: translate(5px, 5px);
    }
    65% {
      transform: translate(0, 5px);
    }
    65% {
      transform: translate(5px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const Right = styled.div`
  flex: 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapFormLogin = styled.div`
  width: 100%;
  max-width: 530px;
  padding: 50px;
`;

export const TitleSignin = styled.div`
  font-size: 24px;
  font-family: "Popin-Semibold";
  margin-bottom: 8px;
`;

export const SubTitleSignin = styled.div`
  font-size: 14px;
  color: #a098ae;
  margin-bottom: 30px;
`;

export const WrapBtnSocial = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const Sepertor = styled.div`
  font-size: 13px;
  color: #a098ae;
  position: relative;
  margin-bottom: 30px;

  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 161px;
    height: 1px;
    background-color: #ebebf9;
    top: 10px;
  }

  &::before {
    right: 0;
  }

  &::after {
    left: 0;
  }
`;

export const FormGroup = styled.div``;

export const Item = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.div`
  color: #131340;
  font-size: 13px;
  font-weight: "Popin-Medium";
  text-align: left;
  margin-bottom: 8px;
`;

export const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 30px;

  span {
    cursor: pointer;
    font-size: 14px;
    color: #4d44b5;
  }
`;
