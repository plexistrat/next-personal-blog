import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PostType } from '@/types';

export const getDataFromEndpoint = async ({ category }: { category: string }) => {
  try {
    // const res = await fetch(`http://localhost:3000/api/${category}`);

    const res = await fetch(`https://next-personal-blog-nine.vercel.app/api/${category}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Details = () => {
  const [post, setPost] = useState<PostType | null>(null);

  const params = useParams();
  const selecedId = params?.id;
  // console.log(selecedId);

  const fetchPosts = async () => {
    const data = await getDataFromEndpoint({ category: `postDetails?id=${selecedId}` });
    if (data) {
      setPost(data);
    }
  };

  useEffect(() => {
    if (selecedId) {
      fetchPosts();
    }
  }, [selecedId]);
  // console.log(posts);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginTop: '156px', fontWeight: 'bold' }}>{post?.title}</h1>
      <p style={{ margin: '100px' }}>{post?.text}x</p>
      <p style={{ marginBottom: '200px' }}>{post?.date}</p>
    </div>
  );
};

export default Details;
