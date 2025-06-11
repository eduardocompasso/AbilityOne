import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductCard } from '../ProductCard';
import { useCart } from '../../hooks/useCart';

jest.mock('../../hooks/useCart');

const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'Test Description',
  price: 99.99,
  image: 'test-image.jpg',
  category: 'test-category',
  stock: 10,
};

describe('ProductCard', () => {
  const mockAddToCart = jest.fn();

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders product information correctly', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toHaveAttribute('src', mockProduct.image);
  });

  it('navigates to product detail page when clicking on product name', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    const productLink = screen.getByText(mockProduct.name);
    expect(productLink).toHaveAttribute('href', `/products/${mockProduct.id}`);
  });

  it('calls addToCart when clicking the Add to Cart button', async () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct.id, 1);
  });

  it('handles addToCart error gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    mockAddToCart.mockRejectedValueOnce(new Error('Add to cart failed'));

    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    const addToCartButton = screen.getByText('Add to Cart');
    await fireEvent.click(addToCartButton);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error adding to cart:',
        expect.any(Error)
      );
    });

    consoleErrorSpy.mockRestore();
  });
}); 