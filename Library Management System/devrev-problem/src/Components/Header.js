import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-xl bg-dark justify-content-center">
				<div className="container">
					<ul className="nav navbar-nav">
						<li className="active">
							<a href="/" style={{textDecoration:'none',color:'white',marginRight:'30px'}}>
							<span className='display-6'>Home</span>
							</a>
						</li>
						<li>
							<a href="/Login" style={{textDecoration:'none',color:'white'}}>
								<span className='display-6'>Login</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
        </div>
    )

}

export default Header