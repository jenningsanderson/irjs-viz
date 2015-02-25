var domout = require('./lib/domout'),
    viz = require('./lib/viz')


function one_d_data(amount){
  bars = []
  for(var i=0; i<amount; i++){
    bars.push(Math.floor(Math.random()*100)+1)
  }
  return bars
}

function two_d_data(amount){
  data = []
  for(var i=0; i<amount; i++){
    data.push( [Math.floor((Math.random() * 375) + 1), Math.floor((Math.random() * 100) + 1)] )
  }
  return data
}

var data = [5, 10, 15, 20, 25, 30, 35, 50]

domout.html('<h1>Circles</h1>')

// note: use domout.svg for <svg> tags for them to be displayed properly
domout.svg(viz.circles(data))

domout.html('<h1>Barchart</h1>')
domout.svg(viz.barchart(one_d_data(4), {
    title: 'Bar Chart',
    colors: ['blue', 'red', 'green', 'orange']
}))

domout.html('<h1>Line Graph</h1>')
domout.svg(viz.linegraph(one_d_data(30), {
  title: 'LineGraph Example',
  width: 30
}))

domout.html('<h1>List</h1>')
domout.html(viz.list(data))

domout.html('<h1>JSON</h1>')
var data = [
    {Name: "John", Age: "39", Profession: "Boxer"},
    {Name: "Adam", Age: "23", Profession: "Student"},
    {Name: "Jane", Age: "27", Profession: "PhD Candidate"}
]

domout.html(viz.json(data))

domout.html('<h1>Table</h1>')
domout.html(viz.table(data))

domout.html('<h1>Scatter Plot</h1>')
domout.svg(viz.scatterplot(two_d_data(50), {
  title: "A Scatter Plot from a 2d Array"
}))
