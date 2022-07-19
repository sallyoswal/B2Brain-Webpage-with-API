import React, {Component} from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
class Navbar extends Component{

  constructor()
  {
    super()
    this.state={
      searchData:null
    }
  }
  search(key){
    console.warn(key)
    fetch("https://tva.staging.b2brain.com/search/autocomplete_org_all/?q="+key).then ((data)=>{
      data.json().then((resp)=>{
        console.warn("resp",resp)
        this.setState({searchData:resp})
      })
    })
  }
  render(){
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder='Search by account name or website' className='searchbar' onClick={(event)=> this.search(event.target.value)}/>
          <div>
          
            {
              
              this.state.searchData?
              <div className='apiresult'>
                {
                  this.state.searchData.map((item)=>
                  <div >
                    {item.company}
                    <text> and </text>
                    {item.website}
                  </div>)
                }  
              </div>
              :""
            }
          </div>
        </div>
      </div>
    </div>
  );}
}

export default Navbar;