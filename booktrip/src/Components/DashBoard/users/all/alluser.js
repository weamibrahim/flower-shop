import { Component } from "react"
import Sidebar from "../../sidebar/sidebar";
import { BsSearch } from "react-icons/bs";
class Alluser extends Component {



  constructor() {
    super();
    this.state = {
      users: [],
      searchQuery: ''
    }
  }
  handleSearchInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  componentDidMount() {
    fetch("http://localhost:7000/api/users/alluser")
      .then((response) => { return response.json(); })
      .then((data) => {
        console.log(data);
        this.setState({ users: data })

      })

  }
  handleDelete = (id) => {
    console.log(id);
    // Make a DELETE request to the server to delete the user
    fetch(`http://localhost:7000/api/users/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Remove the deleted user from the state
        const updatedusers = this.state.users.filter((user) => user._id !== id);
        this.setState({ users: updatedusers });
      });
  };
  render() {
    return (
      <div>

        <div className="d-flex justify-content-center">
          <Sidebar />
          <div className="container-fluid bg">
            <span >
              <BsSearch className='icons mx-3' />
              <input style={{ width: "400px", height: "50px", border: "4px solid #ff58b9", borderRadius: "10px" }} className="my-3"
                type="text"
                placeholder="Search by name or email"
                value={this.state.searchQuery}
                onChange={this.handleSearchInputChange}
              /></span>
            <table class="table my-3 ">
              <thead>
                <tr>

                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">address</th>
                  <th scope="col">phone</th>
                  <th>action</th>
                </tr>
              </thead>
              {this.state.users.filter( user =>
            (user.name && user.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())) ||
            (user.email && user.email.toString().includes(this.state.searchQuery)))
                .map((user) => (
                  <tbody >
                    <tr key={user.id}>

                      <td>{user.user_name}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.mobile}</td>
                      <td><button className="btn btn-danger" onClick={() => this.handleDelete(user._id)}>delete</button>



                      </td>
                    </tr>

                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>)
  }
}

export default Alluser