import { Component } from "react"
import Sidebar from "../../sidebar/sidebar";
import { BsSearch } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import "./alluser.css"
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
    let accessToken = localStorage.getItem('accessToken');

    fetch("https://flowershop-bw6z.onrender.com/api/users/alluser", {
      method: "GET",
      headers: {
                
        'Authorization': `Bearer ${accessToken}`,
      },
    })
      .then((response) => { return response.json(); })
      .then((data) => {
        console.log(data);
        this.setState({ users: data })

      })

  }
  handleDelete = (id) => {
    console.log(id);
    let accessToken = localStorage.getItem('accessToken');
    // Make a DELETE request to the server to delete the user
    fetch(`https://flowershop-bw6z.onrender.com/api/users/delete/${id}`, {
      method: "DELETE",
      headers: {
                
        'Authorization': `Bearer ${accessToken}`,
      },
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
          <div className="container-fluid bgu">
            <span >
              {/* <BsSearch className='icons ' /> */}
              <input style={{ maxWidth: "400px", height: "50px", border: "4px solid #ff58b9", borderRadius: "10px" }} className="my-3"
                type="text"
                placeholder="Search by name or email"
                value={this.state.searchQuery}
                onChange={this.handleSearchInputChange}
              /></span>
            <div className="table-responsive">
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
                {this.state.users
                .filter(user =>
                  (user.name && user.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())) ||
                  (user.email && user.email.toString().includes(this.state.searchQuery)))
                  .map((user) => (
                    <tbody >
                      <tr key={user.id}>

                        <td>{user.user_name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.mobile}</td>
                        <td><button className="btn btn-danger" onClick={() => this.handleDelete(user._id)}><MdDelete className='fs-2' /></button>



                        </td>
                      </tr>

                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Alluser