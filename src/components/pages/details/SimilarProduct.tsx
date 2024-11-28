import ProductCard2 from '@/components/ui/card/ProductCard2';
import { TProduct } from '@/redux/features/product/productApi';

const SimilarProduct = ({ products }: { products: TProduct[] }) => {
      return (
            <div className="my-10">
                  <h1 className="text-2xl text-title font-medium text-center my-4">Similar Product</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {products?.slice(0, 4).map((product) => (
                              <ProductCard2 product={product} key={product._id} />
                        ))}
                  </div>
            </div>
      );
};

export default SimilarProduct;
