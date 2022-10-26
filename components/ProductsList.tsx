import { Product } from '../lib/types';

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <ol className="list-decimal">
      {products.map((product) => (
        <li key={product.sku} className="my-2">
          <h2 className="text-lg font-semibold font-se">{product.title}</h2>
          <p>
            SKU: {product.sku} &middot; Price: ${product.price}
          </p>
        </li>
      ))}
    </ol>
  );
}
