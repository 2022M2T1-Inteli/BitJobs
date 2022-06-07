//Classe exportada advinda de outro arquivo 
const matchGenerate = require('../services/Match')

//Controller para obter a porcentagem de match da usuária com a vaga 
const match = (req, res) => {
    let { userSoft, offerSoft, userHard, offerHard } = req.body;
    //Substitui todos os elementos indesejáveis e formata as variáveis em um array
    userSoft = userSoft.replaceAll('[', "")
    userSoft = userSoft.replaceAll(']', "")
    offerSoft = offerSoft.replaceAll('[', "")
    offerSoft = offerSoft.replaceAll(']', "")
    userHard = userHard.replaceAll('[', "")
    userHard = userHard.replaceAll(']', "")
    offerHard = offerHard.replaceAll('[', "")
    offerHard = offerHard.replaceAll(']', "")
    //Remove as vígulas de cada elemento de cada array
    userSoft = userSoft.split(", ")
    userHard = userHard.split(", ")
    offerSoft = offerSoft.split(", ")
    offerHard = offerHard.split(", ")

    //Instancia a classe match exportada
    var matchCreate = new matchGenerate.Match(userSoft, offerSoft, userHard, offerHard);

    //Executa os métodos da classe previamente exportada
    var resulSoft = matchCreate.matchSoft();
    var resulHard = matchCreate.matchHard();
    //Calcula o resultadado final em decorrência dos resultados obtidos nas funções acima
    const resulFinal = (resulSoft + resulHard) / 2

    res.status(200).send({resulFinal})
}

module.exports = {
    match
}
    