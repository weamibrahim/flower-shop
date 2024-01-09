import { Component } from "react"
import { NavLink } from "react-router-dom";
import Sidebar from "../../sidebar/sidebar";
import "./allFlower.css"
import { BsSearch } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";
class AllFlower extends Component {
  constructor() {
    super();
    this.state = {
      flowers: [],
      searchQuery: ''
    }
  }
  componentDidMount() {
    fetch("https://flowershop-bw6z.onrender.com/api/flower/flowers")
      .then((response) => { return response.json(); })
      .then((data) => {
        console.log(data);
        this.setState({ flowers: data })

      })

  }
  handleSearchInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  handleDelete = (id) => {
    console.log(id);
    // Make a DELETE request to the server to delete the flower
    const accessToken = localStorage.getItem('accessToken');
    fetch(`https://flowershop-bw6z.onrender.com/api/flower/delete/${id}`, {
      method: "DELETE",
      headers: {
        
        'Authorization': `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Remove the deleted flower from the state
        const updatedflowers = this.state.flowers.filter((flower) => flower._id !== id);
        this.setState({ flowers: updatedflowers });
      });
  };
  render() {
    return (
      <div>


        <div className="d-flex justify-content-center " >
          <Sidebar />
          <div className="container-fluid bgform " >

            <button className="btn btn-info my-3"><NavLink to="addflower" className="text-decoration-none text-white"  >Add flower</NavLink> </button>

            <span className="mx-2">
              {/* <BsSearch className='icons mx-3'/> */}
              <input style={{ maxWidth: "400px", height: "50px", border: "4px solid #ff58b9", borderRadius: "10px" }}
                type="text"
                placeholder="Search by name or price"
                value={this.state.searchQuery}
                onChange={this.handleSearchInputChange}
              /></span>
            <div className="table-responsive " >
              <table className="table  " >

                <thead>
                  <tr>

                    <th scope="col">name</th>
                    <th scope="col">image</th>
                    <th scope="col">price </th>
                    <th scope="col">category </th>
                    <th>action</th>
                  </tr>
                </thead>
                {this.state.flowers.filter(
                  (flower) =>
                    flower.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
                    flower.price.toString().includes(this.state.searchQuery)
                )
                  .map((flower) => (
                    <tbody        >
                      <tr key={flower.id}>

                        <td>{flower.name}</td>
                        <td><img style={{ width: "50px", height: "50px" }} src={'http://localhost:7000/images/' + flower.image} /></td>
                        <td>{flower.price}</td>
                        <td>{ flower.category}</td>
                        <td><button className="btn btn-danger mx-1 my-2" onClick={() => this.handleDelete(flower._id)}><MdDelete className='fs-2' /></button>
                          <button className="btn btn-success mx-1"><NavLink to={`updateflower/${flower._id}`} className="text-decoration-none text-white"><LiaEdit className='fs-2' /></NavLink>    </button>


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
export default AllFlower