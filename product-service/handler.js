'use strict';

const products = [
  {
    id: '1',
    title: 'ProductOne',
    description: 'ProductOne pro max',
    price: 2.40,
  },
  {
    id: '2',
    title: 'ProductNew',
    description: 'ProductNew user friendly',
    price: 4.40,
  },
  {
    id: '3',
    title: 'ProductTop',
    description: 'ProductTop very very good',
    price: 12.40,
  },
  {
    id: '4',
    title: 'ProductTest',
    description: 'ProductTest o go go',
    price: 4.00,
  },
];

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    headers: { ...CORS_HEADERS },
    body: JSON.stringify(products),
  };
};

module.exports.getProductsById = async ({ pathParameters }) => {
  const { productId } = pathParameters;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return {
      statusCode: 404,
      headers: { ...CORS_HEADERS },
      body: `Product ${productId} not found`,
    };
  }
  return {
    statusCode: 200,
    headers: { ...CORS_HEADERS },
    body: JSON.stringify(product),
  };
};
