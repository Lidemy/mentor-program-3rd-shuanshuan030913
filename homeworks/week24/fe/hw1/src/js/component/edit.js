import React, { Component } from 'react';
import '../../scss/normalize.css';
import '../../scss/style.scss';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      body: '',
    };
  }

  componentDidMount = () => {
    const id = this.props.match.params.id ? this.props.match.params.id : '';
    if (id) {
      this.props.getPost(id);
    }
  }

  componentDidUpdate(prevProps) {
    const { post, editDone, history, updateNav } = this.props;
    if (post !== prevProps.post) {
      this.handlePropsToState();
    }
    if (editDone) {
      history.push(`/blog/${post.id}`);
      updateNav('/blog');
    }
  }

  handlePropsToState = () => {
    const { post } = this.props;
    this.setState({
      title: post.title,
      author: post.author,
      body: post.body,
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id ? this.props.match.params.id : '';
    const newData = this.state;

    if (id) {
      this.props.uptPost(id, newData);
    } else {
      this.props.addPost(newData);
    }
  }

  render() {
    const { title, author, body } = this.state;
    const { isLoading, history, updateNav } = this.props;

    return (
      <main className="writing wrap">
        <h1 className="main__title">
          { this.props.match.params.id ? 'Update the post' : 'Create a new post'}
        </h1>

        {
          isLoading
            ? <div className="cssload-loader" />
            : (
              <section>
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div>標題：</div>
                    <input
                      className="form-element"
                      name="title"
                      value={title}
                      onChange={this.handleInputChange}
                      required="required"
                    />
                  </div>
                  <div className="row">
                    <div>作者：</div>
                    <input
                      className="form-element"
                      name="author"
                      value={author}
                      onChange={this.handleInputChange}
                      required="required"
                    />
                  </div>
                  <div className="row">
                    <div>文章內容：</div>
                    <textarea
                      className="form-element"
                      rows="10"
                      name="body"
                      value={body}
                      onChange={this.handleInputChange}
                      required="required"
                    />
                  </div>
                  <div className="row btn__group">
                    <button className="btn btn__primary" type="submit">Submit</button>
                    {
                      this.props.match.params.id
                        ? (
                          <button
                            className="btn btn__secondary"
                            type="button"
                            onClick={() => {
                              updateNav('/blog');
                              history.goBack();
                            }}
                          >
                            Cancle
                          </button>
                        )
                        : ''
                    }
                  </div>
                </form>
              </section>
            )
        }
      </main>
    );
  }
}

export default Edit;
