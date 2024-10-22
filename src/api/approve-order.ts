import { api } from '@/lib/axios'

export interface ApproveOrderParams {
  orderId: string
}

export interface ApproveOrderResponse {
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

export async function approveOrder({ orderId }: ApproveOrderParams) {
  await api.patch<ApproveOrderParams>(`/orders/${orderId}/approve`)
}
