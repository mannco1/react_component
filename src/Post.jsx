import './Post.css'
import { useState } from 'react';







const Post = () => {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(-1);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (currentPostIndex === -1) {
      // Создание нового поста
      const newPost = { title, image, content };
      setPosts([...posts, newPost]);
    } else {
      // Редактирование существующего поста
      const updatedPost = { ...posts[currentPostIndex], title, image, content };
      const updatedPosts = [...posts];
      updatedPosts[currentPostIndex] = updatedPost;
      setPosts(updatedPosts);
      setCurrentPostIndex(-1); // Сброс текущего индекса после редактирования
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
    // Удаление поста
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
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