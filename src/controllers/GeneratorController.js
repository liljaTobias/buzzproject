import express from 'express'
import bodyParser from 'body-parser'

import Generator from '../models/Generator'

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post('/', (req, res) => {
	Generator.create(
		{
			name: req.name
		},
		(err, generator) => {
			if (err) {
				return res
					.status(500)
					.send('There was a problem posting to the database')
			}
			return res.status(200).send(generator)
		}
	)
})

router.get('/', (req, res) => {
	Generator.find({}, (err, generators) => {
		if (err) {
			return res.status(500).send('There was a problem with the GET')
		}
		return res.status(200).send(generators)
	})
})

export default router
