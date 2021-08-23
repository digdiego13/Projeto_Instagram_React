
import Links from "./Links"
import CopyRight from "./CopyRight"

function Titulo () {
    return (
        <div class="titulo">
             Sugestões para você
            <div>Ver tudo</div>
        </div>

    )
}

function Sugestao () {

    const sugestoes = [
        {
            usuario: "bad.vibes.memes",
            razao: "segue voce"
        },
        {
            usuario: "chibirdart",
            razao: "segue voce"
        },
        {
            usuario: "razoesparaacreditar",
            razao: "Novo no Instagram"
        },
        {
            usuario: "adorable_animals",
            razao: "Novo no Instagram"
        }

    ]

    return (
        sugestoes.map((sugestao) => (
            <div class="sugestao">
              <div class="usuario">
                <img src={`assets/img/${sugestao.usuario}.svg`} />
                <div class="texto">
                  <div class="nome">{sugestao.usuario}</div>
                  <div class="razao">{sugestao.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
        ))
        
    )
}

function Bottom () {
    return(
        <div>
            <Links />
            <CopyRight />
        </div>
    )
}

export default function Sugestoes (){
    
    return(
        <div class="sugestoes">
            <Titulo />
            <Sugestao />
            <Bottom />
        </div>
    )
}






