import  {lista_de_livros}  from "./listas_de_conteudo.js"
import  {lista_de_livros_para_diretorio}  from "./listas_de_conteudo.js"
import  {lista_de_variaveis_de_dicionario}  from "./listas_de_conteudo.js"


import  {lista_de_id_adicionadis_matriz}  from "./listas_de_conteudo.js"

























var lista_de_id_adicionadis = lista_de_id_adicionadis_matriz


var id_do_livro = document.getElementById("contador").innerText
console.log(id_do_livro)

//console.log(Object.keys(lista_de_livros).length)
var numero_de_capitulos = Object.keys(lista_de_variaveis_de_dicionario[id_do_livro]).length
//console.log(Object.keys(lista_de_livros_para_diretorio).length)


var main___ = document.querySelector('#corpo_principal_tela_inicial')


/*
const newDiv_detalhes = document.createElement("div")
newDiv_detalhes.classList.add("detalhes_do_livro")
newDiv_detalhes.innerHTML = `
<div class="div_detalhes_historia_lista_De_capitulos">
    <div class="div_detalhes_historia_lista_De_capitulos_foto">
        <img class='imagem_de_capa_lista_de_historias_capa' src="../Capa_Livro_${id_do_livro}.png" alt="">
        <p class="detalhes_historia_lista_De_capitulos_titulo">${lista_de_livros[id_do_livro]}</p>
        <p class="detalhes_historia_lista_De_capitulos_detalhes">is simply dummy text of the printing and typesetting inlarised in the 1960s with theot only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <div class="autor_e_palavras">
            <p class="detalhes_historia_lista_De_capitulos_autor">A. R. Junkes</p>
            <p class="P_numero_de_palavras">Valor Não encontrado</p>
        </div>
        </img>
    </div>
    <!--<div class="div_detalhes_historia_lista_De_capitulos_titulo_e_outros_dados">
    </div>-->
    <div class="quadro_de_capitulos">
    </div>
</div>`
main___.append(newDiv_detalhes)
*/



var dddd = 0
console.log(lista_de_variaveis_de_dicionario)

var addd = document.querySelector('.quadro_de_capitulos')
var caixa_De_foto = document.querySelector('.quadro_de_capitulos')
//main___.append(addd)
for (let i = 0; i < numero_de_capitulos; i++) {
    console.log(`${i} ${lista_de_livros[i]}`)




    const newDiv = document.createElement("div")
 
    newDiv.classList.add("titulos_dos_livros")

    var caminho_arquivo = ""
    //console.log(lista_de_livros_para_diretorio[i])
    var largura = 98//(Math.floor(Math.random() * (4 - 2 + 1)) + 2)*10
    newDiv.style.width = `${largura}%`

    newDiv.innerHTML = `                    
<!---->

<div id=${i} class="moldura_titulos_livros";>       
        <div class='linha_historia'>
            
            <a class="saber_mais_livro" href="${lista_de_livros_para_diretorio[id_do_livro]}/${lista_de_livros_para_diretorio[id_do_livro]}_${i}.html">
               <!-- <div width: 50px height: 50px background-color: var(--cor_tema_maxok)>
                <p>a</p>
                </div>
                <img class='imagem_de_capa_lista_de_historias' src="../capa_wattpado_maxok_system.jpg" alt=""></img>-->
                    <p class='nome_capitulos'>${lista_de_variaveis_de_dicionario[id_do_livro][i]}
                    </p>
            </a>
            
        </div>
</div>
<!---->

`
    addd.append(newDiv)
 
   
    
}  
//${lista_de_variaveis_de_dicionario[i]}
//marcador_de_id.innerHTML=marcador_de_id.innerHTML

var numero_de_palavra = document.querySelector(".P_numero_de_palavras")
var Get_numero = Number.parseInt(document.querySelector(".numero_de_palavras_do_livro").innerText)
numero_de_palavra.innerText=`Número de palavras≅ ${Get_numero.toLocaleString('pt-BR')} | ${Number.parseInt(Get_numero/400)} pag.`
