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
      fetch(`https://qootest.com/posts/${id}`)
        .then(response => response.json())
        .then(data => this.setState({
          title: data.title,
          author: data.author,
          body: data.body,
        }));
    } else {
      this.setState({
        title: '',
        author: '',
        body: '',
      });
    }
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
    const { history } = this.props;

    if (id) {
      async function asyncUptPost() {
        try {
          await fetch(`https://qootest.com/posts/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
          });
        } catch (err) {
          console.log('err', err);
        }
        alert('Submit Success!');
        history.push('/');
      }
      asyncUptPost();

    } else {
      async function asyncNewPost() {
        try {
          await fetch('https://qootest.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
          });
        } catch (err) {
          console.log('err', err);
        }
        alert('Submit Success!');
        history.push('/');
      }
      asyncNewPost();
    }
  }

  render() {
    const { title, author, body } = this.state;
    return (
      <main className="writing wrap">
        <h1 className="main__title">
          { this.props.match.params.id ? 'Update the post' : 'Create a new post'}
        </h1>
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
                        window.history.back();
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
      </main>
    );
  }
}

export default Edit;
