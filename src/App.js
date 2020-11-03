import React from "react";
import { checkPropTypes } from "prop-types";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  
  state = {
    isLoading: true,
    movies: [] 
  };
  
  getMovies = async() =>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  }

  componentDidMount(){
    this.getMovies(); 
  }

  render(){
    const {isLoading, movies} = this.state;
    return <div>
      {isLoading ? "Loading...": movies.map(movie => {
         <Movie 
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          />;
      })}
    </div>;
  };
}


//==============================================================================================================
// class App extends React.Component{
//   state = {
//     count: 0
//   };

//   add = () => {
//     this.setState(current =>({count : current.count + 1} ));
//   };

//   minus =()=>{
//     this.setState(current =>({count : current.count - 1} ));
//   };
  
//   render(){
//     return <div>
//       <h1>The number is {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//     </div>
//   };
// }
// =============================================================================================
// function Food({name, picture, rating}) {
//   return <div>
//     <h3>I like {name}!!</h3>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt={name} />
//   </div>;
// }

// const food_list = [
//   {name: "spaghetti", image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/21/4f83c21285bb647c0d60d934b12ee18a1.jpg", rating:5},
//   {name: "samgyeapsal", image:"https://lh3.googleusercontent.com/proxy/GEg-GC-OhRn6IruX2cpBmveGEA7GaBkY7_tnELNYb3-3VWLAwXXELDZarRh7q18JkwRNKkW2JP7I3Mf7jDmPQqxBWu6huqAMRcnnu2E5DSErtSdtr_VPtKGxKPPj-1ddipUmEJLBXQ", rating:4.9},
//   {name: "pizza", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg", rating: 4.8}
// ];

// Food.propTypes ={
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }; 

// function App() {
//   return (
//     <div className="App">
//       {food_list.map(food => (<Food key={food.id} name={food.name} picture={food.image} rating={food.rating} /> ) ) }
//     </div>
//   );
// }

export default App;
