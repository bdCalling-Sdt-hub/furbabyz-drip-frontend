'use client';
import React from 'react';
import { FormProps } from 'antd';
import PageHeader from '@/components/ui/shared/PageHeader';
import CheckOutForms from '@/components/pages/cart/CheckOutForms';
import { OrderSummary } from '@/components/pages/cart/OrderSummary';

interface FormData {
    cardNumber: string;
    expiryDate: string;
    cvc: string;
    cardHolderName: string;
    email: string;
    countryRegion: string;
}

// Main Cart Page Component
const CartPage = () => {
    const onFinish: FormProps<FormData>['onFinish'] = (values) => {
        console.log(values, 'onFinish');
    };

    return (
        <div className="container">
            <PageHeader />
            <h1 className="text-xl text-title font-medium my-8">Checkout Process</h1>
            <div className="grid grid-cols-12 gap-5">
                {/* OrderSummary first on mobile, second on larger screens */}
                <div className="col-span-12 md:col-span-4 order-1 md:order-2">
                    <OrderSummary />
                </div>
                <div className="col-span-12 md:col-span-8 order-2 md:order-1">
                    <CheckOutForms onFinish={onFinish} />
                </div>
            </div>
        </div>
    );
};

export default CartPage;
