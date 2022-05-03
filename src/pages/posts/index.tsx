import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | clepverse.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postsList}>
          <a href="#">
            <time>02 de maio de 2022</time>
            <strong>Creating a Monorepo with lena & yarn workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              facere officia at facilis repellat delectus amet, ipsam porro!
              Quo, quam.
            </p>
          </a>
          <a href="#">
            <time>02 de maio de 2022</time>
            <strong>Creating a Monorepo with lena & yarn workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              facere officia at facilis repellat delectus amet, ipsam porro!
              Quo, quam.
            </p>
          </a>
          <a href="#">
            <time>02 de maio de 2022</time>
            <strong>Creating a Monorepo with lena & yarn workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              facere officia at facilis repellat delectus amet, ipsam porro!
              Quo, quam.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
