import Head from 'next/head';

import styles from '../styles/index.module.css';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Ryohei KOMATSUYAMA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="t-center">
          <img src="/flamingo.jpg" alt="" className={styles['img-profile']} />
          <p className="t-center t-bold">Ryohei KOMATSUYAMA</p>
        </div>

        <div className="t-center">
          <p>1998年9月9日生まれ</p>
          <p>エンジニア1年目</p>
        </div>

        <div className="g-spacer-t"></div>
      </main>
    </div>
  );
}
