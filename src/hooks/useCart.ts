import { useState, useCallback } from 'react';
import { useStore } from '../store';
import type { CartItem } from '../types';
import { api } from '../mocks/api';

interface CartItemWithDetails extends CartItem {
  name: string;
  price: number;
  image: string;
}

export const useCart = () => {
  const { cart, setCart } = useStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addToCart = useCallback(
    async (productId: string, quantity: number) => {
      try {
        setLoading(true);
        setError(null);

        // Get product details
        const product = await api.getProduct(productId);
        if (!product) {
          throw new Error('Product not found');
        }

        // Add to cart
        const newItem: CartItemWithDetails = {
          productId,
          quantity,
          name: product.name,
          price: product.price,
          image: product.image,
        };

        setCart((prevCart) => {
          const existingItemIndex = prevCart.findIndex(
            (item) => item.productId === productId
          );

          if (existingItemIndex > -1) {
            const updatedCart = [...prevCart];
            updatedCart[existingItemIndex] = {
              ...updatedCart[existingItemIndex],
              quantity: updatedCart[existingItemIndex].quantity + quantity,
            };
            return updatedCart;
          }

          return [...prevCart, newItem];
        });
      } catch (err) {
        setError('Failed to add item to cart');
        console.error('Add to cart error:', err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setCart]
  );

  const refreshCart = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Get cart items from API
      const cartData = await api.getCart();
      const products = await Promise.all(
        cartData.items.map((item: CartItem) => api.getProduct(item.productId))
      );

      const cartWithDetails: CartItemWithDetails[] = cartData.items.map((item: CartItem, index: number) => {
        const product = products[index];
        if (!product) {
          throw new Error(`Product ${item.productId} not found`);
        }
        return {
          ...item,
          name: product.name,
          price: product.price,
          image: product.image,
        };
      });

      setCart(cartWithDetails);
    } catch (err) {
      setError('Failed to refresh cart');
      console.error('Refresh cart error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prevCart) => prevCart.filter(item => item.productId !== productId));
  }, [setCart]);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    cart,
    loading,
    error,
    total,
    addToCart,
    refreshCart,
    clearCart,
    removeFromCart,
  };
}; 