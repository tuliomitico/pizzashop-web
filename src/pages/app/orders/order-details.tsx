import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: eiuy3tro8i7yr9o287qawetq3456y</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Túlio de Futebol Clube
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (79) 99999-9999
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">tulio@mail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                {new Intl.RelativeTimeFormat('pt-br', {
                  numeric: 'auto',
                }).format(-3, 'minute')}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Família</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">
                {(69.9).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
              <TableCell className="text-right">
                {(2 * 69.9).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Mussarela Família</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">
                {(59.9).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
              <TableCell className="text-right">
                {(2 * 59.9).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                {(2 * 69.9 + 2 * 59.9).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
