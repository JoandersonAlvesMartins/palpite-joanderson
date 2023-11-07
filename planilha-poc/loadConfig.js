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
        // Definindo qual planilha vou carregar pelo index
        const sheet = doc.sheetsByIndex[2]
        // Carregando em memória parte da planilha dentro de um intervalo de tempo de celulas
        await sheet.loadCells('A3:B3')
        // Pegando o valor da celula pela linha e coluna
        const mostrarPromocaoCell = sheet.getCell(2, 0)
        const textoPromoCell = sheet.getCell(2, 1)
        console.log(sheet.title, mostrarPromocaoCell.value, textoPromoCell.value);
    } catch (error) {
        console.log(error);
    }
}
run()