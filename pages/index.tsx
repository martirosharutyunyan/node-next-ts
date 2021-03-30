import React, { useState, useEffect, useMemo, useRef, memo, FC } from "react";
import axios, { AxiosResponse } from "axios";
//types
import {
    input,
    axiosType,
    userDataType,
    stateType,
} from "../types/types";
import { useHistory } from 'react-router-dom';
let Container1: FC = () => {
    const history = useHistory();
    const getUsers = async (): Promise<void> => {
        let postToBack: axiosType = await axios.post("/getUsers");
        setarr(postToBack.data);
    };

    const [state, setstate] = useState<stateType>({
        name: "Martiros",
        surname: "Harutunyan",
        email: "harutunyan.martiros@mail.ru",
        password: "hhs13516",
        confirmPassword: "hhs13516",
        loginEmail: "harutunyan.martiros@mail.ru",
        loginPassword: "hhs13516",
        verificationCode: "",
    });
    const [arr, setarr] = useState<userDataType[]>([]);
    const [load, setload] = useState<boolean>(true);
    const [counter, setcounter] = useState<boolean>(true);
    const [message, setmessage] = useState<string>("");
    const [token, settoken] = useState<string>("");
    const [userId, setuserId] = useState<string>("");
    const [verify, setverify] = useState<boolean>(true);
    const [code, setcode] = useState<string>('');
    const autoLogin = async (): Promise<void> => {
        if (localStorage.getItem("secret") !== null) {
            let postToBack = await axios.post("/autoLogin", {
                token: localStorage.getItem("secret"),
            });
        }
    };
    useEffect(() => {
        autoLogin();
    }, []);
    useEffect((): void => {
        getUsers();
    }, [load]);
    const changeValue = (e: input): void => {
        // setstate((prev:objectType):objectType=>{
        //     return {
        //         ...prev,
        //         [e.target.id]:e.target.value
        //     }
        // })
        // parzel te inchi chi ashxatum es verevi dzevy
        setstate({ ...state, [e.target.id]: e.target.value });
    };
    const clear = ():void => {
        setstate({
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
            loginEmail: "harutunyan.martiros@mail.ru",
            loginPassword: "hhs13516",
            verificationCode: "",   
        })
        setverify(true)
    }
    const deleteUser = async (elem: userDataType): Promise<void> => {
        await setload(false);
        let postToBack: axiosType = await axios.post("/deleteUser", elem);
        await setload(true);
        setmessage(postToBack.data.message);
        setTimeout(() => {
            setmessage("");
        }, 2000);
    };

    const Registration = async (): Promise<void> => {
        try {
            await setload(false);
            let postToBack: axiosType = await axios.post("/api/auth/registr", {
                name: state.name,
                surname: state.surname,
                email: state.email,
                password: state.password,
            });
            await setload(true);
            if(postToBack.data.message === 'already exists'){
                setmessage(postToBack.data.message);
                setTimeout(() => {
                    setmessage("");
                }, 2000);
            } else {
                setverify(false);
                setcode(postToBack.data.code)
            }
            console.log(postToBack.data)
        } catch (err) {
            console.log(err);
        }
    };
    const loginPost = async (): Promise<void> => {
        await setload(false);
        let postToBack1:AxiosResponse = await axios.post('/login',{
            loginEmail: state.loginEmail,
            loginPassword: state.loginPassword,
        })
        let postToBack = await axios.post("/api/auth/login", {
            loginEmail: state.loginEmail,
            loginPassword: state.loginPassword,
        });
        console.log(postToBack.data)
        if (postToBack.data.message === "password is incorect try again") {
            console.log("password is incorect try again");
        } else if (
            postToBack.data.message ===
            "sorry your login or email are not right"
        ) {
            console.log("sorry your login or email are not right");
        } else {
            localStorage.setItem(
                "secret",
                JSON.stringify(
                    {
                        token: postToBack.data.token,
                        userId: postToBack.data.userEmail._id,
                    },
                    null,
                    2,
                ),
            );
            // await history.push(`/user/${postToBack.data.userEmail.name}`);
        }
        await setload(true);
        setTimeout(() => {
            setmessage("");
        }, 1000);
    };
    const verificate = async (): Promise<void> => {
        setload(false)
        let postToBack = await axios.post("/api/auth/save", {
            name: state.name,
            surname: state.surname,
            email: state.email,
            password: state.password,
            verificationCode: state.verificationCode,
            code,
        });
        if(postToBack.data.message === 'User saved'){
            setmessage(postToBack.data.message)
            setcounter(true)
            setverify(!verify)
            setstate({...state,verificationCode:''})
        } else{
            setmessage(postToBack.data.message)
            setTimeout(() => {
                setmessage("");
            }, 2000);
        }
        setload(true)
    };
    if (!load) {
        return (
            <>
                <div className="loaderReact">
                    <div
                        className="spinner-border text-primary"
                        style={{ width: "500px", height: "500px" }}
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </>
        );
    }
    const verification = (
        <>
            <input
                type="text"
                onChange={changeValue}
                value={state.verificationCode}
                id="verificationCode"
            />
            <button onClick={verificate}>click for verification</button>
        </>
    );
    const registracia = (
        <div className="registracia">
            <div style={{ fontSize: "2vw" }}>Registracia</div>
            <input
                onChange={changeValue}
                value={state.name}
                placeholder="name"
                type="text"
                id="name"
            />
            <input
                onChange={changeValue}
                value={state.surname}
                placeholder="surname"
                type="text"
                id="surname"
            />
            <input
                onChange={changeValue}
                value={state.email}
                placeholder="email"
                type="text"
                id="email"
            />
            <input
                onChange={changeValue}
                value={state.password}
                placeholder="password"
                type="password"
                id="password"
            />
            <input
                onChange={changeValue}
                value={state.confirmPassword}
                placeholder="confirm Password"
                type="password"
                id="confirmPassword"
            />
            <button
                onClick={Registration}
                disabled={
                    state.name.trim() &&
                    state.surname.trim() &&
                    state.email.trim() &&
                    state.password.trim() &&
                    state.confirmPassword.trim() &&
                    state.confirmPassword === state.password &&
                    state.password.length >= 8 &&
                    state.confirmPassword.length >= 8
                        ? false
                        : true
                }
            >
                click
            </button>
            {verify ? null : verification}
            <button onClick={clear}>clear</button>
        </div>
    );

    const login = (
        <div className="login">
            <div style={{ fontSize: "2vw" }}>Login</div>
            <input
                value={state.loginEmail}
                onChange={changeValue}
                placeholder="email"
                id="loginEmail"
                type="text"
            />
            <input
                value={state.loginPassword}
                onChange={changeValue}
                placeholder="password"
                id="loginPassword"
                type="text"
            />
            <button onClick={loginPost}>click</button>
        </div>
    );
    return (
        <>
            <div className="div">
                <p onClick={() => setcounter(!counter)}>
                    {counter ? "go to registracia" : "go to login"}
                </p>
                {counter ? login : registracia}
                {arr.map(
                    (elem: userDataType, i: number): JSX.Element => {
                        return (
                            <div key={elem.id}>
                                <p>{elem.email}</p>
                                <p>{elem.password}</p>
                                <button onClick={deleteUser.bind(null, elem)}>
                                    delete
                                </button>
                            </div>
                        );
                    },
                )}
            </div>
            <p>{message}</p>
        </>
    );
};

export default Container1 = memo(Container1);
