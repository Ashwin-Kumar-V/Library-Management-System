import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from 'react-paginate';
import './Library.css';

export default class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          reducedData: [],
          results: [],
          perPage: 10,
          currentPage: 0,
          errorMessage: " ",
          criteria:"All",
          criteriaString:"",
          orignalresults:[],
          count:0
        };
    
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e)
    {
      this.setState({criteria:e.target.value},()=>{
        console.log(this.state.criteria+"TTTT")
        if(this.state.criteria == "All")
        {
            console.log("Calling");
            this.getData();
        }
      }
      )
    }

    handleChange(e)
    {
      this.setState({criteriaString:e.target.value})
      console.log(this.state.criteriaString)
      if(this.state.criteria==="Author")
      {
        var filt=this.state.originalresults.filter(product=>product.Author.includes(this.state.criteriaString))
        console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
        this.setState({count:filt.length},()=>{
            this.getData1(filt)
        })
      }
      else if(this.state.criteria==="Title")
      {
        var filt=this.state.originalresults.filter(product=>product.Title.includes(this.state.criteriaString))
        console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
        this.setState({count:filt.length},()=>{
            this.getData1(filt)
        })
      }
      else if(this.state.criteria==="Subject")
      {
        var filt=this.state.originalresults.filter(product=>product.Subject.includes(this.state.criteriaString))
        console.log("Testing"+JSON.stringify(filt)+"Length "+filt.length)
        this.setState({count:filt.length},()=>{
            this.getData1(filt)
        })
      }
      else if(this.state.criteria==="Publishdate")
      {
        var filt=this.state.originalresults.filter(product=>product.Publishdate.includes(this.state.criteriaString))
        console.log("debug"+JSON.stringify(filt)+"Length "+filt.length)
        this.setState({count:filt.length},()=>{
            this.getData1(filt)
        })
      }
    }

  getData1(filt)
  {
    var res1=filt;
    console.log("Ashwin"+JSON.stringify(res1))
    var data = res1;
    this.setState({offset:0})
    var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
    pageCount: Math.ceil(data.length / this.state.perPage),
    results: res1,
    reducedData: slice
    })
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    var res1=require("../books.json")
    console.log(res1)
    var data = res1;
    this.setState({count:res1.length})
    var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.pageCount),
      results: res1,
      reducedData: slice,
      originalresults:res1
    })   
  }
  
  loadMoreData() 
  {
    const data = this.state.results;
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      reducedData: slice
    })
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
      currentPage: selectedPage,
      offset: offset
      }, () => {
        this.loadMoreData()
      });
  };


    render() {
      return (
        <div>
          <h2 style={{textAlign:'center',color:'white',backgroundColor:'darkblue',marginTop:"5px",marginLeft:"400px",marginRight:"400px"}}> Library Management System</h2>
          <br/>
          <div style={{margin:'20px',backgroundColor:'Aqua',padding:"10px"}}>
            Filtering Criteria &nbsp; &nbsp;
            <select name="sona" onChange={this.handleSelect} defaultValue="All">
                  <option value="All">All</option>
                  <option value="Title"> Title</option>
                  <option value="Author">Author</option>
                  <option value="Subject">Subject</option>
                  <option value="Publishdate">Publishdate</option>
            </select>
            &nbsp; &nbsp; <input type="text" placeholder="Type the value for Filtering " onChange={this.handleChange}
            value={this.state.criteriaString} size="25"/>
            <br/>
            <br/>
            <br/>
            <div>
              <table className='table table-hover'>
                <thead className='thead-primary'>
                  <tr>
                      <td>Title</td>
                      <td>Author</td>
                      <td>Subject</td>
                      <td>Publishdate</td>
                  </tr>
                </thead>

                {  console.log(this.state.criteria+"---"+this.state.criteriaString)}
                <tbody>
                {this.state.reducedData.length 
                ? this.state.reducedData.map((product) => (
                      <tr key={product.ISBN}>
                        <td>  {product.Title} </td>
                        <td>  {product.Author} </td>
                        <td>  {product.Subject} </td>
                        <td>  {product.Publishdate} </td>
                      </tr>
                ))
                : null}
                </tbody>
              </table>
            </div>
              {this.state.errorMessage ? <div> {this.state.errorMessage}</div> : null}
    
            <div style={{backgroundColor:"wheat",padding:"10px"}}> Total count of {this.state.criteria} is: {this.state.count}</div>
          </div>
          <div style={{marginLeft:"650px"}}>
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
        </div>
      )
    }
}