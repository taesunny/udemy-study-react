import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    // onFormSubmit(event) { } -> this is undefined inside the left style function
    onFormSubmit = (event) => {
        event.preventDefault(); // it prevents to refresh page

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({
                                    term: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
