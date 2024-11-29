'use client';
import React, { useState } from 'react';
import { Button, ConfigProvider, Form, Input, Popover, Rate, Table, message, notification } from 'antd';
import Image from 'next/image';
import { useGetTransactionsQuery } from '@/redux/features/transaction/transactionApi';
import { getImageUrl } from '@/utils/getImageUrl';
import { RxStarFilled } from 'react-icons/rx';
import { useGiveReviewsMutation } from '@/redux/features/review/reviewApi';

interface Product {
      _id: string;
      productId: {
            _id: string;
            name: string;
            image: string[];
            price: number;
      };
      quantity: number;
}

interface Payment {
      _id: string;
      products: Product[];
      createdAt: string;
}

const TransactionHistory: React.FC = () => {
      const { data: response, isLoading, error } = useGetTransactionsQuery([]);
      const [giveReview] = useGiveReviewsMutation();
      const [form] = Form.useForm();

      // Handle the form submission logic
      const handleSubmit = async (rating: number, comment: string, product: string) => {
            console.log('rating', rating, 'comment', comment, 'productId', product);
            try {
                  if (!rating || !comment) {
                        message.error('Please provide both a rating and a comment.');
                        return;
                  }

                  const res = await giveReview({
                        rating,
                        review: comment,
                        product,
                  }).unwrap();

                  if (res.success) {
                        notification.success({
                              message: res.message,
                        });
                        form.resetFields();
                  }
            } catch (error) {
                  notification.error({
                        message: (error as any).data?.message || 'Something went wrong. Please try again.',
                  });
            }
      };

      const columns = [
            {
                  title: 'Picture',
                  dataIndex: 'picture',
                  key: 'picture',
                  render: (text: string) => (
                        <Image
                              src={getImageUrl(text)}
                              alt="Product Image"
                              width={50}
                              height={50}
                              className="rounded-full size-[40px] object-cover"
                        />
                  ),
            },
            {
                  title: 'Product Name',
                  dataIndex: 'productName',
                  key: 'productName',
            },
            {
                  title: 'Quantity',
                  dataIndex: 'quantity',
                  key: 'quantity',
            },
            {
                  title: 'Price',
                  dataIndex: 'price',
                  key: 'price',
            },
            {
                  title: 'Order Date',
                  dataIndex: 'orderDate',
                  key: 'orderDate',
            },
            {
                  title: 'Total Price',
                  dataIndex: 'totalPrice',
                  key: 'totalPrice',
            },
            {
                  title: 'Review',
                  dataIndex: 'action',
                  key: 'action',
                  render: (_: any, record: any) => (
                        <Popover
                              content={
                                    <Form
                                          form={form}
                                          name="reviewForm"
                                          initialValues={{
                                                rating: null,
                                                comment: '',
                                          }}
                                          onFinish={({ rating, comment }) => handleSubmit(rating, comment, record.productId)}
                                    >
                                          <Form.Item name="rating" rules={[{ required: true, message: 'Please rate the product!' }]}>
                                                <Rate />
                                          </Form.Item>
                                          <Form.Item name="comment" rules={[{ required: true, message: 'Please write a review!' }]}>
                                                <Input.TextArea rows={3} placeholder="Write a review" />
                                          </Form.Item>
                                          <Form.Item>
                                                <Button htmlType="submit" className="my-2" type="primary">
                                                      Submit Review
                                                </Button>
                                          </Form.Item>
                                    </Form>
                              }
                              title="Give a Rating"
                              trigger="click"
                              placement="bottomRight"
                        >
                              <Button type="link" icon={<RxStarFilled />} style={{ fontSize: '16px' }}>
                                    Rate
                              </Button>
                        </Popover>
                  ),
            },
      ];

      const transformedData = response?.data
            ?.map((payment: Payment, index: number) => {
                  return payment.products.map((product) => ({
                        key: `${index}-${product._id}`,
                        picture: product.productId.image[0],
                        productName: product.productId.name,
                        quantity: `${product.quantity} Piece${product.quantity > 1 ? 's' : ''}`,
                        productId: product._id,
                        orderDate: new Date(payment.createdAt).toLocaleDateString(),
                        price: `$${product.productId.price}`,
                        totalPrice: `$${product.productId.price * product.quantity}`,
                  }));
            })
            .flat();

      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error loading transactions</div>;

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
                        <Table columns={columns} dataSource={transformedData} pagination={false} />
                  </ConfigProvider>
            </div>
      );
};

export default TransactionHistory;
