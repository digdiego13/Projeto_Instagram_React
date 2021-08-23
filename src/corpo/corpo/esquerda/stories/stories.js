import Story from "./Story"

function Setinha () {
    return (
        <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    )
}

export default function Stories () {

    return (
        <div class="stories">
            <Story />
            <Setinha />
        </div>
    )
}