var jade = require('jade')

module.exports = function(data, options) {

  var points = []
  data.forEach(function(d, i) {
      var pt = {
          x: 50 + 20 * i,
          y: 10+10*i,
          r: 3
      }
      points.push(pt)
  })

  var html = jade.renderFile(__dirname + '/templates/linegraph.jade', {
      data: points,
      title: options.title,
      width: 300
  })
  console.log(points)
  console.log(html)

  return html
}
