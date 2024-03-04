import './css/Post.css'




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(-1);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Загрузка данных с сервера при монтировании компонента
    axios.get('http://localhost:3001/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Ошибка при загрузке данных', error));
  }, []);

  const handleSave = () => {
    const newPost = { title, image, content };

    if (currentPostIndex === -1) {
      // Создание нового поста
      axios.post('http://localhost:3001/posts', newPost)
        .then(response => setPosts([...posts, response.data]))
        .catch(error => console.error('Ошибка при создании поста', error));
    } else {
      // Редактирование существующего поста
      axios.put(`http://localhost:3001/posts/${posts[currentPostIndex].id}`, newPost)
        .then(response => {
          const updatedPosts = [...posts];
          updatedPosts[currentPostIndex] = response.data;
          setPosts(updatedPosts);
          setCurrentPostIndex(-1); // Сброс текущего индекса после редактирования
        })
        .catch(error => console.error('Ошибка при редактировании поста', error));
    }

    // Сброс полей ввода
    setTitle('');
    setImage('');
    setContent('');
  };

  const handleEdit = (index) => {
    // Установка данных текущего поста в форму редактирования
    const postToEdit = posts[index];
    setTitle(postToEdit.title);
    setImage(postToEdit.image);
    setContent(postToEdit.content);
    setCurrentPostIndex(index);
  };

  const handleDelete = (index) => {
    const postIdToDelete = posts[index].id;
  
    // Удаление поста с сервера
    axios.delete(`http://localhost:3001/posts/${postIdToDelete}`)
      .then(response => {
        // Если удаление на сервере прошло успешно, обновляем состояние компонента
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
      })
      .catch(error => console.error('Ошибка при удалении поста', error));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='container'>
      <div className='flex__l'>
        <label className='l1'>
          Название:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label className='l2'>
          Картинка:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {image && <img src={image} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        <br />
        <label className='l3'>
          Основной текст:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button onClick={handleSave}>{currentPostIndex === -1 ? 'Создать пост' : 'Сохранить'}</button>
      </div>

      <div className='flex__post'>
        {posts.map((post, index) => (
          <div key={index}>
            <p>{post.title}</p>
            <p><img src={post.image ? post.image : '/src/assets/ru-default-large_default.jpg'} alt='Preview' style={{ maxWidth: '100%', maxHeight: '100%' }} /></p>
            <p className='p1'>Основной текст:{post.content}</p>
            <button onClick={() => handleEdit(index)}>Редактировать</button>
            <button onClick={() => handleDelete(index)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
