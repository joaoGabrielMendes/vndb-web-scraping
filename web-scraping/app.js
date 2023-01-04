const express = require('express')
const app = express()
const port = 3001
const Api = require('./api/api')
const api = new Api()

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.get('/', async (req, res) => {
    res.send({
        RotaBase: '/',
        VisualNovel: '/vn/:id',
        Imagens: '/image/:id',
        random: '/random',
        pages: 'pages/:id',
        topVn: '/top'
    })
})

app.get('/vn/:id/', async (req, res) => {
    const id = req.params.id
    res.send(await api.getVisualNovelById(id))
})

app.get('/random/vn', async (req, res) => {
    const maxtam = await api.getDbLength()
    const r = Math.floor(Math.random() * maxtam) + 1;
    res.send(await api.getVisualNovelById(r))
})

app.get('/random/image', async (req, res) => {
    const maxtam = await api.getDbLength()
    const r = Math.floor(Math.random() * maxtam) + 1;
    res.send(await api.getVnImage(r))
})

app.get('/pages/:ct', async (req, res) => {
    const ct = req.params.ct
    res.send(await api.getVns(ct))
})

app.get('/top/', async (req, res) => {
    res.send(await api.getVns("v?f=&s=34w"))
})

app.get('/image/:id', async (req, res) => {
    const id = req.params.id
    res.send(await api.getVnImage(id))
});


app.listen(port, () => {
    console.log(`App rodando na porta ${port}...`)
})