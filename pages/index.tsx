import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import faker from 'faker';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a>
        </h2>
        <h3>with Typescript</h3>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/text">
              <h2>Text page &rarr;</h2>
              <p>Simple text page</p>
            </Link>
          </div>

          <div className={styles.card}>
            <Link href={`/user/${faker.name.firstName()}`}>
              <h2>User Page &rarr;</h2>
              <p>Random User Name</p>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
