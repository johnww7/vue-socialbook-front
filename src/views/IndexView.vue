<template>
<div id="main">
    <header>
                <div class="header_inner">
                    <div class="left-side">
                        <!-- Logo -->
                        <div id="logo" class=" uk-hidden@s">
                            <a href="/">
                                <b><h1 style="text-transform: uppercase;">Social Book</h1></b>
                            </a>
                        </div>

                        <!--<div class="triger" uk-toggle="target: #wrapper ; cls: sidebar-active">
                            <i class="uil-bars"></i>
                        </div>-->

                        
                        <input type="text" placeholder="Search for username..">&nbsp; &nbsp;
                        <button type="submit"><i class="fa fa-search fa-1x"></i></button>
                    

                    </div>
                    <div class="right-side lg:pr-4">
                         <!-- upload -->
                        <a href="#"
                            class="bg-pink-500 flex font-bold hidden hover:bg-pink-600 hover:text-white inline-block items-center lg:block max-h-10 mr-4 px-4 py-2 rounded shado text-white">
                            <ion-icon name="add-circle" class="-mb-1
                             mr-1 opacity-90 text-xl uilus-circle"></ion-icon> Upload Pics / Videos
                        </a>
                         <!-- upload dropdown box -->
                        <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small" class="header_dropdown">
    
                            <!-- notivication header -->
                            <div class="px-4 py-3 -mx-5 -mt-4 mb-5 border-b">
                                <h4>Upload Pics</h4>
                            </div>
    
                            <!-- notification contents -->
                            <div class="flex justify-center flex-center text-center">
    
                                <div class="flex flex-col choose-upload text-center">
                                   
                                    <div class="bg-gray-100 border-2 border-dashed flex flex-col h-24 items-center justify-center relative w-full rounded-lg  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12">
                                            <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                                            <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                                        </svg>
                                    </div>
                                    <!-- form -->
                                    <form v-on:submit.prevent="submitUpload">
                                    <p class="my-3 leading-6"> Upload pics
                                    </p>
                                    <div>
                                        <input v-on:change="getUploadImage" type="file" id="image_upload">
                                        <!-- <a href="#" class="button soft-warning small"> Choose file</a> -->
                                        <textarea class="button soft-warning small" v-model="caption" name="caption" placeholder="caption..." ></textarea>
                                        <br>
                                        <button class="button bg-blue-700" type="submit" >Upload</button>
                                    </div>
                                    </form>
                                    <!-- end form -->
                                    
                                </div>

                                
                                <div class="uk-flex uk-flex-column choose-upload" hidden>
                                    <div class="mx-auto flex flex-col h-24 items-center justify-center relative w-full rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-12">
                                            <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p class="my-3 leading-6"> Import videos from YouTube <br> Copy / Paste your video link here </p>
                                    
                                    <form class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <input type="text" class="uk-input uk-form-small  bg-gray-200 " style="box-shadow:none" placeholder="Paste link">
                                        </div>
                                        <div class="uk-width-auto"> <button type="submit" class="button soft-warning -ml-2">
                                                Import </button> </div>
                                    </form>
                                    <a href="#" class="uk-text-muted mt-3 uk-link"
                                        uk-toggle="target: .choose-upload ; animation: uk-animation-slide-left-small, uk-animation-slide-right-medium; queued: true">
                                        Or Upload Video </a>
                                </div>
    
                            </div>
                            <div class="px-4 py-3 -mx-5 -mb-4 mt-5 border-t text-sm">
                                Your Video size Must be Maxmium 999MB
                            </div>
                        </div>
                        
                         <!-- Notification -->

                        <!--<a href="#" class="header-links-item">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M12 22a2.02 2.02 0 0 1-2.01-2h4a2.02 2.02 0 0 1-.15.78a2.042 2.042 0 0 1-1.44 1.18h-.047A1.922 1.922 0 0 1 12 22zm8-3H4v-2l2-1v-5.5a8.065 8.065 0 0 1 .924-4.06A4.654 4.654 0 0 1 10 4.18V2h4v2.18c2.579.614 4 2.858 4 6.32V16l2 1v2z" fill="currentColor"/></g></svg>
                        </a>
                        <div uk-drop="mode: click;offset: 4" class="header_dropdown">
                            <h4
                                class="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
                                Notification </h4>
                            <ul class="dropdown_scrollbar" data-simplebar>
                                <li>
                                    <a href="#">
                                        <div class="drop_avatar"> <img src="{% static 'assets/images/avatars/avatar-1.jpg' %}" alt="">
                                        </div>
                                        <div class="drop_content">
                                            <p> <strong class="text-link" >Taiye</strong>  
                                                <span class="text-link"> is following you  </span>
                                            </p>
                                            <span class="time-ago"> 2 hours ago </span>
                                        </div>
                                    </a>
                                </li>
                                

                            </ul>
                            <a href="#" class="see-all">See all</a>
                        </div> -->

                        <!-- Messages -->

                       <!-- <a href="#" class="header-links-item">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="0.5em" height="0.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/></g></svg>
                        </a>
                        <div uk-drop="mode: click;offset: 4" class="header_dropdown">
                            <h4
                                class="-mt-5 -mx-5 bg-gradient-to-t from-gray-100 to-gray-50 border-b font-bold px-6 py-3">
                                Messages </h4>
                            <ul class="dropdown_scrollbar" data-simplebar>
                                <li>
                                    <a href="#">
                                        <div class="drop_avatar"> <img src="{% static 'assets/images/avatars/avatar-1.jpg' %}" alt="">
                                        </div>
                                        <div class="drop_content">
                                            <strong> Taiye </strong> <time> 6:43 PM</time>
                                            <p> hi tomi </p>
                                        </div>
                                    </a>
                                </li>
                                


                            </ul>
                            <a href="#" class="see-all">See all</a>
                        </div>-->

                        <!-- profile -->

                        <a href="#">
                            <img v-bind:src="'http://127.0.0.1:8000/' + profile.profileimg" class="header-avatar" >
                        </a>
                        <div uk-drop="mode: click;offset:9" class="header_dropdown profile_dropdown border-t">
                            <ul>
                                <router-link to="/settings"><li> Account setting </li></router-link>
                                
                                <li><button v-on:click="logout"> Log Out</button></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>

            <div class="container m-auto">

                <!--<h1 class="lg:text-2xl text-lg font-extrabold leading-none text-gray-900 tracking-tight mb-5"> Feed </h1>--->

                <div class="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">

                    <!-- left sidebar-->
                    <div class="space-y-5 flex-shrink-0 lg:w-7/12">

                        <!-- post 1
                        <div class="bg-white shadow rounded-md  -mx-2 lg:mx-0">
    
                            
                            <div class="flex justify-between items-center px-4 py-3">
                                <div class="flex flex-1 items-center space-x-4">
                                
                                    <span class="block capitalize font-semibold "> tomi_ml </span>
                                </div>
                              <div>
                                <a href="#"> <i class="icon-feather-more-horizontal text-2xl hover:bg-gray-200 rounded-full p-2 transition -mr-1 "></i> </a>
                                <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base border border-gray-100  " uk-drop="mode: hover;pos: top-right">
                              
                                    <ul class="space-y-1">
                                              <li> 
                                          <a href="#" class="flex items-center px-3 py-2 text-red-500 hover:bg-red-100 hover:text-red-500 rounded-md ">
                                           <i class="uil-trash-alt mr-1"></i>  Delete
                                          </a> 
                                      </li>
                                    </ul>
                                
                                </div>
                              </div>
                            </div>
    
                            <div uk-lightbox>
                                <a href="/src/assets/assets/images/post/img4.jpg">  
                                    <img src="/src/assets/assets/images/post/img4.jpg" alt="">
                                </a>
                            </div>
                            
    
                            <div class="py-3 px-4 space-y-3"> 
                               
                                <div class="flex space-x-4 lg:font-bold">
                                    <a href="#" class="flex items-center space-x-2">
                                        <div class="p-2 rounded-full text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="25" height="25" class="">
                                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                            </svg>
                                        </div>
                                        
                                    </a>
                                  
                                    <a href="#" class="flex items-center space-x-2 flex-1 justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2v-6z"/></g></svg>
                                        
                                    </a>
                                </div>
                             
                           
                            </div>
    
                        </div>-->
                        <!--<Post v-bind:userFeed="userFeed"/>-->
                        <Post v-for="userPost in userFeed" v-bind:key="userPost.id" v-bind:userFeed="userPost"/> 

                        
                        <!-- Load more-->
                        <!--<div class="flex justify-center mt-6" id="toggle" hidden>
                            <a href="#"
                                class="bg-white  font-semibold my-3 px-6 py-2 rounded-full shadow-md  ">
                                Load more ..</a>
                        </div>-->


                    </div>

                    <!-- right sidebar-->
                    <div class="lg:w-5/12">

                        <div class="bg-white  shadow-md rounded-md overflow-hidden">

                            <div class="bg-gray-50  border-b border-gray-100 flex items-baseline justify-between py-4 px-6 ">
                                <h2 class="font-semibold text-lg">Users You Can Follow</h2>
                                <!-- <a href="#"> Refresh</a>-->
                            </div>

                            <div class="divide-gray-300 divide-gray-50 divide-opacity-50 divide-y px-4 ">
                                
                            <Suggestions v-for="username in suggestionsUserList" v-bind:key="username.user" v-bind:suggestionsUserList="username"/> 
                                
                            <!--    <template v-for="user in suggestionsUserList">
                                    <div class="flex items-center justify-between py-3">
                                        <div class="flex flex-1 items-center space-x-4">
                                            <router-link :to="{name: 'profile', params: {user_name: user.user}}">
                                            <a href="#">
                                                <img v-bind:src="'http://127.0.0.1:8000/' + user.image" class="bg-gray-200 rounded-full w-10 h-10">
                                            </a>
                                            </router-link>
                                            <div class="flex flex-col">
                                                <span :key="user.user" class="block capitalize font-semibold"> {{user.user}} </span>
                                                <span class="block capitalize text-sm"> {{user.bio}} </span>
                                            </div>
                                        </div>
                                    
                                        <router-link :to="{name: 'profile', params: {user_name: user.user}}">
                                            <p class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 "> Follow </p>

                                        </router-link> 
                                    </div>
                                </template>-->
                            

                                          
                            </div>

                        </div>

                      

                    </div>

                </div>               
          

            </div>

        </div>

