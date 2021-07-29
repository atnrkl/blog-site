import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { AuthContextProvider } from "../stores/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
