import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>Cabeçalho</h1>
      <div>
        <Outlet />
      </div>
      <h1>Rodapé</h1>
    </div>
  )
}
