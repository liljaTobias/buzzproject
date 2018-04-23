import mongoose from 'mongoose'

const GeneratorSchema = new mongoose.Schema({
	name: String
})

export default mongoose.model('Generator', GeneratorSchema)
