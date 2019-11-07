import React, { Component } from 'react'
import Logo from '../img/Logo.png'
import ClientDiariesBanner from '../img/ClientDiariesBanner.jfif'

class Home extends Component{
    render(){
        let fatemaDesc = 'adc;ldanvlovolwvolnl  whnvold dnv;ldk  sadnl kc a;sdnl d;n sdn l;snd l adn;vj asld;n a;sldn v a;sldn  sa;ldn  as;dln  a;sdnl  ;snld  as;nd ol a;sdjvn a s;dnl l snd;lv ls';

        return(
        <div>

            <div style={{backgroundColor: '#66CD00'}}>
                <div className="Intro p-2 d-flex flex-row justify-content-center">  
                  <div className="d-flex flex-column align-self-center mr-4">             
                    <h2 className="text-white" style={{width:500}}>
                       STAY HEALTHY WITH FATEMA BANDUKWALA
                    </h2>
                    <button className="btn btn-success mt-3" style={{width: 150}}>Read More</button>
                  </div>
                    <img src={Logo} alt="" className="AaharPic d-flex align-self-right" width="300" height="300"></img>
                </div>
            </div>

            <div className="About container-fluid w-50 my-4 d-flex flex-row align-self-center">
                <img src={Logo} alt="" className="FatemaPic m-2"></img>
                <div className="d-flex flex-column m-4">
                   <div style={{fontSize:18}}>{fatemaDesc}</div>
                   <button className="btn btn-outline-success mt-3" style={{width: 150}}>Read More</button>
                </div>
            </div>

            <div className="d-flex align-self-center m-5 rounded" style={{backgroundColor: 'rgba(0,0,0,0.2)', width:'auto', height:3}}></div>
         
            <div className="Testemony container w-50 d-flex flex-column align-items-center mb-5">
                <h2 className="text-success mb-3">My Testimony to my Clients</h2> 
                <img className="mb-3" src={ClientDiariesBanner} alt="" width="500" height="300"></img>
                <div style={{fontSize:18}}>{fatemaDesc+fatemaDesc+fatemaDesc}</div>
            </div>
               
            <div style={{backgroundColor: 'orange'}} className="p-3">
                <div className="NewPost container" style={{width:500,height:500}}>
                <h2 className="text-center text-white my-3">My Latest Blog</h2>
                <div className="card p-2"> 
                  <img src={Logo} alt="" className="FatemaPic d-flex align-self-center" width="300" height="300"></img>
                  <div className="card-body">
                      <h4 className="card-title">New Post</h4>
                      <div className="card-text" style={{fontSize: 18}}>Text for the latest post</div>
                  </div>
                </div>
                </div>
            </div>
        
            <div className="footer d-flex align-items-center justify-content-center" style={{backgroundColor:'#00415a', height:60}}>
               <div className="text-white"> Fatema Bandukwala. All Rights Reserved | Developed by </div>
               <div className="text-warning ml-1">IMD Corporation</div>
            </div>

        </div>
        )
    }
}

export default Home