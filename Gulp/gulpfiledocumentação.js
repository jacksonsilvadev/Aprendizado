 /*
 function helloTask(cb) {
   
   
    cb representa callBack que no caso é chamar o plugin ou função para ser executada 
     cb()
 }
 
Esqueleto de uma função "vazia"


Você tem que dar esse exports para que você possa chamar essa task no seu commander pelo [gulp helloTask]
 exports.default = helloTask;

 */

 const {
     parallel,
     series
 } = require('gulp');

 function javascript(cb) {
     cb()
 }

 function css(cb) {
     cb()
 }

 function php(cb) {
     cb()
 }

 function clear(cb) {
     cb()
 }

 //PASSANDO TAREFAS INDIVIDUALMENTE PARA O GULP  -  para executar é gulp [nome da tarefa];  

 //  exports.js = javascript;
 //  exports.css = css

 // Passando multiplas tarefas com a função do gulp parallel

 //  exports.build = parallel(javascript, css);

 //CHAMAR TAREFAS COM SERIES E PARALLEL EM CONJUNTO SEPARANDO POR DETERMINADAS AÇÕES  

 exports.build = series(
     clear,
     parallel(
         javascript,
         css,
         php
     )
 )

 /*
 Qual a diferença entre series e parallel?

 Parallel executa todas as tarefas de uma vez só, sem que espere a outra terminar.

 Series executa todas as tarefas, mas uma de cada vez esperando uma finalizar para a outra iniciar.
 */


 const {
     src,
     dest
 } = require('gulp')

 // Função src do gulp é para pegar arquivos de uma determinada pasta para executar tal tarefa

 // Função dest é para salvar o arquivo em tal destino 



 const rename = require('gulp-rename');

 // Função gulp-rename é um npm instalado/ plugin que muda a extensão do arquivo

 exports.default = () => {
     return src('src/*.js')
         .pipe(rename({
             extname: '.min.js'
         }))
         //  Pipe é uma ação que tem que fazer
         .pipe(dest('dist/'));
 }