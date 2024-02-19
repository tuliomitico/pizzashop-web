import { api } from '@/lib/axios'

interface GetManagedRestaurantResponse {
  id: string
  managerId: string
  name: string
  description: string
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
