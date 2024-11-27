'use client';
import PageHeader from '@/components/ui/shared/PageHeader';
import React from 'react';
import DetailsSlider from './DetailsSlider';
import ProductDetailsSummary from './ProductDetailsSummary';
import PaymentOptions from './PaymentOption';
import SimilarProduct from './SimilarProduct';
import { useGetSingleProductQuery } from '@/redux/features/product/productApi';

const ProductDetailsComponent = ({ id }: { id: string }) => {
      const { data: product } = useGetSingleProductQuery(id);
      console.log(product);

      return (
            <div className="container">
                  <PageHeader />
                  <div className="grid grid-cols-1  gap-6   md:grid-cols-2">
                        <div>
                              <DetailsSlider product={product!} />
                        </div>
                        <div>
                              <ProductDetailsSummary product={product!} />
                              <PaymentOptions />
                        </div>
                  </div>
                  <div>
                        <SimilarProduct />
                  </div>
            </div>
      );
};

export default ProductDetailsComponent;
