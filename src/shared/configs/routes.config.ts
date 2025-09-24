export const routes = {
  home: {
    path: '/',
    type: 'public',
    isPrivate: false,
    title: 'Home',
    icon: 'home',
  },
  products: {
    path: '/products',
    type: 'public',
    isPrivate: false,
    title: 'Products',
    icon: 'box',
  },
  productDetails: {
    path: (slug: string) => `/products/${slug}`,
    type: 'public',
    isPrivate: false,
    title: 'Product Details',
    icon: 'info',
  },
};
