import { Footer, Header, Sidebar } from "components";
import * as S from "./styles";

interface Props {
  children: any;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Sidebar>
        <Sidebar />
      </S.Sidebar>
      <S.Main>
        <S.Header>
          <Header />
        </S.Header>
        <S.Content>
          {children}
          <Footer />
        </S.Content>
      </S.Main>
    </S.Container>
  );
};

export default DefaultLayout;