<!--    </div>

</div>-->

</template>

<script>
import axios from 'axios'
import {useAuthStore} from '/src/stores/authStore.js'

import Post from '../components/Post.vue'
import Suggestions from '../components/Suggestions.vue'

export default {
  components: { Post, Suggestions },
    name: 'IndexView',
    data() {
        return {
            user: this.store.getUser,
           // image: '',
            caption: '',
           profile: {},
           posts: [],
           follower_count: [],
           userFeed: [],
           suggestionsUserList: [],
        }
    },
    setup(){
        const store = useAuthStore()
        return { store }
    },
    mounted() {
       // this.submitUpload()
       this.getUserInformation()
       this.userSuggestion()
    },
    beforeCreate() {
        this.store.initializeStore()
        const token = this.store.token
        console.log("whats auth: " + this.store.isAuthenticated)
        console.log("whats token: " + token)
        if (token) {
            axios.defaults.headers.common['Authorization'] = "Token " + token
        }
        else {
            axios.defaults.headers.common['Authorization'] = ""
        }
    },
    methods: {
        
        getUploadImage(event) {
            //const myImageInput = ref(null)
            const file = event.target.files[0]
            //myImageInput.value = file[0]
            this.image = file
        },

        submitUpload() {
            this.errors = []
            
            if(this.image === "" || this.caption === "") {
                this.errors.push("These fields are required")
            }

            if(!this.errors.length) {
                const formData = {
                    user: 'John',
                    image: this.image,
                    caption: this.caption
                }

                axios
                    .post("http://127.0.0.1:8000/api/upload", formData)
                    .then(response => {
                        console.log("Whats response: " + JSON.stringify(response))
                        this.$router.push('/')
                    })
                    .catch(error => {
                        if(error.response) {
                           for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data)) 
                        }
                        else if(error.message){
                            this.errors.push('Something went wrong. Please try again')
                            
                            console.log(JSON.stringify(error))

                        }
                    })
            }
        },
        async getUserInformation(){
            //const user_name= this.user
            const user_name = this.store.getUser
            console.log("whats user: " + user_name)
            await axios 
                //.get(`http://127.0.0.1:8000/api/profile/${user_name}`)
                .get("http://127.0.0.1:8000/api/profile/")
                .then(response => {
                    console.log("whats profile data" + JSON.stringify(response.data))    
                    console.log(Object.entries(response.data))
                    const result = JSON.stringify(response.data)
                    console.log(Object.keys(result))
                    console.log("whats this: " + result)
                    let profileData = Object.keys(result)
                    for (let key in response.data) {
                        console.log(key + ": "+ response.data[key])
                        if(key == "user_profile") {
                            console.log(response.data[key])
                            //this.profile = response.data[key]
                            
                            for (const prop in response.data[key]) {
                                console.log(`${prop}:  ${response.data[key][prop]}`)
                                this.profile[prop] = response.data[key][prop]
                                console.log("profile: " + JSON.stringify(this.profile))
                            }
                        }
                        if(key == "follower_count") {
                            console.log(response.data[key])
                            this.follower_count = response.data[key]
                            /*response.data[key].forEach(elem => {
                                for(let value in elem) {
                                    console.log(value + " : " + `${elem[value]}`)
                                    this.follower_count.push({value: elem[value]})
                                    console.log("follower count: " + JSON.stringify(this.follower_count))
                                }
                                
                            })*/
                        }
                        if(key == "user_post") {
                            console.log("post: " + JSON.stringify(response.data[key]))
                            this.posts = response.data[key]
                            response.data[key].forEach(elem => {
                                for (let value in elem) {
                                    if(value === "user") {
                                        console.log(value + " : " + `${elem[value]}`)
                                    }
                                  //this.posts.push({value : elem[value]})
                                }
                            })
                           // console.log('posts: ' + JSON.stringify(this.posts))
                        }
                    }
                    console.log("user_profile: " + JSON.stringify(this.profile))
                    console.log("user posts: " + JSON.stringify(this.posts))
                    console.log("follower count: " + JSON.stringify(this.follower_count))
                    this.feedList()
                /*    Object.entries(result).forEach((entry) => {
                        const [key, value] = entry
                        console.log(`${key}: ${value}`)
                    })   */                
                })
                .catch(error => {
                    console.log("errors: " + error)
                })
        },
        async userSuggestion(){

          /*  let userFollowing = this.follower_count.filter(elem => {
               console.log(elem.follower)
               if(elem.follower ===  this.user){
                   console.log("whats this: " + JSON.stringify(elem))
                   return elem
               }
               
            })*/
            let users = {}
            let followers = {}
            let posts = {}
            let profiles = {}
            
            await axios
                .get("http://127.0.0.1:8000/api/user-suggestion")
                .then(response =>{
                    console.log("Whats response: " + JSON.stringify(response.data))
                    console.log("Whats response: " + response.data.followers)
                    const res = response.data
                    for (const property in res) {
                        console.log(`${property}: ${res[property]}`)
                        if(property === 'followers') {
                            followers = res[property]
                            console.log("followers: " + followers)
                        }
                        else if(property === 'posts') {
                            posts = res[property]
                            console.log("posts: " + posts)
                        }
                        else if(property === 'profiles') {
                            profiles = res[property]
                            console.log("profiles: " + profiles )
                        }
                        else {
                            users = res[property]
                            console.log("users: " + users)
                        }
                        //console.log("property: " + res[property].)
                       console.log(res[property])
                    }
                })
                .catch(error => {
                    console.log("errors: " + error)
                })
            //userFollowing variable
            let userFollowing = this.follower_count.filter(elem => {
               console.log(elem.follower)
               if(elem.follower ===  this.user){
                   console.log("whats this: " + JSON.stringify(elem))
                   return elem
               }   
            }) 

            let userFollowingAll = []
            
            console.log("whats userFollowing: " + userFollowing)
            userFollowing.forEach((elem) => {
                console.log("userFollowing elem: " + JSON.stringify(elem))
               let userList = users.filter((user) => {
                    console.log("userList user: " + JSON.stringify(user))
                    return elem.user === user.username
                })
                console.log("Whats userList: " + JSON.stringify(userList))
                userFollowingAll.push(userList[0])
            })

            console.log("userFollowingAll: " + JSON.stringify(userFollowingAll))
            //new_suggestions_list = [x for x in list(all_users) if (x not in list(user_following_all))]
            console.log('whats users: ' + JSON.stringify(users) + " whats its type: " + typeof(users))
            let newSuggestionList = []
            for(const elem  in users) {
                console.log("prop: " + elem + "what data: " + JSON.stringify(users[elem]))
                userFollowingAll.forEach((data) => {
                    console.log("whats data: " + JSON.stringify(data))
                    if(users[elem].username !==  data.username) {
                        newSuggestionList.push(users[elem])
                    }
                })
            }
            console.log("newSuggestionList: " + JSON.stringify(newSuggestionList))

            let finalSuggestionsList = []
            for(const elem in newSuggestionList) {
                console.log("prop: " + elem + " whats data: " + JSON.stringify(newSuggestionList[elem]))
                if(this.user !== newSuggestionList[elem].username){
                    finalSuggestionsList.push(newSuggestionList[elem])
                }

            }
            console.log("final suggestion list: " + JSON.stringify(finalSuggestionsList))
            let randomSuggestionList = finalSuggestionsList
                .map(value => ({value, sort:Math.random() }))
                .sort((a,b) => a.sort - b.sort)
                .map(({value}) => value)
            console.log('random list: ' + JSON.stringify(randomSuggestionList))

            let usernameProfile = []
            let usernameProfileList = []

            randomSuggestionList.forEach((elem) => {
                console.log("whats id: " + elem.id)
                usernameProfile.push(elem.id)
            })
            
            console.log("Returned profiles: " + JSON.stringify(profiles))
            usernameProfile.forEach((ids) => {
                console.log("whats ids: " + ids)
                profiles.forEach((elem) => {
                    console.log("each profile: " + JSON.stringify(elem))
                    if(ids == elem.id_user) {
                        usernameProfileList.push(elem)
                    }
                })
            })

            console.log("whats username profile list: " + JSON.stringify(usernameProfileList))
            this.suggestionsUserList = usernameProfileList.slice(0,4)
            //console.log("suggestion of Users list: " + JSON.stringify(this.suggestionsUserList))
        },
        feedList() {
            let userFollowingList = []
            let userFeed = []
            console.log("whats user: " + this.user) 
            let userFollowing = this.follower_count.filter(elem => {
               console.log(elem.follower)
               if(elem.follower ===  this.user){
                   console.log("whats this: " + JSON.stringify(elem))
                   return elem
               }
               
            }) 

            console.log("User following: " + JSON.stringify(userFollowing))

            userFollowing.forEach((elem) => {
                userFollowingList.push(elem.user)
                //console.log(elem.user)
            })
            console.log("user following list: " + userFollowingList)

            userFollowingList.forEach((username) => {
                console.log("user name: " + username)
                let feedLists = this.posts.filter((elem) => {
                    console.log("posts: " + JSON.stringify(elem.user))
                    if(elem.user === username) {
                        return elem
                    }
                })
                console.log("whats curret feed list: " + JSON.stringify(feedLists))
                userFeed.push(feedLists[0])
            })
            console.log("whats user following: " + userFollowingList)
            console.log("whats user Feed: " + JSON.stringify(userFeed))

            this.userFeed = userFeed
            console.log("whats my feed: " + JSON.stringify(this.userFeed))
        },
        logout() {
            axios.defaults.headers.common['Authorization'] = ""
            localStorage.removeItem("token")
            this.store.removeToken()

            axios
                .post("http://127.0.0.1:8000/api/logout/")
                .then(response => {
                    console.log("Whats response: ", response)
                    this.$router.push('/')
                })
                .catch(error => {
                            
                    if(error.response) {
                        for (const property in error.response.data){
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                        console.log(JSON.stringify(error.response.data))
                    }
                    else if(error.message){
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }       
                })

        },
    }
}
</script>