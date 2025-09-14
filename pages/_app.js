import Layout from "../components/Layout";
import "../styles/globals.css";
import { inter, montserrat } from "../components/ui/font";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${montserrat.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}