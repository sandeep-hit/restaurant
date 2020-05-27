import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {  DISHES } from '../shared/dishes';
import {  PROMOTIONS } from '../shared/promotions';
import {  COMMENTS } from '../shared/comments';
import {  LEADERS } from '../shared/leaders';
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent';
import {Switch ,Route,Redirect} from 'react-router-dom';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      dishes : DISHES,
      leaders:LEADERS,
      promotions:PROMOTIONS,
      comments:COMMENTS,
    };
  }

  render()
  {
    const HomePage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((lead)=>lead.featured)[0]}/>
      );
    }
    //console.log({this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))[0]})
    const DishWithId=({match})=>{
        return(
          <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))} />
        );
    }
  return (
     
    <div>
    
   <Header/>
    <Switch>
      <Route path="/home" component={HomePage}/>
      <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
      <Route path="/menu/:dishId" component={DishWithId}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/home" />
    </Switch>
  <Footer/>
    </div>
  );
  }
}

export default Main;
