import Layout from "../components/Layout";
import "../styles/globals.css";
import { montserrat } from "../components/ui/font";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}