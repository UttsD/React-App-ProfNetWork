import React from 'react';
import s from './Login.module.css'
import { reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../helpers/validators/validators'
import { FormControl } from '../common/FormsValid/FormsValid'
import { connect } from 'react-redux'
import { login, logout } from '../../actions/auth-actions'
import { Redirect } from 'react-router-dom';
import style from '../common/FormsValid/FormsValid.module.css'
import { createMyField } from '../../helpers/form-helpers';


const TextInput = FormControl('input')
const maxLength30 = maxLengthCreator(30);


const Login = ({ login, isAuth, captchaUrl }) => {
    const onSubmit = (formData) => {
        
        login(formData.login, formData.password, formData.checkbox, formData.captcha)

    }


    if (isAuth) return <Redirect to={'/profile'} />

    return (<div className={s.login__component}>
        <h2>Форма входа пользователя</h2>
        <LoginRedux captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
    );
};

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

    return (
        <div className={s.form__box}>
            <form onSubmit={handleSubmit}>
                <div className={s.form__box_inner}>
                    <div className={s.form__box_left}>


                        {createMyField('Login', 'login', TextInput, [maxLength30, required], 'Email или Login')}

                        {createMyField('Password', 'password', TextInput, [maxLength30, required], 'Пароль', { type: 'password' })}

                        {createMyField(null, 'checkbox', TextInput, [], 'Чужой компьютер', { type: 'checkbox' })}
                        {captchaUrl && <img src= {captchaUrl}/>}
                        {captchaUrl && createMyField('Symbols from image', 'captcha', TextInput, [required], '')}

                        {error &&
                            <div className={style.form_summory_error}>
                                {error}

                            </div>
                        }
                        <button type="submit" className={s.login__btn}>
                            Вход
                                    </button>
                    </div>


                </div>

            </form>

        </div>
    );
};

const LoginRedux = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const mapStateToProps = state => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);