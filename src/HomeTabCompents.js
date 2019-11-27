import React, { Component } from 'react'
import { Placeholder, Grid } from 'semantic-ui-react'
import TransactionTable from './TransactionTable.js'
import BudgetComponent from './BudgetComponent.js'
import TableModal from './tablepopup.js'
export default class HomeTabCompents extends Component {
  render(){
    return (
        <Placeholder>
          <Grid padded columns='equal'>
            <Grid.Row columns={3}>
              <TableModal />
            </Grid.Row>
          </Grid>
        </Placeholder>

      )
  }
}