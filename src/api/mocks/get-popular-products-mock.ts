import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse[]
>('/metrics/popular-products', async () => {
  return HttpResponse.json(
    [
      {
        amount: 200,
        product: 'Pizza',
      },
      {
        amount: 100,
        product: 'Hamburguer',
      },
      {
        amount: 50,
        product: 'Sushi',
      },
      {
        amount: 30,
        product: 'Macarrão',
      },
      {
        amount: 10,
        product: 'Sorvete',
      },
    ],

    { status: 200 },
  )
})
