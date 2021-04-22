import { GetStaticProps } from 'next';

type Episode={
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  return (
    <>
      <h1>index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 2,
  };
}
