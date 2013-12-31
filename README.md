Node.js with npm (http://nodejs.org/)
Grunt.js (http://gruntjs.com/)
scss (http://sass-lang.com/)
Bower (https://github.com/bower/bower)



CodeStyle guide:

1) В начале каждого файла после начала модуля define(), указывать 'use strict'.

2) Именование: MyClass, myFunction, _myPrivateFunction, MY_CONSTANT, myVar,
my_script.js.

3) Каждую публичную функцию и класс документировать в формате jsdoc.

4) Использовать 4 пробела, табы заменять на пробелы.

5) Ширина строки - 80 символов.

6) При импорте модуля писать полный путь до файла - require('dir1/dir2/file'),
исключение составляют имена библиотек, и файлы внутри папки modules (однако до
файлов вида my_module.js пишем полный путь).

7) Пробелы:
var f = function () {}

8) Переносы строк:

function f() {
    // code
}

if () {
    // code
} else {
    // code
}

if () {
    // code
}
else if () {
    // code
}

try {
    // code
}
catch () {
    // code
}

9) Удалять завершающие пробелы в концах строк.

10) Не расширять прототипы базовых классов, не использовать библиотеки,
расширающие прототипы базовых классов.

11) Однострочный код в if/else всегда заключать в {}.

12) Кодировка файлов только UTF-8 (не UTF-8 with BOM).

13) var _this = this.

14) Имена объектов возвращаемых jquery, начинать с символа $.

15) Для блока переменных использовать один var:
var value1,
    value2,
    value3 = 10,
    value4 = 20;