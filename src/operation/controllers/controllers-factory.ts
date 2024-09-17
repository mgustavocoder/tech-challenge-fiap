import { Logger } from '../../external/logger'
import { ProdutoController } from '../../operation/controllers/produto-controller'
import { ProdutoUsecase } from '../../core/usecases/produtos'
import { PedidoController } from '../../operation/controllers/pedido-controller'
import { PedidoUsecase } from '../../core/usecases/pedidos'
import { PagamentoUsecase } from '../../core/usecases/pagamentos'
import { GatewayPagamento } from '../../operation/gateways/gateway'
import { ProdutoRepository } from '../../operation/gateways/produto'
import { PedidoRepository } from '../../operation/gateways/pedido'
import { PagamentoRepository } from '../../operation/gateways/pagamento'
import { queryBuilderFactory } from '../../external/datasource/query-builder-factory'

function controllersFactory () {
  const logger = new Logger()
  const queryBuilder = queryBuilderFactory()
  const produtoRepository = new ProdutoRepository(queryBuilder)
  const produtoService = new ProdutoUsecase(produtoRepository)
  const produtoController = new ProdutoController(produtoService)
  const pedidoRepository = new PedidoRepository(queryBuilder)
  const pagamentoRepository = new PagamentoRepository(queryBuilder)
  const pagamentoGateway = new GatewayPagamento(logger)
  const pagamentoService = new PagamentoUsecase(pagamentoRepository, pagamentoGateway)
  const pedidoService = new PedidoUsecase(pagamentoService, pedidoRepository)
  const pedidoController = new PedidoController(pedidoService)
  return { produtoController, pedidoController }
}

export { controllersFactory }
