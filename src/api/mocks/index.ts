import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenuetMock } from './get-month-revenue-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenuetMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getMonthCanceledOrdersAmountMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return
  return await worker.start()
}
