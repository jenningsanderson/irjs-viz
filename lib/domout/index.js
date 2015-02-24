"use strict";
require('domout')

var stream = require("../../node_modules/domout/lib/stream")
var path = require("path")

function svg(data) {
     var template = path.join(__dirname, "/index.html");
     return stream.rawStream({type:'svg', data: data}, template);
}

function html(data) {
     var template = path.join(__dirname, "/index.html");
     return stream.rawStream({type:'html', data: data}, template);
}

module.exports = {
    svg: svg,
    html: html
}
