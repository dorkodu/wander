import { Footer } from "#/components/Footer";
import { Header } from "#/components/Header";
import { Root } from "#/styles/Layout.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={Root}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
