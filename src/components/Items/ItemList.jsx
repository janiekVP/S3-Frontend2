import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import ItemService from '../../services/ItemService'


class ItemList extends Component {

    state = { items: [] }
    
    componentDidMount(){
        ItemService.GetAllItems().then((result) => {
            this.setState({items: result.data})
        })
    }

    deleteItem = id => {
        let confirmDelete = window.confirm('Delete item forever?')
        if(confirmDelete){
            ItemService.Delete(id)
            let updatedItems = [...this.state.items].filter(i => i.id !== id);
            this.setState({items: updatedItems})
        }  
      }

    render() { 
        const {items, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }

        const listItems = items.map(item => {
            return <tr key={item.id}>
                <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
                <td>{item.description}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/items/" + item.id}>Details</Button>
                        <Button size="sm" color="primary" tag={Link} to={"/items/edit/" + item.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return ( 
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/items/create">Add Item</Button>
                    </div>
                    <h3>Items</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Description</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listItems}
                        </tbody>
                    </Table>
                </Container>
            </div>
         );
    }
}
 
export default ItemList;