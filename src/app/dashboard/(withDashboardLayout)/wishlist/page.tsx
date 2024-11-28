'use client';
import ProductCard2 from '@/components/ui/card/ProductCard2';
import { useGetMyWishlistQuery } from '@/redux/features/wishlist/wishlistApi';
import React from 'react';

const WishListPage = () => {
      // Fetch the wishlist data
      const { data: wishlist, isLoading } = useGetMyWishlistQuery([]);

      // Handle loading or empty state
      if (isLoading) return <p>Loading...</p>;
      if (!wishlist || wishlist.length === 0) return <p>No items in your wishlist.</p>;

      return (
            <div>
                  <h1 className="text-title font-medium text-md md:text-xl mb-4">Saved Wishlist</h1>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {wishlist.map((wishlistItem: any) => (
                              <ProductCard2 product={wishlistItem.product} key={wishlistItem._id} />
                        ))}
                  </div>
            </div>
      );
};

export default WishListPage;
