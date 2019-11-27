import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class MainMenu extends Component {
  state = { activeItem: 'Dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='Dashboard'
              active={activeItem === 'Dashboard'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Documents'
              active={activeItem === 'Documents'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Notifications'
              active={activeItem === 'Notifications'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}