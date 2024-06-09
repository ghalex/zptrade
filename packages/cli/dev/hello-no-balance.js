const assets = ["ETH/USD"]
const window = 1
const settings = {}

function run() {
  const amount = this.getCash() / assets.length
  // this.print('Amount amount to buy: ', amount)

  // this.print('Bars: ', this.barIndex)
  // this.print(this.getPositions())


  for (let symbol of assets) {
    //const ema30 = this.ema(30, symbol)
    // const close = this.asset(symbol).close

    //if (close > ema30) {
    if (!this.hasPosition(symbol)) {
      this.buyAmount(this.asset(symbol), amount)
    }
    //}
  }

  // this.balance({ minAmount: 100 })

  // this.print(this.date, this.getOrders())

  // close positions if
  // under ema30
  // const positionsToClose = []
  // for (let position of this.getPositions()) {
  //   const ema30 = this.ema(30, position.symbol)
  //   const close = this.asset(position.symbol).close

  //   // && this.getOrder(position.symbol) === null
  //   if (close < ema30) {
  //     positionsToClose.push(position)
  //   }
  // }

  // if (positionsToClose.length) {
  //   this.closePositions(positionsToClose)
  // }

  // this.print(this.getOrders())
}

return { assets, window, run }