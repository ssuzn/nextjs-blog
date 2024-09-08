import Head from "next/head";
import type { GetStaticProps } from "next";
import homeStyles from '../styles/Home.module.css'
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

const Home = ({ allPostsData }: {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[]
}) => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>SSUZN</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[SSUZN Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({id, title, date}) =>
          <li className={homeStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <p className={homeStyles.title}>{title}</p>
            </Link>
            <br />
            <small className={homeStyles.lightText}>
              {date}
            </small>
          </li>
        )}
        </ul>
      </section>
    </div>
  )
}

export default Home
export const getStaticProps: GetStaticProps = async() => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}