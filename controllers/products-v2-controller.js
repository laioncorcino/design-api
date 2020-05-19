const productsV2Service = require('../services/products-v2-service')

module.exports = {
  async create(req, res) {
    try {
      const { body } = req
      // const { name, price, category_id } = req.body
      const product = await productsV2Service.create(body)
      return res.status(201).json(product)
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        error: err.name,
        message: err.message
      })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, price, category_id } = req.body
      const product = await productsV2Service.update(id, { name, price, category_id })
      return res.status(200).json(product)
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        error: err.name,
        message: err.message
      })
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      await productsV2Service.delete(id)
      return res.sendStatus(204)
    } catch (err) {
      return res.status(err.statusCode || 500).json({
        error: err.name,
        message: err.message
      })
    }
  }
}
