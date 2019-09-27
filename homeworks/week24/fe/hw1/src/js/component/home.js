import React, { Component } from 'react';
import '../../scss/normalize.css';
import '../../scss/style.scss';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getPostsList();
  }

  render() {
    const { history, posts, isLoading, updateNav } = this.props;
    return (
      <main className="home wrap">
        <h1 className="main__title">Home is where the heart is.</h1>

        {
          isLoading
            ? <div className="cssload-loader" />
            : (
              <section>
                <h2 className="sub__title">New Posts</h2>
                <article>
                  {posts.map(e => (
                    <a
                      key={e.id}
                      className="list link"
                      role="link"
                      onClick={() => {
                        history.push(`/blog/${e.id}`);
                        updateNav('/blog');
                      }}
                    >
                      <div className="list__title">
                        {e.title}
                      </div>
                      <p className="list__body">{e.body}</p>
                    </a>
                  ))}
                </article>
              </section>
            )
        }
      </main>
    );
  }
}

export default Home;
