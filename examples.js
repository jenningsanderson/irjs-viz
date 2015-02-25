var domout = require('./lib/domout'),
    viz = require('./lib/viz')

var data = [5, 10, 15, 20, 25, 30, 35, 50]

domout.html('<h1>Circles</h1>')

// note: use domout.svg for <svg> tags for them to be displayed properly
domout.svg(viz.circles(data))

bars = []
for(var i=0; i<10; i++){
  bars.push(Math.floor(Math.random()*100)+1)
}

domout.html('<h1>Barchart</h1>')
domout.svg(viz.barchart(bars, {
    title: 'Bar Chart'
}))

domout.html('<h1>Line Graph</h1>')
domout.svg(viz.linegraph(data, {
  title: 'LineGraph Example'
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

data = []
for(var i=0; i<50; i++){
  data.push( [Math.floor((Math.random() * 375) + 1), Math.floor((Math.random() * 100) + 1)] )
}

console.log(data)

domout.html('<h1>Scatter Plot</h1>')
domout.svg(viz.scatterplot(data, {
  title: "A Scatter Plot from a 2d Array"
}))
