import React from 'react';
import Header from './../containers/HeaderContainer'

export default ({children}) =>(
	<div className="app">
		<div className="container">
			<div className="mdl-grid">
				<div className="view mdl-cell mdl-cell--9-col mdl-cell--8-col-tablet mdl-cell--12-col-phone">
					<div className="mdl-card mdl-shadow--2dp">
						 <Header />
						<div>{children}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

