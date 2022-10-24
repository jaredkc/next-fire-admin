import type { NextPage } from 'next';
import AuthCheck from '../../components/AuthCheck';
import Metafields from '../../components/Metafields';

const Products: NextPage = () => {
  return (
    <div>
      <Metafields title="Products" />

      <main className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl">Products</h1>
        <div className="flex flex-col max-w-lg gap-8 mx-auto my-8 text-xl">
          <AuthCheck permission="products">
            <p className="mt-3 text-2xl">Load orders from Firestore</p>
          </AuthCheck>
        </div>
      </main>
    </div>
  );
};

export default Products;
