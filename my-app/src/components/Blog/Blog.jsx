import React from 'react';
import s from './Blog.module.css'
import Posts from './Posts/Posts';
import { Field, reduxForm } from 'redux-form'
import {required, maxLengthCreator} from '../../helpers/validators/validators'
import {FormControl} from '../common/FormsValid/FormsValid'

const TextInput = FormControl('input')


const  maxLength30 =  maxLengthCreator(30);

const Blog = (props) => {

  let onAddPost = (value) => {
    console.log(value)
    props.addPost(value.post_title, value.post_description, value.post_text);
  }

  return (
    <section className="blog">
      <h3 className='headers'>Blog</h3>
      <Posts posts={props.posts} />
      <AddPostReduxForm onSubmit={onAddPost}  />
    </section>


  );

};

const AddPostForm = props => {
  return (
    <div className={s.form__box}>
      <form onSubmit={props.handleSubmit}>
        <div className={s.form__box_inner}>
          <div className={s.form__box_left}>
            <label for="">
              Заголовок
                                        <Field type="text" name="post_title" placeholder = 'Post title' component={TextInput} validate={[required, maxLength30]} ></Field>
            </label>
            <label for="">
              Описание
                                        <Field type="text" name="post_description" component="input"></Field>
            </label>
            <label for="">
              Введите текст поста
                                        <Field type="textarea" name="post_text" component="input"></Field>
            </label>
            <button type="submit" className={s.login__btn} >
              Опубликовать
                                    </button>
          </div>


        </div>

      </form>

    </div>
  )
}

const AddPostReduxForm = reduxForm({
  // a unique name for the form
  form: 'addPost'
})(AddPostForm)

export default Blog;