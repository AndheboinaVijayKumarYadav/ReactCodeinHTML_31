
const navBar = (
    <nav>
        <h1>Nav bar </h1>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Images</li>
        </ul>
    </nav>
)
 ReactDOM.render(navBar,document.getElementById('root'))
 
 /* below is the react 18 code to do the same . React 18 does not allow you to do ReactDOM.render()  */

/* const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navBar) */