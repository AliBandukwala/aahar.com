import React, { Component } from 'react'

class Consult extends Component {
    render() {

        let consultPage = (
            <div>

                <div className="ClientDiariesBannerPic d-flex p-5 align-items-end" style={{ backgroundColor: '#66CD00', height: 250, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <h2 className="text-white">
                        "Let Us Help You Live A Healthy Life"
                    </h2>
                </div>

                <div className="TitleBox container d-flex flex-column mt-5 mb-3">
                    <div className="Title d-flex align-self-center text-success" style={{ fontSize: 40 }}>
                        <b>Our Consultation Program</b>
                    </div>
                    <div className="Body container w-75 d-flex align-self-center" style={{ fontSize: 18 }}>
                        Elit officia minim esse sit mollit. Magna cupidatat ea commodo esse velit nisi occaecat excepteur mollit. Minim minim irure in ullamco cillum eu labore amet proident qui eu dolor ea. Deserunt adipisicing adipisicing nostrud dolore et pariatur nulla dolore.
                    </div>
                </div>

                <div className="HIWBox container d-flex flex-column mt-5 mb-3">
                    <div className="Title d-flex align-self-center text-success" style={{ fontSize: 50 }}>
                        <b>How It Works</b>
                    </div>
                    <div className="w-75 d-flex align-self-start align-items-center rounded mb-2 mt-2 pl-5 pr-5" style={{ backgroundColor: '#B2DFEE' }}>
                        <div className="text-primary mr-3" style={{ fontSize: 145 }}>
                            <b>1</b>
                        </div>
                        <div style={{ fontSize: 20 }}>
                            Et eu ut laboris ex labore nisi officia sit incididunt sint sunt culpa ipsum proident.
                    </div>
                    </div>
                    <div className="w-75 d-flex align-self-center align-items-center rounded mb-2 mt-2 pl-5 pr-5" style={{ backgroundColor: 'rgba(255,127,80,0.5)' }}>
                        <div className="text-danger mr-3" style={{ fontSize: 145 }}>
                            <b>2</b>
                        </div>
                        <div style={{ fontSize: 20 }}>
                            Et eu ut laboris ex labore nisi officia sit incididunt sint sunt culpa ipsum proident.
                    </div>
                    </div>
                    <div className="w-75 d-flex align-self-end align-items-center rounded mb-2 mt-2 pl-5 pr-5" style={{ backgroundColor: 'rgba(50,205,50,0.5)' }}>
                        <div className="text-success mr-3" style={{ fontSize: 145 }}>
                            <b>3</b>
                        </div>
                        <div style={{ fontSize: 20 }}>
                            Et eu ut laboris ex labore nisi officia sit incididunt sint sunt culpa ipsum proident.
                    </div>
                    </div>
                </div>

                <div className="p-4" style={{ backgroundColor: 'orange' }}>
                    <div className="container d-flex flex-column align-items-center">
                        <div className="text-danger mb-3" style={{ fontSize: 45 }}>
                            <b>Our Plans</b>
                        </div>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Duration</th>
                                    <th scope="col">with</th>
                                    <th scope="col">Fees (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 Month</td>
                                    <td>Fatema</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td>Fatema</td>
                                    <td>5000</td>
                                </tr>
                                <tr>
                                    <td>6 Months</td>
                                    <td>Fatema</td>
                                    <td>10000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="d-flex align-self-center m-5 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: 'auto', height: 3 }}></div>

                <div className="d-flex flex-column align-items-center mb-4">
                    <div className="text-success mb-3" style={{fontSize:40}}>
                        <b>Contact Us</b>
                    </div>
                    <div className="d-flex flex-row">
                        <i className="material-icons mt-1 mr-3" style={{fontSize:30}}>email</i>
                        <div style={{fontSize:20}}>fatemabandukwala@gmail.com</div>
                    </div>
                    <div className="d-flex flex-row">
                        <i className="material-icons mt-1 mr-3" style={{fontSize:30}}>call</i>
                        <div style={{fontSize:20}}>+918866248752</div>
                    </div>
                </div>

                <div className="footer d-flex align-items-center justify-content-center" style={{ backgroundColor: '#00415a', height: 60 }}>
                    <div className="text-white"> Fatema Bandukwala. All Rights Reserved | Developed by </div>
                    <div className="text-warning ml-1">IMD Corporation</div>
                </div>

            </div>
        )

        return (
                <div>{consultPage}</div>
        )
    }
}

export default Consult