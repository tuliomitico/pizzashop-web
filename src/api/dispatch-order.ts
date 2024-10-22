import { api } from '@/lib/axios'

export interface DispatchOrderParams {
  orderId: string
}

export interface DispatchOrderResponse {
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

export async function dispatchOrder({ orderId }: DispatchOrderParams) {
  await api.patch<DispatchOrderParams>(`/orders/${orderId}/dispatch`)
}
