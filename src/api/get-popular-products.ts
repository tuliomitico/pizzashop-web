import { api } from '@/lib/axios'

export interface GetPopularProductsResponse {
  amount: number
  product: string
}

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsResponse[]>(
    '/metrics/popular-products',
  )

  return response.data
}
