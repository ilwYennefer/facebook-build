import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Sidebar from "./components/Sidebar";
import tw from "twin.macro";
import styled from "styled-components";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
  const [user, loading] = useAuthState(auth);

  if (!user) return <Login />;

  return (
    <Container>
      <Header />
      <Main>
        <Sidebar />
        <Feed />
        <Widgets />
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  ${tw`
    h-screen
    bg-gray-100
    overflow-hidden
  `}
`;

const Main = styled.main`
  ${tw`
    flex
  `}
`;
