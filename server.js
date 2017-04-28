var koa = require('koa');
var fs = require('fs');
var app = new koa();
var router = require('koa-router')();
const serve = require('koa-static');

app.use(serve(__dirname + '/public'));

var results = [];

router.get('/results', async (ctx) => {
	this.body = await results;
})

app
	.use(router.routes());

app.listen(4000);
