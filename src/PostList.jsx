import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Загрузка данных с сервера при монтировании компонента
    axios.get('http://localhost:3001/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Ошибка при загрузке данных', error));
  }, []);

  return (
    <div>
      <h2>Список постов</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            
            <img src={post.image || '/src/assets/ru-default-large_default.jpg'} alt='Preview' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;