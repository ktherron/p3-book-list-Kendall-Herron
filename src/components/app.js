import React, { Component } from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<BookList />
					</div>
					<div className="col-md-4">
						<BookDetail />
					</div>
				</div>
			</div>
		);
	}
}
