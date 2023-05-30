import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import './RichText.css'
// import '@/css/docsearch.css' // Uncomment if using algolia docsearch
// import '@docsearch/css' // Uncomment if using algolia docsearch
import { Amplify, Auth } from 'aws-amplify'
import awsconfig from '../src/aws-exports'
Amplify.configure(awsconfig)

import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import { Analytics } from 'pliny/analytics'
import { SearchProvider } from 'pliny/search'
import LayoutWrapper from '@/components/LayoutWrapper'

function App({ Component, pageProps, signOut }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics analyticsConfig={siteMetadata.analytics} />
      <LayoutWrapper>
        <button
          onClick={signOut}
          class="rounded border border-red-500 bg-transparent px-4 py-2 font-semibold text-red-500 hover:border-transparent hover:bg-red-500 hover:text-white"
        >
          Sign out
        </button>
        <SearchProvider searchConfig={siteMetadata.search}>
          <Component {...pageProps} />
        </SearchProvider>
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default withAuthenticator(App)
