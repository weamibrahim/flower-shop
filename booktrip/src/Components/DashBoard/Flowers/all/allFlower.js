import { Component } from "react"
import { NavLink } from "react-router-dom";
import Sidebar from "../../sidebar/sidebar";
import "./allFlower.css"
import { BsSearch } from "react-icons/bs";
class AllFlower extends Component {
    constructor() {
        super();
        this.state = {
          flowers: [],
          searchQuery: ''
        }
      }
      componentDidMount() {
        fetch("http://localhost:7000/api/flower/flowers")
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
        fetch(`http://localhost:7000/api/flower/delete/${id}`, {
          method: "DELETE",
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
            <Sidebar/>
         <div className="container-fluid bg  ">   <button className="btn btn-info my-3"><NavLink to="addflower"   className="text-decoration-none text-white"  >Add flower</NavLink> </button>
<span style={{marginLeft:"600px"}}>
         <BsSearch className='icons mx-3'/>
      <input  style={{width:"400px",height:"50px",border:"4px solid #ff58b9",borderRadius:"10px" }}
  type="text"
  placeholder="Search by name or price"
  value={this.state.searchQuery}
  onChange={this.handleSearchInputChange}
/></span>
            <table className="table  " >
           
<thead>
  <tr>
 
    <th scope="col">name</th>
    <th scope="col">image</th>
    <th scope="col">price </th>
    <th>action</th>
  </tr>
</thead>
{this.state.flowers.filter(
          (flower) =>
            flower.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
            flower.price.toString().includes(this.state.searchQuery)
        )
        .map((flower)=>(
<tbody        > 
  <tr key={flower.id}>
    
    <td>{flower.name}</td>
    <td><img style={{width:"50px", height:"50px"}} src={'http://localhost:7000/images/'+flower.image}/></td>
    <td>{flower.price}</td>
    <td><button className="btn btn-danger mx-2" onClick={() => this.handleDelete(flower._id)}>delete</button>
    <button className="btn btn-success"><NavLink to={`updateflower/${flower._id}`}  className="text-decoration-none text-white">Update </NavLink>    </button>
    
    
    </td>
  </tr>
 
</tbody>
        ))}
</table>
</div>
           </div>
            </div>)}}
export default AllFlower