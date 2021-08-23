

import Posts from "./esquerda/posts/posts"
import Stories from "./esquerda/stories/stories"
import MeuPerfil from "./direita/meuPerfil/meuPerfil"

function Esquerda () {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
        
    )
}


function Direita () {
     return (
         <div class="sidebar">
            <MeuPerfil imagem="assets/img/catanacomics.svg" usuario="catanacomics" nome="catana"/>
            {/* <Sugestoes /> */}
         </div>
     )
 }




export default function Corpo () {

    return (
        <div class="corpo"> 
            <Esquerda />
            <Direita />
        </div>
    )
}