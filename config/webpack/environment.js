const { environment, ProvidePlugin } = require('@rails/webpacker')

// environment.plugins.append(
//   'Provider',
//   new ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery',
//     Popper: ['popper.js', 'default']
//   })
// )

environment.config.merge({
  externals: {
    jquery: 'jQuery',
    jquery: '$'
  }
})

module.exports = environment
