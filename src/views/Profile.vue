<template>
<div class="theme-layout">
	
	<section>
			<div class="feature-photo">
				<!-- <figure><img v-bind:src="'http://127.0.0.1:8000/' + userProfile.profileimg" alt=""></figure> -->
				
				<figure><img src="/src/assets/images/resources/timeline-1.jpg" alt=""></figure>

				<form  @submit.prevent="submitForm">
					<div class="add-btn">
					<span style="color: white; font-size: 27px; margin-right: 520px;"><b><u><a href="/">Home</a></u></b></span>
					
					<span v-if="userPostLength === 0" style="color: white; font-size: 27px;"><b>No Post</b></span>
					<span v-else-if="userPostLength === 1" style="color: white; font-size: 27px;"><b>{{ userPostLength }} Post</b></span>
					<span v-else style="color: white; font-size: 27px;"><b>{{ userPostLength }} Posts</b></span>
					
					<span v-if="userFollowers === 0 || userFollowers === 1"style="color: white; font-size: 27px;"><b>{{ userFollowers}} follower</b></span>
					<span v-else style="color: white; font-size: 27px;"><b> {{ userFollowers }} followers</b></span>

					<span style="color: white; font-size: 27px;"><b>{{userFollowing}} following</b></span>
					<a href="" title="" data-ripple=""><button type="submit" style="background-color: #ffc0cb; border: #ffc0cb;">Follow</button></a>
					<!--<a data-ripple=""><button type="submit" style="background-color: #ffc0cb; border: #ffc0cb;">{{buttonText}}</button></a>-->
					
					</div>
				</form>

				<!-- <form class="edit-phto">
					<i class="fa fa-camera-retro"></i>
					<label class="fileContainer">
						Upload Cover Photo
					<input type="file"/>
					</label>
				</form> -->
				<div class="container-fluid">
					<div class="row merged">
						<div class="col-lg-2 col-sm-3">
							<div class="user-avatar">
								<figure>
									<!--<img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" style="height: 250px; width: 100%;" alt="">-->
									<img v-bind:src="'http://127.0.0.1:8000/' + userProfile.profileimg" style="height: 250px; width: 100%;" alt="">

									<!--	<form class="edit-phto">
										<i class="fa fa-camera-retro"></i>
										<label class="fileContainer">
											<a href="#account-settings">Upload Profile Photo</a>
										</label>
									</form>-->
								</figure>
							</div>
						</div>
						<div class="col-lg-10 col-sm-9">
							<div class="timeline-info">
								<ul>
									<li class="admin-name">
									  <h5 style="color: black;white-space: nowrap; width: 110px; font-size: 27px;"><b>@{{ currentUser }}</b><!--<i class="fa fa-check-circle" style="color: #48dbfb;" aria-hidden="true"></i>--></h5>
									  <!--<span>Group Admin</span>-->
									</li>
							
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section><!-- top area -->
		<section>
			<div class="bio">
				{{ userProfile.bio }} Hello
				
			</div>
		</section>
		
	<section>
		<div class="gap gray-bg">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="row" id="page-contents">
							<div class="col-lg-3">
								<aside class="sidebar static">
									
									What is this
									
								</aside>
							</div><!-- sidebar -->
							









							<div class="col-lg-6">
								<div class="central-meta">
									<ul class="photos">
										<div v-for="post in posts" :key="post.id">
											<!---<div v-for="elem in post" :key="elem.id">-->
											<li>
												<a class="strip" :href="'http://127.0.0.1:8000/' + post.image" data-strip-group="mygroup" data-strip-group-options="loop: false">
													<img v-bind:src="'http://127.0.0.1:8000/' + post.image" style="height: 250px; width: 300px;" alt=""></a>
											</li>
											<!--</div>-->
										</div>
		
										
									</ul>
									<!--<div class="lodmore"><button class="btn-view btn-load-more"></button></div>-->
								</div><!-- photos -->
							</div><!-- centerl meta -->
							<div class="col-lg-3">
								<aside class="sidebar static">
									
								</aside>
							</div><!-- sidebar -->
						</div>	
					</div>
				</div>
			</div>
		</div>	
	</section>  
</div>  
</template>

<script>
import axios from 'axios'
import {useAuthStore} from '/src/stores/authStore.js'
import {mapState} from 'pinia'

