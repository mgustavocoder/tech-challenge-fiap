import { type Item } from '../entities/item'
import { StatusPagamento } from '../entities/status-pagamento'

export class Pagamento {
  constructor (
    public id: number | undefined = undefined,
    public valor: number,
    public statusPagamento: StatusPagamento = StatusPagamento.AGUARDANDO_PAGAMENTO,
    public codigoCopiaCola: string = '',
    public qrCode: string = ''
  ) {}

  public static calcularValor (itens: Item[]): number {
    const total = itens.reduce((acc, item) => {
      acc += item.preco
      return acc
    }, 0)
    return total
  }
}
