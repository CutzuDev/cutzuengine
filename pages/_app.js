import "@/styles/globals.css";
import Meta from "../components/Meta";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}
