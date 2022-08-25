import { useRouter } from 'next/router';
const SerieItemPage = () => {
  const router = useRouter();
  return (
    <>
      <h2>SERIE ITEM</h2>
      <p>{router.query?.id}</p>
    </>
  );
};
export default SerieItemPage;
