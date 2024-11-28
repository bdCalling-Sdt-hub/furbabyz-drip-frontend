'use client';
import PageHeader from '@/components/ui/shared/PageHeader';
import React from 'react';
import DetailsSlider from './DetailsSlider';
import ProductDetailsSummary from './ProductDetailsSummary';
// import PaymentOptions from './PaymentOption';
import SimilarProduct from './SimilarProduct';
import { useGetSeminarProductQuery, useGetSingleProductQuery } from '@/redux/features/product/productApi';

const ProductDetailsComponent = ({ id }: { id: string }) => {
      const { data: product } = useGetSingleProductQuery(id);
      const { data: similarProducts } = useGetSeminarProductQuery(product?.category._id);

      return (
            <div className="container">
                  <PageHeader />
                  <div className="grid grid-cols-1  gap-6   md:grid-cols-2">
                        <div>
                              <DetailsSlider product={product!} />
                        </div>
                        <div>
                              <ProductDetailsSummary product={product!} />
                        </div>
                  </div>
                  <div>
                        <SimilarProduct products={similarProducts!} />
                  </div>
            </div>
      );
};

export default ProductDetailsComponent;
