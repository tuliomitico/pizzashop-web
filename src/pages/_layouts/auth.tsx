import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <h1>Autenticação</h1>
      <div>
        <Outlet />
      </div>
      <h1>Rodapé</h1>
    </div>
  )
}
