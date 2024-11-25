'use client';
import React from 'react';
import { ConfigProvider, Table } from 'antd';
import Image from 'next/image';
import ProductImage from '@/assets/images/dogs/dog1.png';

// Define transaction data
const transactionsData = Array.from({ length: 6 }, (_, index) => ({
    key: index + 1,
    picture: ProductImage,
    productName: 'Dog hoodie with a bandanna',
    quantity: '3 Piece',
    productId: '11.10.24',
    orderDate: '13.10.24',
    price: '$32',
}));

// Define columns for the table
const columns = [
    {
        title: 'Picture',
        dataIndex: 'picture',
        key: 'picture',
        render: (text: string) => <Image src={text} alt="Product Image" width={50} height={50} className="rounded" />,
    },
    {
        title: 'Product name',
        dataIndex: 'productName',
        key: 'productName',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Product ID',
        dataIndex: 'productId',
        key: 'productId',
    },
    {
        title: 'Order date',
        dataIndex: 'orderDate',
        key: 'orderDate',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
];

// Component to display the transaction table
const TransactionHistory = () => {
    return (
        <div className="overflow-x-auto">
            <h2 className="text-md md:text-xl font-medium text-title mb-4">Transactions History</h2>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: 'transparent',
                            borderColor: 'transparent',
                            headerColor: '#584857',
                            fontSize: 15,
                        },
                    },
                }}
            >
                <Table
                    columns={columns}
                    dataSource={transactionsData}
                    pagination={false}
                    scroll={{ x: 'max-content' }} // Enable horizontal scrolling
                    className="table-responsive" // Optional for additional styling
                />
            </ConfigProvider>
        </div>
    );
};

export default TransactionHistory;
