import React, { Component } from 'react'
import { Button, Header, Icon, Segment, Placeholder } from 'semantic-ui-react'
import HomeTabComoents from './HomeTabCompents.js'

export default class MenuSegment extends Component {
	render(){

		if (this.props.activeItem == "home")
		{
			return(
				<Placeholder styles={{borderRadius: '100px'}}>
					<Placeholder.Line>
						<HomeTabComoents />
					</Placeholder.Line>
				</Placeholder>
				);
		}
		else if (this.props.activeItem == "Documents")
		return (
			<Segment placeholder>
    		</Segment>
	  	);
	}
}