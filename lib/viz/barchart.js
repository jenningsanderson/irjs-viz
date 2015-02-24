var jade = require('jade')

module.exports = function(data, options) {

  var bars = []

  data.forEach(function(d, i) {
      var bar = {
          y: 50 + 20 * i,
          w: 60
      }
      bars.push(bar)
  })

  var html = jade.renderFile(__dirname + '/templates/barchart.jade', {
      data: bars,
      title: options.title,
      padding: 100,
      width: 600,
      //http://stackoverflow.com/questions/16013625/return-maximum-value-from-an-associative-array-object
      max_height: Math.max.apply(null, Object.keys(bars).map(function(e){
        return bars[e].y
      }))
  })
  // console.log(html)

  return html
}
