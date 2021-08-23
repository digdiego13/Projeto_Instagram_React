import ReactDOM  from "react-dom";
import Topo from "./topo";
import Corpo from "./corpo/corpo/corpo";
import Mobile from "./mobile";

function App() {

    return (
       <div>
            <Topo />
            <Corpo />
            <Mobile />
        </div> 

    )
}
const app = App();
ReactDOM.render(app, document.querySelector(".root"));