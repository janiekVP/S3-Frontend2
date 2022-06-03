import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import UserService from '../../services/UserService'


class UserList extends Component {

    state = { users: [] }
    
    componentDidMount(){
        UserService.GetAllUsers().then((result) => {
            this.setState({users: result.data})
        })
    }

    deleteItem = id => {
        let confirmDelete = window.confirm('Delete item forever?')
        if(confirmDelete){
            UserService.Delete(id)
            let updatedUsers = [...this.state.users].filter(i => i.id !== id);
            this.setState({users: updatedUsers})
        }  
      }

    render() { 
        const {users, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }

        const listUsers = users.map(user => {
            return <tr key={user.id}>
                <td style={{whiteSpace: 'nowrap'}}>{user.userName}</td>
                <td>{user.email}</td>
                <td>{'' || user?.favorite?.name}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/users/" + user.id}>Details</Button>
                        <Button size="sm" color="primary" tag={Link} to={"/users/edit/" + user.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.deleteItem(user.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return ( 
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to={"/users/create"}>Add User</Button>
                    </div>
                    <h3>Users</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">User Name</th>
                            <th width="30%">Email</th>
                            <th width="30%">Favorite</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listUsers}
                        </tbody>
                    </Table>
                </Container>
            </div>
         );
    }
}
 
export default UserList;