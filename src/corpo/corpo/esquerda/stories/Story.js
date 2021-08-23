export default function Story () {

    const stories = ['9gag', 'adorable_animals', 'bad.vibes.memes', 'barked', 'catanacomics', 'chibirdart', 'dog', 'filomoderna', 'gato-telefone']

    return (  
       stories.map((story) => (
        <div class="story">
            <div class="imagem">
            <img src={`assets/img/${story}.svg`} />
            </div>
            <div class="usuario">
                {story}
            </div>
        </div>
       ))
    )
}