export default {
    name: 'Profile', 
	data() {
        return {
			currentUser: '',
            userProfile:[],
			userPost:[],
			posts:[],
            followerCount:[],
			buttonText: '',
			userPostLength: 0,
			userFollowers: 0,
			userFollowing:0,
        }
    },
	setup(){
        const store = useAuthStore()
        return { store }
    }, 
    /*computed: {
        ...mapState(useAuthStore, ['getToken']),
    },*/
	mounted() {
		this.getProfile(),
		this.submitForm()
	},
	methods : {
		async getProfile() {
			const username = this.$route.params.user_name
			this.currentUser = username
			console.log("username from route: " + username)

			await axios
				.get(`http://127.0.0.1:8000/api/profile/${username}`)
				.then(response =>{
					console.log("what is profile: " + JSON.stringify(response))
					console.log("what is profile data: " + JSON.stringify(response.data))
					console.log("what is user profile: " + JSON.stringify(response.data.user_profile))
					console.log("what is user post: " + JSON.stringify(response.data.user_post))	
					console.log("what is follower count: " + JSON.stringify(response.data.follower_count))				
					
					this.userProfile = JSON.stringify(response.data.user_profile)
					this.userPost = response.data.user_post
					this.followerCount = response.data.follower_count
				
					console.log("what is userProfile: " + this.userProfile)
					console.log("what is userPost: " + this.userPost)	
					console.log("what is followerCount: " + JSON.stringify(this.followerCount))

					let tempFollowerCount = 0
					for(let elem of Object.keys(this.followerCount)) {
						//for(let key of elem){
							console.log("what is elem : " + JSON.stringify(elem) + ": " + JSON.stringify(this.followerCount[elem]))
							if(this.followerCount[elem]['user'] === username ) {
								tempFollowerCount++
							}
							
							//console.log("what are elem 2: " + this.followerCount[i]['follower'])
						//}
					}
					console.log("whats count: " + tempFollowerCount)
					this.userFollowers = tempFollowerCount
					let tempFollowingCount = 0
					for(let elem of Object.keys(this.followerCount)) {
						//for(let key of elem){
							console.log("what is elem : " + JSON.stringify(elem) + ": " + JSON.stringify(this.followerCount[elem]))
							if(this.followerCount[elem]['follower'] === username ) {
								tempFollowingCount++
							}
							
							//console.log("what are elem 2: " + this.followerCount[i]['follower'])
						//}
					}
					console.log("whats count: " + tempFollowingCount)
					this.userFollowing = tempFollowingCount

					console.log("what is followers Count: " + JSON.stringify(this.followerCount))
					let loggedInUser = this.store.getUser
					console.log("Whats logged in User: " + loggedInUser)
					
					/*let tempFollowerResult = []
					for(let elem of Object.keys(this.followerCount)) {
						//for(let key of elem){
							console.log("what is elem : " + JSON.stringify(elem) + ": " + JSON.stringify(this.followerCount[elem]))
							if(this.followerCount[elem]['user'] === loggedInUser && thisfollowerCount[elem]['follower'] === this.currentUser) {
								tempFollowerResult.push(this.followerCount[elem])
							}
							
					}
					console.log("whats temp Follower Result: " + tempFollowerResult)
					
					if (tempFollowerResult.length > 0) {
						this.buttonText = "Unfollow"
					} 
					else {
						this.buttonText = "Follow"
					}*/

					let tempPostCount = 0
					for(let elem of Object.keys(this.userPost)) {
						console.log(this.userPost[elem])
						if(this.userPost[elem].user === this.currentUser) {
							this.posts.push(this.userPost[elem])
							tempPostCount++
						}
						/*this.userPost[elem].forEach((value) => {
							console.log(this.userPost[elem] + ": " + elem)
						})*/
						
					}
					console.log("temp post count: " + tempPostCount)
					console.log("what is user posts: " + JSON.stringify(this.posts))
					this.userPostLength = tempPostCount
				})
				.catch(error => {
                    console.log("errors: " + error)
                    //console.error(error.response.data)
                })
		},
		async submitForm() {

			let username = this.currentUser
			console.log("whats profile user: " + username)
			let follower = this.store.getUser
            console.log("whats follower: " + follower)
			 
			const formData = {
				follower: follower,
				user: username
			}

			await axios
				.post('http://127.0.0.1:8000/api/follow', formData)
				.then(response => {
					console.log("whats resposne: " + JSON.stringify(response.data))
				})
				.catch(error => {
					console.log("errors: " + error)
				})
		}
	},
}
</script>
