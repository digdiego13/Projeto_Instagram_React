

import Posts from "./esquerda/posts/posts"
import Stories from "./esquerda/stories/stories"

function Esquerda () {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
        
    )
}


// function Direita () {
//     return (
//         <div class="sidebar">
//             <MeuPerfil />
//             <Sugestoes />
//         </div>
//     )
// }




export default function Corpo () {

    return (
        <div class="corpo"> 
            <Esquerda />
            {/* <Direita /> */}
        </div>
    )
}