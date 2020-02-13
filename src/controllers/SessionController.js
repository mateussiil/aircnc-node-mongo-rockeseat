const  User = require('../models/User');

module.exports = {
  async store(req, res){
    const { email } = req.body; //desestruction
    
    let user = await User.findOne({ email }); //procura um usuario pelo email
    
    //let pois a variavel muda
    
    if(!user){
      user = await User.create({ email });
    }

    return res.json( user );
  }
}



//Cria um autentificação, uma sessão

//index = retorna listagem de sessoes
// show  = retorna unica sessao
// store = cria uma sessao
// update = altera uma sessao
// destroy = remover uma sessao
