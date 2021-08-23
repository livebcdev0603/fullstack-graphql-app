import { AppState, Auth0Provider } from '@auth0/auth0-react'
import { AppProps } from 'next/app'
import { GlobalStyles } from '../style/GlobalStyles'
import { UrqlClientProvider } from '../components/util/UrqlClientProvider'
import 'twin.macro'
import { Navbar } from 'src/components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
        audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!}
        redirectUri={
          typeof window !== 'undefined' ? window.location.origin : undefined
        }
      >
        <UrqlClientProvider>
          <Navbar />
          <div tw="bg-white py-10 px-5 mx-auto container mt-8">
            <Component {...pageProps} />
          </div>
        </UrqlClientProvider>
      </Auth0Provider>
      <div id="modal" tw="max-w-xl mx-auto relative" />
    </>
  )
}

export default MyApp
