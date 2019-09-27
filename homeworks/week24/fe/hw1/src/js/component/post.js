import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  componentDidUpdate() {
    const { editDone, history, updateNav } = this.props;
    if (editDone) {
      history.push('/');
      updateNav('/');
    }
  }

  handleDelete = () => {
    if (window.confirm('Sure to delete it?')) {
      const { id } = this.props.match.params;
      const { deletePost } = this.props;
      deletePost(id);
    }
  }

  render() {
    const { history, post, isLoading, updateNav } = this.props;
    return (
      <main className="page wrap">
        <section>
          {
            isLoading
              ? <div className="cssload-loader" />
              : (
                <article className="article">
                  <h2 className="sub__title">
                    { post.title }
                    <small>Author: { post.author }</small>
                  </h2>
                  <ReactMarkdown className="context" source={post.body} />
                  <div className="row">
                    <button
                      className="btn btn__primary"
                      role="link"
                      type="button"
                      onClick={() => {
                        history.push(`/edit/${post.id}`);
                        updateNav('/edit');
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
                      history.goBack();
                    }}
                  >
                  - back -
                  </a>
                </article>
              )
          }
        </section>
      </main>
    );
  }
}

export default Post;
