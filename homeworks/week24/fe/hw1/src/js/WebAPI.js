export const getPostsData = () => (
  fetch('https://qootest.com/posts?_sort=id&_order=desc')
);

export const getPostData = id => (
  fetch(`https://qootest.com/posts/${id}`)
);

export const updatePost = (id, newData) => (
  fetch(`https://qootest.com/posts/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
);

export const addPost = newData => (
  fetch('https://qootest.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  })
);

export const deletePost = id => (
  fetch(`https://qootest.com/posts/${id}`, {
    method: 'Delete',
  })
);
