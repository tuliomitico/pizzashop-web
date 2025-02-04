import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json(
      {
        id: 'custom-user-id',
        name: 'John Doe',
        email: 'jonhdoe@example.com',
        phone: '81237127123',
        role: 'manager',
        createdAt: new Date(),
        updatedAt: null,
      },
      { status: 200 },
    )
  },
)
