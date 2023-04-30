import { Container } from "@mantine/core";
import { FooterBlock as Footer } from "@/components/Footer/FooterBlock";
import { HeaderWithMegaMenu as Header } from "@/components/Header/HeaderWithMegaMenu";
import { FunctionComponent } from "react";

const WebsiteLayout: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default WebsiteLayout;
