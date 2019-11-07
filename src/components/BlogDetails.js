import React from 'react'
import Logo from '../img/Logo.png'

const BlogDetails = (props) => {

    return (
        <div>
            <div className="p-4" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                <div className="container card d-flex flex-column p-3">
                    <img className="d-flex align-self-center mb-3" src={Logo} alt="" width="300" height="300"></img>
                    <h4 className="mb-3">Title</h4>
                    <div style={{ fontSize: 18 }}>Ut voluptate minim commodo anim aliquip cillum eiusmod cillum ullamco. Exercitation ad non aliqua adipisicing eiusmod. Consequat veniam enim eu reprehenderit incididunt. Officia minim cupidatat excepteur ipsum dolor magna. Laboris id laborum voluptate id deserunt et et anim.</div>
                </div>
            </div>

            <div className="footer d-flex align-items-center justify-content-center" style={{ backgroundColor: '#00415a', height: 60 }}>
                <div className="text-white"> Fatema Bandukwala. All Rights Reserved | Developed by </div>
                <div className="text-warning ml-1">IMD Corporation</div>
            </div>

        </div>
    )
}

export default BlogDetails