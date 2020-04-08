import Head from 'next/head'

const Home = () => (
  <div className="center">
    <Head>
      <title>Auth0 DSE Sample Apps</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="header-brand">
        <img src="https://cdn.auth0.com/website/press/resources/auth0-logo-monotone-black.svg" className="header-brand-img" alt="Auth0 logo" />
        <div style={{marginLeft: 20 + 'px'}}><a href="https://dse.rosnovsky.us">DSE Sample Apps</a></div>
      </div>

      <div className="quicklinks">
        <p><a href="https://manage.auth0.com/#/applications" target="_blank" >Manage Dashboard</a></p>
        <p><a href="https://github.com/rosnovsky/auth0-example-apps/blob/master/auth0/tenant.yaml" target="_blank" >Download Tenant Settings</a></p>
        <p><a href="https://github.com/rosnovsky/auth0-example-apps" target="_blank" >Fork on Github</a></p>
      </div>

      <div className="apps">

        <div className="app">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/vue-screenshon.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><a className="hover:text-red-600 focus:shadow-outline" href="https://vue-spa.rosnovsky.us">Vue SPA &rarr;</a></div>
              <p className="text-gray-700 text-base">
              Vue SPA with Auth0 protecting user's profile page and fetching user data from the database.
              </p>
            </div>
            <div className="docs">
                <p><a href="#">stack.name Quickstart</a></p>
                <p><a href="#">stack.name Docs</a></p>
            </div>
            <div className="deploy">
              <a href="#" className="deploy"><img src="https://zeit.co/button" alt="Deploy to ZEIT Now" /></a>
            </div>
          </div>
        </div>

        <div className="app">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/vue-screenshon.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><a className="hover:text-red-600 focus:shadow-outline" href="https://vue-spa.rosnovsky.us">Vue SPA &rarr;</a></div>
              <p className="text-gray-700 text-base">
              Vue SPA with Auth0 protecting user's profile page and fetching user data from the database.
              </p>
            </div>
            <div className="docs">
                <p><a href="#">stack.name Quickstart</a></p>
                <p><a href="#">stack.name Docs</a></p>
            </div>
            <div className="deploy">
              <a href="#" className="deploy"><img src="https://zeit.co/button" alt="Deploy to ZEIT Now" /></a>
            </div>
          </div>
        </div>

        <div className="app">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/vue-screenshon.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><a className="hover:text-red-600 focus:shadow-outline" href="https://vue-spa.rosnovsky.us">Vue SPA &rarr;</a></div>
              <p className="text-gray-700 text-base">
              Vue SPA with Auth0 protecting user's profile page and fetching user data from the database.
              </p>
            </div>
            <div className="docs">
                <p><a href="#">stack.name Quickstart</a></p>
                <p><a href="#">stack.name Docs</a></p>
            </div>
            <div className="deploy">
              <a href="#" className="deploy"><img src="https://zeit.co/button" alt="Deploy to ZEIT Now" /></a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <a href="https://auth0.com"><img src="/auth0-logo-forlightbg.png" width="80px" alt="Auth0 Logo" /></a>
    </footer>
  </div>
)

export default Home
