import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Blogs from '../components/Blogs'
import ClientDiaries from '../components/ClientDiaries'
import Home from '../components/Home'
import Consult from '../components/Consult'
import Products from '../components/Products'
import BlogDetails from '../components/BlogDetails'
import AdminAccess from '../adminComponents/AdminAccess'
import AdminBlogEdit from '../adminComponents/AdminBlogEdit'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar/>

        <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/blogs"  component={Blogs}/>
        <Route  path="/client-diaries"  component={ClientDiaries}/>
        <Route  path="/consult"  component={Consult}/>
        <Route  path="/products"  component={Products}/>
        <Route  exact path="/adminaccess"  component={AdminAccess}/>
        <Route  exact path="/blogs/:id" component={BlogDetails} />
        <Route  exact path="/adminaccess/blogs/:id" component={AdminBlogEdit} />
        </Switch>
      </div>
    );
  }
}
 
export default App;
