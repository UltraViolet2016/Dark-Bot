function print_table(category) {

const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, '..', '/' + category);
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    let max = ''
    for (const file of commandFiles) {
        if (file.length > max.length) {
            max = file;
        }
    }

    function print_table_command(file){
        const space = max.length - file.length;
        const command_line = `| ` + `${file}` + ` `.repeat(space) + ` |`
        return command_line;
    }

    function print_table_header(category){
        const table_header = `| ` + `${category}` + ` `.repeat(max.length - category.length) + ` |`;
        return table_header;
    }

    function print_table_line(){
        const line = '―'.repeat(max.length + 4)
        return line;
    }

    var array = [];
    for (const file of commandFiles) {
        array.push(print_table_command(file))
    }

    const gg = print_table_line() + '\n' + print_table_header(category) + '\n'+ print_table_line() + '\n' + array.join('\n') + '\n' + print_table_line();
    return gg;

}

module.exports = print_table;