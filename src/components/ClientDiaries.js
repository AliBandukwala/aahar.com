import React, { Component } from 'react'
import ClientDiariesBanner from '../img/ClientDiariesBanner.jfif'

class ClientDairies extends Component{

    state = {
        clientDiaries:[
            {id: 1, title: 'Client Name', synopsis: 'blah blah blah blah blah blah'},
            {id: 2, title: 'Client Name', synopsis: 'blah blah blah blah blah blah'},
            {id: 3, title: 'Client Name', synopsis: 'blah blah blah blah blah blah'}
        ]
    }

    render(){

        let clientDiariesList = this.state.clientDiaries.length ? 
        (
            this.state.clientDiaries.map(diary => {
                return(
                    <div>
                    <div className="d-flex flex-column align-items-center container mt-3 mb-3 col-md-8" key={diary.id}>
                        <div className="m-2" style={{backgroundImage: "url("+ClientDiariesBanner+")", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width:600, height:300}}></div>
                        <h3 className="m-2">{diary.title}</h3>
                        <div className="m-2 d-flex" style={{fontSize:18}}>
                           {diary.synopsis+diary.synopsis+diary.synopsis+diary.synopsis+diary.synopsis+diary.synopsis+diary.synopsis+diary.synopsis}
                        </div>
                    </div>
                    <div style={{backgroundColor:'rgba(0,0,0,0.2)', width:'auto', height:3}} className="rounded m-5 container w-70"></div>
                    </div>
                )
            })
        ) : 
        (
            <div className="container text-center" style={{fontSize: 30}}> No posts yet! </div>
        )

        return(
            <div>
                <div className="ClientDiariesBannerPic d-flex p-5 align-items-end" style={{backgroundColor:'#66CD00', height:250, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>            
                    <h2 className="text-white">
                       "Here's what my Clients have to say"
                    </h2>
                </div>

                <div>
                  {clientDiariesList}
               </div>

               <div className="footer d-flex align-items-center justify-content-center" style={{backgroundColor:'#00415a', height:60}}>
                  <div className="text-white"> Fatema Bandukwala. All Rights Reserved | Developed by </div>
                  <div className="text-warning ml-1">IMD Corporation</div>
               </div>

            </div>
        )
    }
}

export default ClientDairies