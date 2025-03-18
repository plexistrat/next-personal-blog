import { useEffect, useState } from 'react';
import Head from 'next/head';
import Banner from '@/components/Banner/Banner';
import Card from '@/components/Card/Card';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import styles from './index.module.css';

const getDataFromEndpoint = async ({ category }: { category: string }) => {
  try {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/${category}`);
    const res = await fetch(`http://localhost:3000/api/${category}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const data = await getDataFromEndpoint({ category: 'posts' });
    if (data) {
      setPosts(data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.homePage}>
        <h2>Καλώς ήρθατε στην ιστοσελιδα "Φίλοι Χωρίς Σπίτι"</h2>
        <h3>Μαζί, μπορούμε να κάνουμε τον κόσμο καλύτερο για τα αδέσποτα ζώα.</h3>
        {/* <ColorSchemeToggle /> */}
      </div>
      <Banner />

      {/* <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}

      <div className={styles.cards}>
        {posts?.map((post: post) => (
          <div key={post.id}>
            <Card title={post.title} image={post.image} text={post.text} date={post.date} />
          </div>
        ))}
      </div>
    </>
  );
}
