import express from 'express'
import bodyParser from 'body-parser'
import gScraper from 'google-play-scraper'

import Generator from '../models/Generator'

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

const translate = (data) => (
  JSON.stringify(data).toUpperCase().slice(1, data.length+1)
)

router.get('/list', (req, res) => {
  // console.log(translate(req.query.category))
  gScraper.list({
    category: gScraper.category[translate(req.query.category)],
    collection: gScraper.collection[translate(req.query.collection)],
    num: req.query.count,
    throttle: 10,
  }).then((result) => {
    return res.status(200).send(result)
  }).catch(err => {
    return res.status(400).send(err)
  })
})

export default router
