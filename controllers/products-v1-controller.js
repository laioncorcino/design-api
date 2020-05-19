const productsV1Service = require('../services/products-v1-service')

module.exports = {
  async list(req, res) {
    try {
      const { query } = req
      const { limit, offset, sort, order } = query
      const { name, name__contains, price, price__gte, price__lte } = query
      const products = await productsV1Service.list(
        { name, name__contains, price, price__gte, price__lte },
        { limit, offset, sort, order }
      )
      return res.status(200).json(products)
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        error: err.name,
        message: err.message
      })
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params
      const product = await productsV1Service.getById(id)
      return res.status(200).json(product)
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        error: err.name,
        message: err.message
      })
    }
  }
}
