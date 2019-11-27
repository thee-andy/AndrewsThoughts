import React, { Component } from 'react'
import { Menu, Grid, Segment, Header, Icon } from 'semantic-ui-react'
import MenuSegment from './MenuSegment.js'

const UserSettings = () => (
    <Icon name='settings' />
);

export default class TopNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>

      <Grid padded>
            <Grid.Row color="grey" key="grey">
              <Grid.Column>
                  <Header as='h1' inverted color='grey'>HYKE</Header>
              </Grid.Column>
            </Grid.Row>
        </Grid>

        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Documents'
            active={activeItem === 'Documents'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />

          </Menu.Menu>
        </Menu>

          <MenuSegment activeItem={activeItem} />

      </div>
    )
  }
}