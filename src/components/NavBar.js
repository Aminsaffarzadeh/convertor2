import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => (

	<div className="">
	<div className="container marginAuto">


	<div className="main">
					<nav>
							<div className=" navbarF">
									<div className="row">
									<NavLink to="/" exact={true} className="col-md-6 col-sm-6 col-xs-12 st1 nav-item nav-link ">
										<span className="glyphicon glyphicon-edit" ></span>
													Conventor
										</NavLink>
										<NavLink to="/setting" className="col-md-6 col-sm-6 col-xs-12 st1 nav-item nav-link ">
												<span className="glyphicon glyphicon-cog"></span>
												Setting
										</NavLink>
									</div>
							</div>
					</nav>

	</div>
</div>


	</div>
);

export default NavBar;
