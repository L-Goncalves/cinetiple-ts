import { makeObservable, observable, action, computed } from "mobx"
import axios from "axios"



const api = axios.create({
    baseURL: "localhost:8000",  

  });



 export class AuthStoreImpl  {
    

    currentUser: any = {}
    auth: boolean = false
    error: any = {}
    viewingUser: any = {}
    loading: boolean = false

    constructor() {
       
        makeObservable(this, {
            currentUser: observable,
            viewingUser: observable,
            login: action,
            findUser: action,
            auth: observable,
            error: observable,
            loading: observable,
            setUser: action,
            setAuth: action,
            authStatus: computed,
        
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
                throw new Error (result.data.error)
            }
           this.setUser(result.data)
           this.setAuth(true)
           this.error = {}
            return result
        } catch (error) {
            this.setAuth(false)
            this.error = error
            console.log(error)
        }
    
    }

    async findUser(id){
        try {   
           try {
            const result = await api.get(`/users/${id}`)
            await this.setViewingUser(result.data)
            return result.data
           } catch (error) {
               
           }
           this.loading = false
       
            
        } catch (error) {
            console.log(error)
        }
    }


    async setUser(user){
        
        console.log(user)
        this.currentUser = {...user}
        this.setAuth(false)
      
        console.log(this.currentUser.usuario);
    }

    setViewingUser(value){
        
        
        this.viewingUser = {...value}
        console.log(this.viewingUser)

    }


    setAuth(value: boolean){
        this.auth = value;
    }


    get authStatus(){
        return this.auth
    }
}

