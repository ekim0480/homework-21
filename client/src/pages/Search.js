import React, { Component } from 'react'
import { SearchInput, SearchBtn } from "../components/SearchInput"
import API from '../utils/API'

class Search extends Component {
    state = {
        search: "",
        results: [],
    };

    // runs search call to googlebooks api and updates state with results
    handleFormSubmit = event => {
        event.preventDefault();
        // console.log('im here')
        API.search(this.state.search)
            .then(res => {       
                this.setState({ results: res.data.items });
                // console.log(res.data.items)
        });       
    };

    // listens for change to input field and updates state
    handleInputChange = event => {
        event.preventDefault()
        this.setState({ search: event.target.value })
        // console.log(this.state)
    }

 

    render() {
        return (
            <>
                <div>
                    <SearchInput
                        value={this.state.search}
                        className="form-control"
                        type="text"
                        id="searchInput"
                        placeholder="Search GoogleBooks"
                        name="search"
                        onChange={this.handleInputChange}
                    />
                    <SearchBtn
                        id="searchBtn"
                        className="btn btn-primary"
                        type="submit"
                        onClick={this.handleFormSubmit}
                    >
                        Search
                    </SearchBtn>
                </div>
                <div className='container'>
                    <div className='card'>
                        {
                            // console.log('results', this.state.results)
                            this.state.results.map(data => {
                                console.log(data)
                                return (

                                    
                                    
                                    <ul>
                                        <li
                                        // key = {data.id}
                                        // title = {data.volumeInfo.title}
                                        // authors = {data.volumeInfo.authors}
                                        // description = {data.volumeInfo.description}
                                        // image = {data.volumeInfo.imageLinks.thumbnail}
                                        // link = {data.volumeInfo.infoLink}
                                        >
                                            {/* {console.log(data.id)} */}
                                            <p>{data.volumeInfo.title}</p>
                                            <p>{data.volumeInfo.authors}</p>
                                            <p>{data.volumeInfo.description}</p>
                                            <img alt="" src={data.volumeInfo.imageLinks.thumbnail} />
                                            <br></br>
                                            <a href={data.volumeInfo.infoLink}>Link</a>
                                            <button onClick={function(event) {
                                                event.preventDefault()
                                                console.log(data)
                                                API.saveBook({
                                                    authors: data.volumeInfo.authors,
                                                    description: data.volumeInfo.description,
                                                    image: data.volumeInfo.imageLinks.thumbnail,
                                                    link: data.volumeInfo.infoLink,
                                                    title: data.volumeInfo.title
                                                }).then(res => console.log(res)
                                                ).catch(err => console.log(err))
                                            }}>Save</button>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Search 