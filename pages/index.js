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
      <img src="/auth0-logo-forlightbg.png" width="80px" alt="Auth0 Logo" />
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
