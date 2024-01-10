import React from "react"

class SearchPanel extends React.Component {


    state = {
        search: ''
    }
    // const {onSearchChange} = this.props


    dataSearch = (e) => {
        this.setState({ search: e.target.value })


        this.props.onSearchChange(this.state.search)
        console.log("SEARCH: " + this.state.search)

    }

    render() {



        return (<input placeholder="search"
            onChange={this.dataSearch} value={this.state.search} />
        )
    }


}

export default SearchPanel;