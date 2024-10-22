import { api } from '@/lib/axios'

export interface DeliverOrderParams {
  orderId: string
}

export interface DeliverOrderResponse {
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

export async function deliverOrder({ orderId }: DeliverOrderParams) {
  await api.patch<DeliverOrderParams>(`/orders/${orderId}/deliver`)
}
