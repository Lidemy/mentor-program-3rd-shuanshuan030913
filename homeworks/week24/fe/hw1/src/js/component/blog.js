import React, { Component } from 'react';
import '../../scss/normalize.css';
import '../../scss/style.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getPostsList();
  }

  render() {
    const { history, posts, isLoading } = this.props;
    return (
      <main className="blog wrap">
        <h1 className="main__title">Blog Posts</h1>
        <section>
          {
            isLoading
              ? <div className="cssload-loader" />
              : (
                <article>
                  {posts.map(e => (
                    <a
                      key={e.id}
                      className="list link"
                      role="link"
                      onClick={() => {
                        history.push(`/blog/${e.id}`);
                      }}
                    >
                      <div className="list__title">
                        {e.title}
                      </div>
                      <p className="list__body">{e.body}</p>
                    </a>
                  ))}
                </article>
              )
          }
        </section>
      </main>
    );
  }
}

export default Blog;
