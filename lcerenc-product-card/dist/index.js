
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lcerenc-product-card.cjs.production.min.js')
} else {
  module.exports = require('./lcerenc-product-card.cjs.development.js')
}
