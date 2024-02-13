import React,{useState,useEffect} from 'react'
import axios from "axios"
import {MDBTable,MDBTableHead,MDBTableBody,MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,MDBPaginationItem,MDBPagination,MDBPaginationLink} from "mdb-react-ui-kit"
import './App.css';

function Booklist() {
  const [data,setData]=useState([]);
  const [value,SetValue]=useState("");
  const [sortValue,SetSortValue]=useState("");
  const [currentPage,setCurrentPage] =useState(0);
  const [pageLimit]=useState(5);
  const [sortFilterValue,setSortFilterValue]=useState("")
  const [operation,setOperation]=useState("")
  //const sortOptions=["name","author","Category","publish_date","Available","Price"];
  useEffect(()=>{
    loadUsersData(0,5,0);
  },[]);
  const loadUsersData=async(start,end,increase,optType=null,filterOrSortValue)=>{
    switch(optType){
      case "search":
        setOperation(optType);
        SetSortValue("");
        return await axios.get(`http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`).then((response)=>{
          setData(response.data);
          setCurrentPage(currentPage+increase);
          
      }).catch((err)=>console.log(err));
      case "sort":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        return await axios.get(`http://localhost:5000/users?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`).then((response)=>{
          setData(response.data);
          setCurrentPage(currentPage+increase);
        
      }).catch((err)=>console.log(err));
      case "filter":
        setOperation(optType)
        setSortFilterValue(filterOrSortValue)
        return await axios .get(`http://localhost:5000/users?Category=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`)
        .then((response)=>{
          setData(response.data)
          setCurrentPage(currentPage+increase);
        })
        .catch((err)=>console.log(err))
   


      default:
        return await axios.get(`http://localhost:5000/users?_start=${start}&_end=${end}`)
        .then((response)=>{setData(response.data);
        setCurrentPage(currentPage+increase);
      })
        .catch((err)=>console.log(err));


    }
   
  };
  const handleReset=()=>{
    setOperation("");
    SetValue("");
    SetSortValue("");
    setSortFilterValue("");
    loadUsersData(0,5,0);
};
  const handleFilter=async(value)=>{

    loadUsersData(0,5,0,"filter",value)
  };
  const handleSearch=async(e)=>{
    e.preventDefault();
    loadUsersData(0,5,0,"search")
  //   return await axios.get(`http://localhost:5000/users?q=${value}`).then((response)=>{
  //     setData(response.data);
  //     SetValue("");
  // }).catch((err)=>console.log(err));

  }
  const handlesort=async(e)=>{
   let value=e.target.value;
   SetSortValue(value);
   setSortFilterValue("");
   loadUsersData(0,5,0,"sort",value);
  //   return await axios.get(`http://localhost:5000/users?_sort=${value}&_order=asc`).then((response)=>{
  //     setData(response.data);
    
  // }).catch((err)=>console.log(err));

  }
  // const handleFilter=async(value)=>{
  //   return await axios.get(`http://localhost:5000/users?status=${value}`)
  //   .then((response)=>{
  //     setData(response.data);
  //   })
  //   .catch((err)=>console.log(err));
  // };
  const renderPagination=()=>{
    if(data.length<5 && currentPage==0){
      return null;
    }
    if(currentPage==0){
      return(
        <MDBPagination className='mb-0'>
          <MDBPaginationItem>
            <MDBPaginationLink>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn onClick={()=>loadUsersData(5,10,1,operation,sortFilterValue)}>Next

            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      )
    }else if(currentPage<pageLimit-1 && data.length===pageLimit){
      return(
        <MDBPagination className='mb-0'>
          
          <MDBPaginationItem>
            <MDBBtn onClick={()=>loadUsersData((currentPage-1)*5,currentPage*5,-1,operation,sortFilterValue)}>Prev

            </MDBBtn>
          </MDBPaginationItem>
<MDBPaginationItem>
            <MDBPaginationLink>{currentPage+1}</MDBPaginationLink>
            </MDBPaginationItem>
        
          <MDBPaginationItem>
            <MDBBtn onClick={()=>loadUsersData((currentPage+1)*5,(currentPage+2)*5,1,operation,sortFilterValue)}>Next

            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>

      )
    }else{
      return(
        <MDBPagination className='mb-0'>
        
        <MDBPaginationItem>
          <MDBBtn onClick={()=>loadUsersData((currentPage-1)*5,currentPage*5,-1,operation,sortFilterValue)}>Prev

          </MDBBtn>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink>{currentPage+1}</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>

      );

    }
  }
  console.log(data)
  return (
   <MDBContainer >
   
    <form style={{margin:"auto",
    marginTop:"20px",
  padding:"15px",
  maxWidth:"400px",
  alignContent:"center",}}
  className='d-flex-input-group w-auto' onSubmit={handleSearch}>
    <h2 style={{color:"black"}}>Books</h2>
    <input  style={{margin:"20px"}}type='text' className='form-control' placeholder='Search Name' value={value} onChange={(e)=>SetValue(e.target.value
      )}/>
     
      <MDBBtn type='submit' color='dark'>Search</MDBBtn>
      <MDBBtn className='mx-2' color='info' onClick={()=>handleReset()}>Reset</MDBBtn>
    


    </form>
    <div style={{marginTop:"100px"}}>
      
      <MDBRow>
        <MDBCol size="12">
          <MDBTable>
          <MDBTableHead dark>
            <tr>
              <th scope='col'>No.</th>
              <th scope="col">Name</th>
              <th scope='col'>Author</th>
              <th scope='col'>Category</th>
              <th scope='col'>Publish_date</th>
              <th scope='col'>Available</th>
              <th scope='col'>Price</th>

            </tr>
          </MDBTableHead>
          {data.length===0?(
            <MDBTableBody className='align-center mb-0'>
              <tr>
                <td colSpan={8} className='text-center mb-0'>No Data Found</td>
              </tr>
            </MDBTableBody>
          ):(
            data.map((item,index)=>(
              
              <MDBTableBody key={index}>
                <tr>
                  <th scope='row'>{index+1}</th>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>{item.Category}</td>
                  <td>{item.publish_date}</td>
                  <td>{item.Available}</td>
                  <td>{item.Price}</td>

                 
                </tr>
              </MDBTableBody>
            ))
          

          )}
          </MDBTable>
        </MDBCol>

      </MDBRow>
      <div style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"250px",
        alignContent:"center"
      }} >{renderPagination()}</div>
     
        <MDBRow>
        <MDBCol size="8">
          <h5>Sort By</h5>
          <select style={{width:"50%",borderRadius:"2px",height:"35px"}} onChange={handlesort} value={sortValue}>
            <option>Please Select Value</option>
           <option value={"name"}>Name</option>
           <option value={"Category"}>Category</option>
           <option value={"author"}>Author</option>
          </select>
        </MDBCol>
        <MDBCol size="4">
          <h5>Filter By Category</h5>
          <MDBBtnGroup>
            <MDBBtn color="success" onClick={()=>handleFilter("Comic")}>
              Comic
            </MDBBtn>
            <MDBBtn color="danger" style={{marginLeft:"2px"}} onClick={()=>handleFilter("Fantacy")}>Fantacy</MDBBtn>
            <MDBBtn color="warning" style={{marginLeft:"2px"}} onClick={()=>handleFilter("Historical Fiction")}>Historical Fiction</MDBBtn>
          </MDBBtnGroup>

        </MDBCol>
       
      </MDBRow>

      
    </div>
    
   </MDBContainer>
  );
}

export default Booklist;
