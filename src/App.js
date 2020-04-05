import React, { Suspense } from "react";
import { AppContainer, Container } from "./styledComponent";
import { Header, Title } from "./styledComponent/Header";
import routes from "./config/router";

function App({ children }) {
  return (
    <Suspense>
      <AppContainer>
        <Header>
          <Title href={"/" + routes.ENTRY + routes.LANDING}>Documention</Title>
        </Header>
        <Container>{children}</Container>
      </AppContainer>
    </Suspense>
  );
}

export default App;
