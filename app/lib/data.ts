export interface Post {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 99.99,
    category: 'electronics',
    content: 'Experience premium sound quality with our wireless Bluetooth headphones. Featuring active noise cancellation, long battery life, and comfortable design for all-day wear. Perfect for music lovers and professionals alike.'
  },
  {
    id: '2',
    title: 'Smartphone Case',
    description: 'Protective case for your smartphone.',
    price: 19.99,
    category: 'electronics',
    content: 'Durable and stylish smartphone case designed to protect your device from scratches and drops. Available in multiple colors and patterns to match your style.'
  },
  {
    id: '3',
    title: 'Cotton T-Shirt',
    description: 'Comfortable cotton t-shirt for everyday wear.',
    price: 14.99,
    category: 'clothing',
    content: 'Soft and breathable cotton t-shirt made from 100% organic cotton. Perfect for casual outings or layering. Machine washable and durable.'
  },
  {
    id: '4',
    title: 'JavaScript Programming Book',
    description: 'Comprehensive guide to JavaScript programming.',
    price: 39.99,
    category: 'books',
    content: 'Master JavaScript with this comprehensive guide covering ES6+, asynchronous programming, and modern web development techniques. Includes practical examples and exercises.'
  },
  {
    id: '5',
    title: 'Running Shoes',
    description: 'Lightweight running shoes for athletes.',
    price: 79.99,
    category: 'sports',
    content: 'Engineered for performance with lightweight materials and superior cushioning. Ideal for running, jogging, or daily workouts. Breathable mesh upper for comfort.'
  },
  {
    id: '6',
    title: 'Coffee Maker',
    description: 'Automatic coffee maker for home use.',
    price: 49.99,
    category: 'home',
    content: 'Brew perfect coffee every morning with our programmable coffee maker. Features auto-shutoff, thermal carafe, and multiple brew strengths for customized coffee experience.'
  },
  {
    id: '7',
    title: 'Laptop Stand',
    description: 'Ergonomic laptop stand for better posture.',
    price: 29.99,
    category: 'electronics',
    content: 'Adjustable laptop stand designed to improve ergonomics and reduce strain. Made from aluminum with multiple height and angle adjustments for optimal viewing.'
  },
  {
    id: '8',
    title: 'Yoga Mat',
    description: 'Non-slip yoga mat for fitness enthusiasts.',
    price: 24.99,
    category: 'sports',
    content: 'High-quality, non-slip yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, or any floor exercise. Eco-friendly materials and easy to clean.'
  }
];

export const categories = ['all', 'electronics', 'clothing', 'books', 'sports', 'home'];