import transferInner from '../assets/images/transfer_inner.svg'
import transferOuter from '../assets/images/transfer_Outer.svg'
import receiveInner from '../assets/images/receive_inner.svg'
import receiveOuter from '../assets/images/receive_Outer.svg'
import receiveOuterShine from '../assets/images/receive_OuterShine.svg'
import payment from '../assets/images/features_payments.svg'
import cashback from '../assets/images/features_cashback.svg'

function TransferReceive() {
  return (
    <section className="page_transfer-receive container padding-rl">
        <div className="transfer">
            <div className="transfer_txt">
                <h3>Make your money transfer simple and clear</h3>
                <ul>
                    <li>Banking transactions are free for you</li>
                    <li>No monthly cash commission</li>
                    <li>Manage payments and transactions online</li>
                </ul>
                <button className="btn_primary transfer_btn">
                    Learn more
                    <i className="fa-sharp fa-solid fa-arrow-right">
                        <a href="#"></a>
                    </i>
                </button>
            </div>
            <div className="transfer_img" >
                <img className="t-inner_img" src={transferInner} alt="Graph over money transfering history from the last six months." />
                <img className="t-outer_img" src={transferOuter}  alt="Three contacts showing as small pictures, for fast money transfurs." />
            </div>
        </div>
        <div className="receive" >
            <div className="receive_img">
                <img className="r-inner_img" src={receiveInner} alt="List of chatlogs from contacts returning or recieving transfurs." />
                <img className="r-outer_img r-o_1" src={receiveOuter} alt="Visa creditcard." />
                <img className="r-outer_img r-o_2" src={receiveOuterShine} alt="" />
            </div>

            <div className="receive_right">
                <h3>Receive payment from international bank details</h3>
                <div className="receive_txt">
                    <div className="r_payment">
                        <div className="feature_img " id="feature_img ">
                            <img src={payment} alt="Creditcard." />  
                        </div>
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>

                    <div className="r_cashback">
                        <div className="feature_img " id="feature_img ">
                            <img src={cashback} alt="Wallet." />  
                        </div>
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                </div>
                    <button className="btn_primary transfer_btn">
                      Learn more
                      <i className="fa-sharp fa-solid fa-arrow-right"></i>
                      <a href="#"></a>
                  </button>
            </div>
        </div>
    </section>
  )
}

export default TransferReceive
