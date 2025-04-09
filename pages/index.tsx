import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '@/components/Banner/Banner';
import Card from '@/components/Card/Card';
import { PostType } from '@/types';
import styles from './index.module.css';

const getDataFromEndpoint = async ({ category }: { category: string }) => {
  try {
    // const res = await fetch(`https://next-personal-blog-nine.vercel.app/api/${category}`);
    // fetch from data folder
    const res = await fetch(`http://localhost:3000/api/${category}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default function HomePage() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    const data = await getDataFromEndpoint({ category: 'posts' });
    if (data) {
      setPosts(data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.homePage}>
        <h2>Καλώς ήρθατε στην ιστοσελιδα "Φίλοι Χωρίς Σπίτι"</h2>
        <h3>Μαζί, μπορούμε να κάνουμε τον κόσμο καλύτερο για τα αδέσποτα ζώα.</h3>
      </div>
      <Banner />

      <div className={styles.cards}>
        {posts?.map((post) => (
          <Link style={{ textDecoration: 'none' }} href={`/posts/${post.id}`} key={post.id}>
            <Card title={post.title} image={post.image} date={post.date} />
          </Link>
        ))}
      </div>
    </>
  );
}
