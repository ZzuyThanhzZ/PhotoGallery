import {Link} from 'react-router-dom'

function Navigation ({handleSubmit}) {
    
    return (
        <div>
            <nav className="main-nav">
                <ul>
                    <li><a href="#mountain" onClick={e => handleSubmit(e, e.target.innerHTML)}>Mountain</a></li>
                    <li><a href="#beach" onClick={e => handleSubmit(e, e.target.innerHTML)}>Beaches</a></li>
                    <li><a href="#bird" onClick={e => handleSubmit(e, e.target.innerHTML)}>Birds</a></li>
                    <li><a href="#food" onClick={e => handleSubmit(e, e.target.innerHTML)}>Food</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;