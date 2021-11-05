import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';

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
   myfunction=()=>{
     console.log('something change')
   }
  value="something change"
   render(){

     const {monsters,searchField}=this.state;
      const filterMonsters=monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
      })

     return(<div className="App">
        <input type="search" 
        placeholder="enter search"
        onChange={e=>{
          this.setState({searchField:e.target.value},()=>{
            console.log("search : "+this.state.searchField)
          })
         
        }
        }/>
       
         <CardList monsters={filterMonsters}/>

        
       
       
      
      
      </div>)
   }

}

export default App;
