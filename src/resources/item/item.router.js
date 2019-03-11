import { Router } from 'express'

const router = Router()

const defaultResponse = { message: 'default' }

router
  .route('/')
  .get((req, res) => {
    res.send(defaultResponse)
  })
  .post((req, res) => {
    res.send(defaultResponse)
  })

router
  .route('/:id')
  .get((req, res) => {
    res.send(defaultResponse)
  })
  .put((req, res) => {
    res.send(defaultResponse)
  })
  .delete((req, res) => {
    res.send(defaultResponse)
  })

export default router
