import { AxiosResponse } from "axios"
import { actionTypes } from "./actionsTypes"

export type actionType = {
    type:actionTypes
    payload:any
}




export type input =  React.ChangeEvent<HTMLInputElement>

export type button = React.MouseEvent<HTMLButtonElement>

export type jsx = JSX.Element

export type stateType = {
    name:string
    surname:string
    email:string
    password:string
    confirmPassword:string
    loginEmail:string
    loginPassword:string
    verificationCode:string
}

export type userDataType = {
    id:number
    name:string
    surname:string
    email:string
    password:string
}

export type axiosType = AxiosResponse<any>

export type parsedDataType = {
    token:string
    userId:string
}

export type objectOfDataType = {
    id:string
    name:string
    surname:string
    email:string
    password:string
}

export type nodemailerMessageType = {
    from: string
    to: string
    subject: string
    text:string
}

export type webpackType = {
    entry:string
    output:{
        filename:string
        path:string
    }
}