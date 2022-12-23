import React from 'react';
import searchlogo from '../../Assets/searchlogo.png';
import './navigation.css';
import newslogo2 from '../../Assets/newslogo2.svg'

export default class Search extends React.Component {
    state = { isOpen: false };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <div>
                <img
                    className="small"
                    src={searchlogo}
                    onClick={this.handleShowDialog}
                    alt="no image"
                />
                {this.state.isOpen && (
                    <dialog
                        className="dialog"
                        style={{ position: "absolute" }}
                        open

                    >    
                    

                        <form action="/" method="get">

                            <input className='search-bar'
                                type="text"
                                id="header-search"
                                placeholder="Search WOWT..."
                            />
                            <button className="search-button">Extended Search</button>
                            <button className="close-button">X</button>
                        </form>
                    <img 
                            className="news-logo2"
                            src={newslogo2}
                        />
                    </dialog>
                )}
            </div>
        );
    }
}




