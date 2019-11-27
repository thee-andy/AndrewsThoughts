import React, {Component} from 'react'
import { Image, Grid, Icon, Button} from 'semantic-ui-react'
import "./custom.css";

export default class BudgetComponent extends Component {

	render(){
	return(
          <Grid.Column width={this.props.UserWidth}>

		<Button icon basic className="tertiary">
			 <Icon name='dollar sign' size='huge' circular color='grey' className="Clickable_Icon"/>
	  	</Button>
		  </Grid.Column>
        );
	}
}
