function Header(){
    return(
<header>
        <nav className="nav">
        <img src="react-logo.png" className="react-logo"/>
       <h1 className="header-title">React Facts</h1>
       <h2 className="header-element">React Course Project-1</h2>
        </nav>
        </header>
    )
}
function MyFacts(){
    return(
        <div className="my-facts">
        <h1>Fun facts about React</h1>
        <ul className="my-list">
            <li>was first released in 2013</li>
            <li>was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
    )
}

function FunFacts(){
    return(
    <div>
        
       <Header />
       <MyFacts />
        
    </div>
    )
}
ReactDOM.render(<FunFacts />, document.getElementById("root"))