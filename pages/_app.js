import Layout from "../components/Layout";
import "../styles/globals.css";
import { urbanist } from "../components/ui/font";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${urbanist.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}