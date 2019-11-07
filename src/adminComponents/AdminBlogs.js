import React, { Component } from 'react'
import Logo from '../img/Logo.png'
import {Link} from 'react-router-dom'

class AdminBlogs extends Component {

    state = {
        Blogs: [
            { id: 1, title: 'Post 1', text: 'blah blah blah blah blah blah' },
            { id: 2, title: 'Post 2', text: 'blah blah blah blah blah blah' },
            { id: 3, title: 'Post 3', text: 'blah blah blah blah blah blah' },
        ]
    }

    render() {

        let BLogsList = this.state.Blogs.length ?
            (
                this.state.Blogs.map(blog => {
                    return (
                        <div className="card container w-75 mt-3 mb-3" key={blog.id}>
                            <div className="d-flex flex-row mx-2 mt-2">
                                <img src={Logo} className="m-2" alt="" width="200" height="200"></img>
                                <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: 3, height: 'auto' }} className="rounded m-2"></div>
                                <div className="d-flex flex-column m-2">
                                    <h3 className="m-1">{blog.title}</h3>
                                    <div className="m-1 mt-4" style={{ fontSize: 18 }}>{blog.text}</div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-end p-2">
                                <Link to={'/adminaccess/blogs/' + blog.id} style={{textDecoration:'none'}}>
                                    <i className="material-icons mr-5 text-success" style={{fontSize:28}}>edit</i>
                                </Link>    
                                <i className="material-icons text-danger" style={{fontSize:28}}>delete</i>
                            </div>
                        </div>
                    )
                })
            ) :
            (
                <div className="container text-center" style={{ fontSize: 30 }}> No posts yet! </div>
            )

        return (
            <div>
                <div className="ClientDiariesBannerPic d-flex p-5 align-items-end" style={{ backgroundColor: '#66CD00', height: 250, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <h2 className="text-white">
                        Blogs
                    </h2>
                </div>

                <div className="p-2" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                    {BLogsList}
                </div>

            </div>
        )
    }
}

export default AdminBlogs