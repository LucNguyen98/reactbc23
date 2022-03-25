import React, { Component } from 'react'

export default class DataBinding extends Component {

    product = {
        id: 1,
        name: 'phone',
        price: 2000,
        img: 'https://i.pravatar.cc?u=77'
    }

    renderMessage = () => {
        return 'Hello cybersoft'
    }

    renderCard = () => {
        return (// Noi dung return cua ham phai chua trong 1 the bao phu
            <div className="card w-25">
                <img src={this.product.img} alt="" />
                <div className="card-body">
                    <p>{this.product.name}</p>
                    <p>{this.product.price}</p>
                    <button className="btn btn-success">Add to cart</button>
                </div>
            </div>
        )
    }

    render() {
        let title = 'CyberSoft'
        return (
            <div>tên trung tâm {title}
                <hr />
                {this.renderCard()}
                <hr />
                <p>Loi chao {this.renderMessage()}</p>
            </div>
        )
    }
}
