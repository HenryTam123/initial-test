import React from 'react'

const Footer = () => {
    return (
        <div className='custom-footer'>
            <div className="custom-footer-container">
                <div className="first-row">
                    <div className="custom-col">
                        <img src={require('../images/logo.png')} alt="logo" height={70} width={200} />

                    </div>
                    <div className="custom-col">
                        <h5>關注我們</h5>
                    </div>
                    <div className="custom-col">
                        <h5>客戶服務</h5>
                        <a className="footer-link" href="#">訂單狀態</a>
                        <a className="footer-link" href="#">退貨 / 換貨政策</a>
                        <a className="footer-link" href="#">送貨</a>
                        <a className="footer-link" href="#">常見問題</a>
                        <a className="footer-link" href="#">產品購買須知及</a>
                        <a className="footer-link" href="#">注意事項</a>
                    </div>
                    <div className="custom-col">
                        <h5>隱私權</h5>
                    </div>
                    <div className="custom-col">
                        <h5>聯繫我們</h5>
                    </div>
                </div>
                <div className="second-row">
                    <div>Copyright © 2022 OLAY All rights reserved.</div>
                    <div>
                        <a href="#">AdChoices</a>
                        <a href="#">條款 協議</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer