import './style.css';
import Head from 'next/head';
import Home from './Home';


function IndexPage() {
  return (
    <div className="example">
      <Head>
        <title>My page title</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Home />
    </div>
  );
}

export default IndexPage;
