import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import TransactionTable from './TransactionTable.js'
export default class TableModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={
                <Button onClick={()=> this.handleOpen()} icon basic className="tertiary">
                    <Icon name='dollar sign' size='huge' circular color='grey' className="Clickable_Icon"/>
                </Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header/>
        <Modal.Content>
          <TransactionTable />
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Done 
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
