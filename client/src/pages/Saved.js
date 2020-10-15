import React, { Component } from 'react'
import SavedDiv from '../components/SavedDiv'
import API from '../utils/API'

class Saved extends Component {
    state = {
        saved: []
    }

    renderSaved = event => {
        API.getBooks()
        .then(res => {
            this.setState({ saved: res.data })
            console.log(res.data)
        })
    }

    componentDidMount() {
        this.renderSaved()
    }

    render() {
        return (
            <div className="card">
                {
                    this.state.saved.map(data => {
                        // console.log('response', data)
                        return (
                            <ul>
                                <li>
                                    <p>{data.title}</p>
                                    <p>{data.authors}</p>
                                    <p>{data.description}</p>
                                    <img alt="" src={data.image} />
                                    <a href={data.link}>Link</a>
                                    <button onClick={function() {
                                        console.log('trying to delete', data)
                                        API.deleteBook(data._id)
                                        .then(res => {
                                            console.log('res', res)
                                            console.log('deleting', data._id)
                                        })
                                    }}>delete</button>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}

export default Saved

{/* <div className='container'> */}
            {/* <button onClick={function(event){
                event.preventDefault()
                API.getBooks()
                .then(res => {
                    console.log(res.data)
                })
            }}>get books</button> */}
            // <ul>
                // <li>

                // </li>
            // </ul>
        // </div>