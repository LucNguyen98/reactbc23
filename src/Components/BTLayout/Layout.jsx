import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Navigation from './Navigation'

export default class Layout extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <Home />
                        <Header />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-4 pr-0">
                        <Navigation />
                    </div>
                    <div className="col-8 pl-0">
                        <Content />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
