var koa = require('koa');
var fs = require('fs');
var app = new koa();
var router = require('koa-router')();
var views = require('koa-views');
const PORT = process.env.PORT || 4000;

var results = [];


app.use(views(__dirname + '/public'));

router.get('/', async (ctx) => {
	await ctx.render('index.html');
})

router.get('/results', async (ctx) => {
	ctx.body = results;
})

app
	.use(router.routes());

console.log(`server is running on port ${PORT}`);
app.listen(PORT);
