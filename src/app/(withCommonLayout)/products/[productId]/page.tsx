import ProductDetailsComponent from '@/components/pages/details/ProductDetails';

const ProductDetails = ({ params }: { params: { productId: string } }) => {
      return <ProductDetailsComponent id={params.productId} />;
};

export default ProductDetails;
