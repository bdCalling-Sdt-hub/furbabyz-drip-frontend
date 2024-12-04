import React, { useState } from 'react';
import { Button, Input, Form, notification } from 'antd';
import { TProduct } from '@/redux/features/product/productApi';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';

const ProductDetailsSummary = ({ product }: { product: TProduct }) => {
      const [activeCategory, setActiveCategory] = useState<string | null>(null);
      const dispatch = useAppDispatch();

      const [form] = Form.useForm();

      const sizes = product?.size || [];
      console.log(product);

      const validateSize = (_: any, value: string) => {
            if (!activeCategory) {
                  return Promise.reject('Please select a size');
            }
            return Promise.resolve();
      };

      const handleAddToCart = (values: any) => {
            const size = activeCategory || 'default';

            const productToAdd = {
                  id: product?._id,
                  name: product?.name,
                  price: product?.price,
                  quantity: 1,
                  size,
                  image: product?.image[0],

                  neckLength: values.neckLength,
                  chestLength: values.chestLength,
                  collarToTail: values.collarToTail,
            };

            dispatch(addToCart(productToAdd));

            notification.success({
                  message: 'Product added to cart successfully',
            });

            form.resetFields();
            setActiveCategory(null);
      };

      return (
            <div>
                  <div className="border p-8 rounded-xl">
                        {/* Title and Price Section */}
                        <div className="flex justify-between items-start">
                              <div>
                                    <h1 className="text-2xl text-[#2E2E2E] font-semibold">{product?.name}</h1>
                                    <p className="text-2xl text-title font-medium mt-1">${product?.price?.toFixed(2)}</p>
                              </div>
                              {/* <button>
                                    <AiOutlineHeart size={30} />
                              </button> */}
                        </div>

                        {/* Features Section */}
                        <div className="mt-2">
                              <h2 className="font-medium text-title text-lg">Features</h2>
                              <ul className="list-disc pl-5 text-text-secondary mt-2">
                                    {product?.features?.map((feature, index) => (
                                          <li className="capitalize" key={index}>
                                                {feature}
                                          </li>
                                    ))}
                              </ul>
                        </div>

                        {/* Size Selection Section */}
                        <Form
                              onFinish={handleAddToCart}
                              form={form} // Bind the form to the Form instance
                              className="mt-6"
                              initialValues={{
                                    neckLength: '',
                                    chestLength: '',
                                    collarToTail: '',
                              }}
                        >
                              <h2 className="font-medium text-title text-lg">Size</h2>
                              <Form.Item
                                    name="size"
                                    rules={[{ validator: validateSize }]} // Custom validation for size
                              >
                                    <div className="mt-4 flex flex-wrap gap-2">
                                          {sizes?.map((size: { _id: string; sizeName: string }) => (
                                                <button
                                                      key={size._id}
                                                      onClick={() => setActiveCategory(size.sizeName)}
                                                      className={`flex justify-between items-center py-2 px-4 rounded-lg ${
                                                            activeCategory === size.sizeName
                                                                  ? 'bg-primary text-white border border-transparent'
                                                                  : 'border border-gray-400 text-gray-700'
                                                      }`}
                                                >
                                                      {size.sizeName}
                                                </button>
                                          ))}
                                    </div>
                              </Form.Item>

                              {/* Measurements Section */}
                              <h2 className="font-medium text-title text-lg">Measurements</h2>
                              <div className="space-y-5 my-5">
                                    <div className="grid grid-cols-2 gap-5 items-center">
                                          <Form.Item
                                                name="neckLength"
                                                rules={[{ required: true, message: 'Please enter neck length/size' }]}
                                          >
                                                <Input
                                                      style={{
                                                            backgroundColor: '#FBFBFB',
                                                            height: 40,
                                                      }}
                                                      variant="borderless"
                                                      type="number"
                                                      placeholder="Enter neck length/size"
                                                      size="large"
                                                />
                                          </Form.Item>
                                          <Form.Item
                                                name="chestLength"
                                                rules={[{ required: true, message: 'Please enter chest length/size' }]}
                                          >
                                                <Input
                                                      style={{
                                                            backgroundColor: '#FBFBFB',
                                                            height: 40,
                                                      }}
                                                      variant="borderless"
                                                      type="number"
                                                      placeholder="Enter chest length/size"
                                                      size="large"
                                                />
                                          </Form.Item>
                                    </div>
                                    <div>
                                          <Form.Item
                                                name="collarToTail"
                                                rules={[{ required: true, message: 'Please enter length from Collar to Tail' }]}
                                          >
                                                <Input
                                                      style={{
                                                            backgroundColor: '#FBFBFB',
                                                            height: 40,
                                                      }}
                                                      variant="borderless"
                                                      type="number"
                                                      placeholder="Enter length from Collar to Tail"
                                                      size="large"
                                                />
                                          </Form.Item>
                                    </div>
                              </div>

                              {/* Add to Cart Button */}
                              <div className="my-10">
                                    <Button
                                          shape="round"
                                          style={{
                                                backgroundColor: '#000000',
                                                width: '100%',
                                                height: 56,
                                                color: '#FFFFFF',
                                                fontSize: 18,
                                          }}
                                          type="primary"
                                          htmlType="submit"
                                    >
                                          Add to Cart
                                    </Button>
                              </div>
                        </Form>
                  </div>
            </div>
      );
};

export default ProductDetailsSummary;
