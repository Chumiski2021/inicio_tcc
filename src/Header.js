import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div> <nav class="navbar navbar-expand navbar-light bg-light">
        <ul class="nav navbar-nav">
            <li class="nav-item active">
                <Link to={"deletar"}><a class="nav-link" href="#">Criar<span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item">
                <Link to ={"criar"}><a class="nav-link" href="#">Deletar</a></Link>
            </li>
        </ul>
    </nav> </div>
  )
}

export default Header