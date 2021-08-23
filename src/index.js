import ReactDOM  from "react-dom";
import Topo from "./topo";
import Corpo from "./corpo/corpo/corpo";


function App() {

    return (
       <div>
            <Topo />
            <Corpo />
        </div> 

    )
}
const app = App();
ReactDOM.render(app, document.querySelector(".root"));