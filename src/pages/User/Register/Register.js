import React, {useState, useEffect} from 'react';
import User from "../User";
import Button from '@material-ui/core/Button';
import './Register.css'
import axios from "axios";
import {API_Station, TOKEN} from "../../../config/Config";
import {NavLink} from "react-router-dom";


const Login = () => {

    //postForm


//validation
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не должен быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не должен быть пустым')
    const [nameError, setNameError] = useState('Поле имя не должно быть пустым')
    const [formValid, setFormValid] = useState(false)

    const [login, setLogin] = useState()


    const [data, setData] = useState({email: email, password: password, username: username})

    const dataHandle = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post(API_Station, data, {
            method: 'POST',
            cors: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    email: data.email,
                    username: data.username,
                    password: data.password

                },
            )
        })
            .then(res => {
                console.log(res)
            })
        localStorage.setItem('user-info', JSON.stringify(data))

        userValidate()

    }
    console.log(data)

    async function userValidate(e) {

        const request = await fetch(TOKEN, {
            method: 'POST',
            cors: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    email: data.email,
                    username: data.username,
                    password: data.password

                },
            )
        })
        const response = await request.json()
        if (response) {
            localStorage.setItem("spiderman", JSON.stringify({response, username: data.username, email: data.email}));
            setLogin(JSON.parse(localStorage.getItem('spiderman')))
            if (response.auth_token && response.auth_token !== login?.response?.auth_token) {
                alert('Вы успешно зарегистрировались')
            } else if(response.auth_token === login?.response?.auth_token){
                alert('Такой пользователь уже существует')

                // window.location.reload();
            }else{
                alert('Неверные данные')
            }

        }

        console.log(response.auth_token)
    }
console.log(login?.response.auth_token)


    useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [emailError, passwordError, nameError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Неправильный Email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 || e.target.value.length > 15) {
            setPasswordError('Пароль должен быть больше 8 символов и меньше 15')
            if (!e.target.value) {
                setPasswordError('Пароль не должен быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const userNameHandler = (e) => {
        setUsername(e.target.value)
        const re = /^[a-zA-Z\-]+$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError('Неправильное имя')
        } else {
            setNameError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'username':
                setNameDirty(true)
                break
        }
    }

    return (
        <>
            <User/>
            <section className={'login register'}>
                <form onSubmit={(e => submit(e))} className="login__form">

                    <p>Имя пользователя</p>
                    {(nameDirty && nameError) && <div className={'login__error'}>{nameError}</div>}

                    <input onChange={e => {
                        userNameHandler(e)
                        dataHandle(e)

                    }}
                           value={username}
                           onBlur={e => blurHandler(e)}
                           name={'username'}
                           type="text"
                           placeholder={'Введите ваше имя...'}
                           id={'username'}
                           maxLength="20"
                    />
                    <p>Электронная почта</p>
                    {(emailDirty && emailError) && <div className={'login__error'}>{emailError}</div>}
                    <input onChange={e => {
                        emailHandler(e)
                        dataHandle(e)

                    }}
                           value={email}
                           onBlur={e => blurHandler(e)}
                           name={'email'}
                           type="text"
                           placeholder={'Введите ваш email адрес...'}
                           id={'email'}
                           maxLength="30"
                    />

                    <p>Пароль</p>
                    {(passwordDirty && passwordError) && <div className={'login__error'}>{passwordError}</div>}
                    <input onChange={e => {
                        passwordHandler(e)
                        dataHandle(e)

                    }}
                           value={password}
                           onBlur={e => blurHandler(e)}
                           name={'password'}
                           type="password"
                           placeholder={'Введите пароль...'}
                           id={'password'}
                           maxLength="15"
                    />

                    <div className="login-button__wrap">
                        <Button disabled={!formValid} type={'submit'} className={'login__button'}
                                variant="outlined">Register</Button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;