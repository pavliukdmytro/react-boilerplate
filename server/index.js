const server = require('express');
const path = require('path');

const app = server();
const port = process.env.PORT || 3000;

const mockResponse = {
	foo: 'bar',
	bar: 'foo'
};

app.use(server.static('dist'))


app.get('/api', (req, res) => {
	res.send(mockResponse);
});
console.log(path.join(__dirname, '../dist/index.html'));
app.get('/', (res, req) => {
	req.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, () => console.log(`server start port ${port}`));