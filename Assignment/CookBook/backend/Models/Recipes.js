const { mongoose } = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name : {type:String,required:true},
    ingrediant : {type:String,required:true},
    description :{type:String,required:true},
    price :{type:String,require:true}
})

module.exports = mongoose.model("recipes",recipeSchema)