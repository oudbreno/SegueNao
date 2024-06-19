//declarar variaveis para armazenar a posição do meu botão "no"
let topMod = 0;
let leftMod = 0;

/*adiciona um evento ao corpo da pagina (body) pra que a function do botão seja chamada quando o
o mouse se mover
*/
$("body").on("mousemove", webHandler);

//funcao webHadler (botao desktop)
function webHadler(event){
    //definindo posicao inicial do botao
    let button = $('#no').position()
    //calculando o centro do botao
    let buttonCenter = {
        x: button.left + 50,
        y: button.top + 20
    }
    //calcular a distancia entre o curso do mouse e o centro do batao
    //Math.sqrt caulcula raiz quadrada do x
    //Math.pow
    let distance = Math.sqrt(Math.pow())
}
