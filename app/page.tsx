import { config } from 'dotenv-safe';
import postgres from 'postgres';
import styles from './page.module.css';

config();

const sql = postgres();

async function test() {
  return await Promise.resolve('test');
}

export default async function Home() {
  // const result = await test();
  const animals = await sql`
    SELECT
      *
    FROM
      animals
    ORDER BY
      id
  `;

  // console.log(animals);

  return <div className={styles.page}>Hello World</div>;
}
