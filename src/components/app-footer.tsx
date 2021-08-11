import styles from '../styles/components.module.css';

export default function AppFooter(): JSX.Element {
  return (
    <footer className={styles['f-container']}>
      <hr className={styles['f-hr']} />
      <p>Thank you very much for coming!</p>
      <p>© 2020-2021 Ryohei KOMATSUYAMA, All Rights Reserved.</p>
      <a
        href="https://vercel.com/kmtym1998/blog-v2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles['f-logo']} />
      </a>
    </footer>
  );
}
