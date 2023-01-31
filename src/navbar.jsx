import './navbar.css';
let x={
    name:'Hussnain',
    father_name:'AbdulHafeez',
    Roll:'174'
}
function Navbar() {

  return (
    <div>
      <nav className='Nav'>
        <ul>
            <li className='legend'><a href="/"> {x.name} is a Bad Boy</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
