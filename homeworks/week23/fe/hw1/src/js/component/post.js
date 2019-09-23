import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    const { blogId } = this.props.match.params;
    fetch(`https://qootest.com/posts/${blogId}`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  handleDelete = () => {
    if (window.confirm('Sure to delete it?')) {
      const { blogId } = this.props.match.params;
      fetch(`https://qootest.com/posts/${blogId}`, {
        method: 'Delete',
      });
      alert('Delete Success!');
      window.history.back();
    }
  }

  render() {
    const { data } = this.state;
    const { history } = this.props;
    return (
      <main className="page wrap">
        <section>
          <article className="article">
            <h2 className="sub__title">
              {!data.title ? 'Loading' : data.title }
              <small>Author: { data.author }</small>
            </h2>
            <p className="context">
              {data.body}
            </p>
            <div className="row">
              <button
                className="btn btn__primary"
                role="link"
                type="button"
                onClick={() => {
                  history.push(`/edit/${data.id}`);
                }}
              >
                Update
              </button>
              <button
                className="btn btn__del"
                type="button"
                onClick={this.handleDelete}
              >
                Delete
              </button>
            </div>
            <a
              role="link"
              onClick={() => {
                window.history.back();
              }}
            >
              - back -
            </a>
          </article>
        </section>
      </main>
    );
  }
}

export default Post;
