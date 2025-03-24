import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'jonhdoe@example.com',
      phone: '123124125115',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        product: { name: 'Pizza Pepperoni' },
        priceInCents: 1000,
        quantity: 1,
      },
      {
        id: 'order-item-2',
        product: { name: 'Pizza Marguerita' },
        priceInCents: 2000,
        quantity: 2,
      },
    ],
  })
})
