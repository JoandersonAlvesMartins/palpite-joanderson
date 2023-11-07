// Importando planilha
const { GoogleSpreadsheet } = require('google-spreadsheet')
// Conectando a planilha
const credentials = require('./credentials.json')
// Incluindo o id da planilha ao documento que agora passa a ser baseado em promise
const doc = new GoogleSpreadsheet('1FZZv6YAtltS3XTjH1gK7dCyMuun6SXH7A4nweuPUm8A')
// Função asyncrona
const run = async () => {
    // Autenticado planilha com a conta de serviço
    await doc.useServiceAccountAuth(credentials)
    // Uma vez autenticado, carregar os dados da planilha
    await doc.loadInfo()
}
run()