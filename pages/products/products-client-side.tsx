import { collection, getFirestore } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useCollection } from 'react-firebase-hooks/firestore';
import Alert from '../../components/Alert';
import Metafields from '../../components/Metafields';
import ProductsList from '../../components/ProductsList';
import { postToJSON } from '../../lib/firebase';
import { Product } from '../../lib/types';

const ProductsClientSide: NextPage = () => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(), 'products')
  );

  const productsFromFirestore = value?.docs.map(postToJSON) as Product[];

  const jsonTest = { name: 'Jared', age: 37 };

  return (
    <div>
      <Metafields />

      <main className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl">Products</h1>
        <p className="my-8">
          Example fetching products from Firestore client-side.
        </p>
        {error && <Alert message={`Error: ${JSON.stringify(error)}`} />}
        {loading && <div>Collection: Loading products...</div>}
        {productsFromFirestore && (
          <ProductsList products={productsFromFirestore} />
        )}
      </main>
    </div>
  );
};

export default ProductsClientSide;
