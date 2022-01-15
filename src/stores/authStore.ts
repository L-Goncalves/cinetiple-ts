import { makeAutoObservable, autorun, runInAction, reaction, makeObservable, observable, action } from "mobx"
import axios from "axios"
import React from "react"



const api = axios.create({
    baseURL: "http://192.168.15.75:8000",

  });



 export class AuthStoreImpl {
    

    currentUser: any = {}
    auth: boolean = false
    error: any = {}

    constructor() {
        makeObservable(this, {
            currentUser: observable,
            login: action,
            auth: observable,
            error: observable
        })
    }   

 
    // Creates a fresh Todo on the client and the server.
    async login(email, password) {
        try {
          const result = await api.post('/users/login',
          {
                email: email,
                password: password,
            })

           
            if(result.data.error){
                throw ({error: result.data.error})
            }
           this.setUser(result.data)
           this.auth = true
           this.error = {}
            return result
        } catch (error) {
            this.auth = false
            this.error = error
            console.log(error)
        }
    
    }


    setUser(user){
        console.log(user)
        this.currentUser = {...user}
      
        console.log(this.currentUser)
    }


    setAuth(value: boolean){
        this.auth = value;
    }
}

