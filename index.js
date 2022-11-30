const readXlsxFile = require('read-excel-file/node');
const validator = require('validator');

readXlsxFile('./Alunos.xlsx').then((rows) => {
    for (let index = 1; index < rows.length; index++) {
        if (!validator.isEmpty(rows[index][0]) && validator.isEmail(rows[index][1]) && (rows[index][2] > 0) && validator.isAlphanumeric(rows[index][3]), 'pt-BR'){
            console.log('Nome: ' + rows[index][0] + ' | Email: ' + rows[index][1] + ' | Idade: ' + rows[index][2] + ' | Matricula: ' + rows[index][3]);
            console.log('---------------------------------------------------------------');
        }        
    }
})