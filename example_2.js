var viz = require('./lib/viz')

var data = [5, 10, 15, 20, 25, 30, 35, 50]

viz.barchart(data, {
    title: 'Barchart Sample Title'
})

// domout.html('<h1>Line Graph</h1>')
// domout.svg(viz.linegraph(data))
//
// domout.html('<h1>List</h1>')
// domout.html(viz.list(data))
//
// domout.html('<h1>JSON</h1>')
// var data = [
//     ['John', 3, 5],
//     ['Adam', 4, 8]
// ]
//
// domout.html(viz.json(data))
//
// domout.html('<h1>Table</h1>')
// domout.html(viz.table(data))
//
// var data = [
//     [5, 5],
//     [10, 10],
//     [15, 15]
// ]
//
// domout.html('<h1>Scatter Plot</h1>')
// domout.svg(viz.scatterplot(data))
