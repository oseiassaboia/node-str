const router = express.Router()

let route = router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})

app.use('/', route)