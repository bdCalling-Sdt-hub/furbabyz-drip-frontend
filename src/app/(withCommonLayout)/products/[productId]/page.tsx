import DetailsSlider from '@/components/pages/details/DetailsSlider';
import PaymentOptions from '@/components/pages/details/PaymentOption';
import ProductDetailsSummary from '@/components/pages/details/ProductDetailsSummary';
import SimilarProduct from '@/components/pages/details/SimilarProduct';
import PageHeader from '@/components/ui/shared/PageHeader';
import React from 'react';

const ProductDetails = () => {
      return (
            <div className="container">
                  <PageHeader />
                  <div className="grid grid-cols-1  gap-6   md:grid-cols-2">
                        <div>
                              <DetailsSlider />
                        </div>
                        <div>
                              <ProductDetailsSummary />
                              <PaymentOptions />
                        </div>
                  </div>
                  <div>
                        <SimilarProduct />
                  </div>
            </div>
      );
};

export default ProductDetails;
