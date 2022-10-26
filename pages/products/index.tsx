import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Alert from '../../components/Alert';
import AuthCheck from '../../components/AuthCheck';
import Metafields from '../../components/Metafields';
import ProductsList from '../../components/ProductsList';
import { postToJSON } from '../../lib/firebase';
import { Product } from '../../lib/types';

type PageProps = {
  products: Product[];
  errorMsg: string | null;
};

const Products: NextPage<PageProps> = ({ products, errorMsg }) => {
  console.log(products);

  return (
    <div>
      <Metafields title="Products" />

      <main className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl">Products</h1>
        <p className="my-8">
          Example fetching products from Firestore server-side.
        </p>
        <AuthCheck permission="products">
          {errorMsg && <Alert message={`Error: ${JSON.stringify(errorMsg)}`} />}
          <div className="text-left">
            <ProductsList products={products} />
          </div>
        </AuthCheck>
      </main>
    </div>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async () => {
  let products: Product[] = [];
  let errorMsg = null;
  try {
    const productsQuery = query(
      collection(getFirestore(), 'products'),
      orderBy('createdAt', 'desc'),
      limit(10)
    );
    products = (await getDocs(productsQuery)).docs.map(postToJSON) as Product[];
  } catch (error) {
    console.log(error);
    errorMsg = JSON.stringify(error);
  }

  return {
    props: { products, errorMsg },
  };
};
