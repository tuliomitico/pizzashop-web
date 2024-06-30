import { api } from '@/lib/axios'

export interface CancelOrderParams {
  orderId: string
}

export interface CancelOrderResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: Array<{
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }>
}

export async function cancelOrder({ orderId }: CancelOrderParams) {
  await api.patch<CancelOrderParams>(`/orders/${orderId}/cancel`)
}
