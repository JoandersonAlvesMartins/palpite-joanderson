// Importando planilha
const { GoogleSpreadsheet } = require('google-spreadsheet')
// Conectando a planilha
const credentials = require('./credentials.json')
// Incluindo o id da planilha ao documento que agora passa a ser baseado em promise
const doc = new GoogleSpreadsheet('1FZZv6YAtltS3XTjH1gK7dCyMuun6SXH7A4nweuPUm8A')
// Função asyncrona
const run = async () => {
    try {
        // Autenticado planilha com a conta de serviço
        await doc.useServiceAccountAuth(credentials)
        // Uma vez autenticado, carregar os dados da planilha
        await doc.loadInfo()
        // Add dados a planilha
        // Definindo qual planilha vou carregar pelo index
        const sheet = doc.sheetsByIndex[1]
        await sheet.addRow({
            Nome: 'Joanderson Alves',
            Email: 'joandersonmartins2013@gmail.com',
            Whatsapp: '00 121212122',
            Cupom: 'aaa111',
            Promo: 'Teste promo'
        })
    } catch (error) {
        console.log(error);
    }
}
run()