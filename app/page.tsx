import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
 
export default async function Home() {
  const allPostsData=getSortedPostsData();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'am Ali, software engineer & consultant</p>
        <p>
          This is a sample website - I` am practicing and building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${utilStyles.sectionContainer}`}>
  <header className={utilStyles.sectionHeader}>
    <h2 className={utilStyles.headingLg}>Latest Posts</h2>
    <p className={utilStyles.subheading}>Insights from Japan & Europe</p>
  </header>
  <div className={utilStyles.gridList}>
    {allPostsData.map(({ id, date, title }) => (
      <article className={utilStyles.card} key={id}>
        <h3 className={utilStyles.cardTitle}>{title}</h3>
        <p className={utilStyles.cardMeta}>
          <span className={utilStyles.cardDate}>{date}</span>
          <span className={utilStyles.cardId}>#{id}</span>
        </p>
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      </article>
    ))}
  </div>
</section>
    </Layout>
  );
}