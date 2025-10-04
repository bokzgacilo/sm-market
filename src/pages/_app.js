import Layout from "@/components/layout";
import { LightMode } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <Provider>
      <LightMode>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LightMode>
    </Provider>
  )
}
