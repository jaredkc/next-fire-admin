import { Product } from '../lib/types';

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <ol className="list-decimal">
      {products.map((product) => (
        <li key={product.sku}>
          <b>{product.title}</b>: {product.sku}
        </li>
      ))}
    </ol>
  );
}
