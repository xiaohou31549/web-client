import dynamic from 'next/dynamic';

const Main = dynamic(() => import('@/views/landings/default'));

export default function HomePage() {
  return (
    <>
      <Main />
    </>
  );
}
