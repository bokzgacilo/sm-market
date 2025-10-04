import Layout from "@/components/layout";
import { LightMode } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import { Theme } from "@chakra-ui/react"

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Theme appearance="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Provider>
  )
}
