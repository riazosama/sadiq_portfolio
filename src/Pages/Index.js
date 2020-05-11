import React, {Component} from 'react';
import Header from "../Shared/Header";
import Opening from "../Shared/Opening";
import Portfolio from "../Shared/Portfolio";
import Footer from "../Shared/Footer";

class Index extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Opening/>
                <Portfolio/>
                <Footer/>
            </div>
        )
    }
}

export default Index;
