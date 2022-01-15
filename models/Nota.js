const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Nota = new Schema({
  autor: { type: String, required: true},
  info: { type: String, required: true},
  names: {type: String, required:true},
  reaction: {type: Array, default:[]},
  fecha:{type:String, required:true},
  imgNota: {type: String}
});

const Note = mongoose.model("Nota", Nota);

module.exports = Note;
