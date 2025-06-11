import type { Product, Category, Cart, User } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Office Chair',
    description: 'Ergonomic office chair with adjustable height and lumbar support',
    price: 299.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop',
    stock: 10,
  },
  {
    id: '2',
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature',
    price: 49.99,
    category: 'lighting',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    stock: 15,
  },
  {
    id: '3',
    name: 'Standing Desk',
    description: 'Electric standing desk with memory presets and cable management',
    price: 499.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&h=500&fit=crop',
    stock: 8,
  },
  {
    id: '4',
    name: 'Wireless Keyboard',
    description: 'Ergonomic wireless keyboard with numeric pad',
    price: 79.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&h=500&fit=crop',
    stock: 20,
  },
  {
    id: '5',
    name: 'Monitor Mount',
    description: 'Dual monitor mount with gas spring and cable management',
    price: 129.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=500&fit=crop',
    stock: 12,
  },
  {
    id: '6',
    name: 'Noise Cancelling Headphones',
    description: 'Wireless noise cancelling headphones with 30-hour battery life',
    price: 199.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    stock: 15,
  }
];

const categories: Category[] = [
  {
    id: 'furniture',
    name: 'Furniture',
    description: 'Office furniture and accessories for a productive workspace',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop',
  },
  {
    id: 'lighting',
    name: 'Lighting',
    description: 'Office lighting solutions for optimal visibility and comfort',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Essential electronics and accessories for modern workspaces',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=500&fit=crop',
  }
];

let cart: Cart = {
  items: [],
  total: 0,
};

let currentUser: User | null = null;

const brands = [
  {
    id: 'ims',
    name: 'Ims',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/8gHGyD3S_%281%29.png/120px-8gHGyD3S_%281%29.png',
  },
  {
    id: 'apogepha',
    name: 'Apogepha',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/APOGEPHA.jpg/120px-APOGEPHA.jpg',
  },
  {
    id: 'baxter',
    name: 'Baxter',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BaxterLogo.png/120px-BaxterLogo.png',
  },
  {
    id: 'alavida',
    name: 'Alavida',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Alavida_logo.png/120px-Alavida_logo.png',
  },
  {
    id: 'harbin',
    name: 'Harbin Clinic',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Harbin_Clinic_Logo.jpg/120px-Harbin_Clinic_Logo.jpg',
  },
  {
    id: 'heyer',
    name: 'Heyer Medical',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/HEYER_Medical_AG_-_Logo.jpg/120px-HEYER_Medical_AG_-_Logo.jpg',
  },
  {
    id: 'mathys',
    name: 'Mathys European',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/MathysEuropean_CL.png/120px-MathysEuropean_CL.png',
  },
  {
    id: 'ruv',
    name: 'RuV',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/RuV_Logo_Blau.png/120px-RuV_Logo_Blau.png',
  },
];

export const api = {
  // Product related
  getProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 500);
    });
  },

  getProduct: async (id: string): Promise<Product | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find(p => p.id === id)), 500);
    });
  },

  // Category related
  getCategories: async (): Promise<Category[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(categories), 500);
    });
  },

  getCategory: async (id: string): Promise<Category | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(categories.find(c => c.id === id)), 500);
    });
  },

  // Cart related
  getCart: async (): Promise<Cart> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(cart), 500);
    });
  },

  addItemToCart: async (productId: string, quantity: number): Promise<Cart> => {
    return new Promise((resolve) => {
      const product = products.find(p => p.id === productId);
      if (product) {
        const existingItem = cart.items.find((item: { productId: string; quantity: number }) => item.productId === productId);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          cart.items.push({
            productId,
            quantity
          });
        }
        cart.total = cart.items.reduce((sum: number, item: { productId: string; quantity: number }) => {
          const prod = products.find(p => p.id === item.productId);
          return sum + ((prod?.price || 0) * item.quantity);
        }, 0);
      }
      setTimeout(() => resolve(cart), 500);
    });
  },

  // User related
  login: async (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          currentUser = {
            id: '1',
            email,
            firstName: 'Test',
            lastName: 'User',
          };
          resolve(currentUser);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },

  getProfile: async (): Promise<User | null> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(currentUser), 500);
    });
  },

  logout: async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        currentUser = null;
        resolve();
      }, 500);
    });
  },

  getBrands: async () => {
    return new Promise<typeof brands>((resolve) => {
      setTimeout(() => resolve(brands), 300);
    });
  },
}; 