import {createRoot} from "react-dom/client";

// Exercise Componnent 1
// function Hello() {
//     return <h2>Hello, World!</h2>;
// }
// function App() {
//     return <div><Hello /></div>
// }
// const root = createRoot(document.getElementById("root"));
// root.render(<App />);
// Exercise Component 2
function Hello() {
    return <div>
        <h2>Hello, World!</h2>
        <Message/>
    </div>
}
function Message() {
    return <p>What a beautiful day!</p>
}
createRoot(document.getElementById("root")).render(<Hello />);
