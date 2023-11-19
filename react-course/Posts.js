
// https://mui.com/
import { VscBug, VscGlobe } from "react-icons/vsc"

export const Posts = () => {
    // return <ul>
    //     <li>Publicación 1</li>
    //     <li>Publicación 2</li>
    // </ul>

    return <button onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}>
        <VscGlobe /> Traer Datos
    </button>
}