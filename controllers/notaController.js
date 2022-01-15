const Nota = require("../models/Nota");
const Comentarios = require("../models/Comentarios")

module.exports.crear = async (req, res) => {
  const { autor, names, info, fecha, imgNota } = req.body;
  await Nota.create({ autor, names, info, fecha, imgNota })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json(error);
    });
};
module.exports.obtener = async (req, res) => {
  await Nota.find()
    .then((response) => {
      var arr1 = response.reverse()
      res.json(arr1)
    })
    .catch((error) => {
      res.json(error);
    });
};
module.exports.buscar = async (req, res)=> {
  const {id} = req.params;
  await Nota.find({autor:id}).then(response=> {
    var arr1 = response.reverse()
    res.json(arr1);
  }).catch(error=> {
    res.json(error)
  })
}
module.exports.like = async (req, res)=> {
  const {id, idPublicacion} = req.body;
  const publicacion = await Nota.findById({_id:idPublicacion});
  if(publicacion.reaction.includes(id)){
    await Nota.findByIdAndUpdate({_id:idPublicacion}, {$pull:{reaction:id}});
    res.json("Dislike");
  }else{
    await Nota.findByIdAndUpdate({_id:idPublicacion}, {$push:{reaction:id}});
    res.json("Like")
  }
}

module.exports.eliminar = async (req, res)=> {
  const {id}=req.params
  const borrarNota = await Nota.findByIdAndDelete({_id:id})
  const borrarComentarios = await Comentarios.deleteMany({publicacionId:id})
  if(borrarNota && borrarComentarios){
    res.json("Eliminado")
  }else{
    res.json("verga")
  }
}
