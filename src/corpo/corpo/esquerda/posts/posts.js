
export default function Posts () {

  const posts = [
    {
      usuario: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      quemCurtiu: "respondeai",
      numCurtidas: "10000"
    },
    {
      usuario: "barked",
      conteudo: "assets/img/dog.svg" ,
      quemCurtiu: "adorable_animals",
      numCurtidas: "99.150"
    }
  ]
  return (
    <div class="posts">
      {posts.map((post) => (
        <div class="post">
          <Topo usuario = {post.usuario}/>
          <Conteudo conteudo={post.conteudo}/>
          <Fundo quemCurtiu={post.quemCurtiu} numCurtidas={post.numCurtidas}/>
        </div>
      ))} 
    </div>
  )
}

function Topo(props) {
  return(
    <div class="topo">
      <div class="usuario">
        <img src={`assets/img/${props.usuario}.svg`} />
        {props.usuario}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  )
}

function Conteudo(props) {
  return(
    <div class="conteudo">
      <img src={props.conteudo} />
    </div>
  )
}

function Fundo(props) {
  return(
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={`assets/img/${props.quemCurtiu}.svg`} />
        <div class="texto">
          Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras {props.numCurtidas} pessoas</strong>
        </div>
      </div>
    </div>
  )
}