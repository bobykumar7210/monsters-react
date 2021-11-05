import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';

import {SearchBox} from './components/search/search.component'

class App extends Component{
  constructor(){
      super()
      this.state={
        monsters:[],
        searchField:""
      }

   }

   //call when compoenent renders first time 
   componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(response=>response.json())
     .then(users=>{
      
        this.setState({monsters:users})
    })
    .catch(reject=>console.log("faied to load"))
   }

   
   handlerChange=e=>{
    this.setState({searchField:e.target.value},()=>{
      console.log("search : "+this.searchField)
    })
   
  }
  value="something change"
   render(){

     const {monsters,searchField}=this.state;
      const filterMonsters=monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
      })

     return(<div className="App">
          <SearchBox placeholder="search monster" onHandlerChange={this.handlerChange
          }/>

       
         <CardList monsters={filterMonsters}/>
        
        
       
       
      
      
      </div>)
   }

}

export default App;
