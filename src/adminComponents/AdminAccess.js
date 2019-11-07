import React from 'react'
import AdminBlogs from '../adminComponents/AdminBlogs'
import AdminClDiaries from '../adminComponents/AdminClDiaries'

const AdminAccess = () => {

    let adminPage = (
        <div>
            <div className="d-flex flex-row p-3">

                <div className="col-lg-6">
                    <AdminBlogs/>
                </div>

                <div className="col-lg-6">
                    <AdminClDiaries/>
                </div>

            </div>

            <div className="footer d-flex align-items-center justify-content-center" style={{backgroundColor:'#00415a', height:60}}>
                <div className="text-white"> Fatema Bandukwala. All Rights Reserved | Developed by </div>
                <div className="text-warning ml-1">IMD Corporation</div>
            </div>
       </div>
    )

    return(
        <div>
            {adminPage}
        </div>
   )    
}

export default AdminAccess