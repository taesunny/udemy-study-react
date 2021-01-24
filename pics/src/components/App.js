import React from "react";
import unsplash from "../api/unsplash"; // top of other customized imports statements <- convention
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {
        images: [], // expects array, if with null, this.state.images.map should be called
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: {
                query: term,
            },
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;
