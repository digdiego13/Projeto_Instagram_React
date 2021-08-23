
export default function MeuPerfil (props) {

    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
              <strong>{props.usuario}</strong>
              {props.nome}
            </div>
          </div>
    )
}