<!-- <script>
    export let data;
    const post = data.postData;
    const user = data.userData
	function capitalizeFirstLetter(val) {
		return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}
</script>
-->
<script>
	import { onMount } from "svelte";
  
	let posts = [];
	let users = {};
  
	// Fetch data when the component mounts
	onMount(async () => {
	  try {
		// Step 1: Fetch posts
		const postsResponse = await fetch("https://dummyjson.com/posts?limit=10");
		const postsData = await postsResponse.json();
		posts = postsData.posts;
  
		// Step 2: Fetch user data for each unique userId
		const userIds = [...new Set(posts.map(post => post.userId))]; // Get unique userIds
		const userPromises = userIds.map(userId =>
		  fetch(`https://dummyjson.com/users/${userId}`).then(res => res.json())
		);
		const userDataArray = await Promise.all(userPromises);
  
		// Step 3: Map user data to userId for easy access
		users = userDataArray.reduce((acc, user) => {
		  acc[user.id] = user;
		  return acc;
		}, {});
	  } catch (error) {
		console.error("Error fetching data:", error);
	  }
	});
	function capitalizeFirstLetter(val) {
		return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}
</script>

<div
class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
>
	{#if posts.length > 0 && Object.keys(users).length > 0}
		{#each posts as post}
			<article class="flex max-w-xl flex-col items-start justify-between">
				<div class="flex items-center gap-x-4 text-xs">
					<time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
					<a
						href="#"
						class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
						>{capitalizeFirstLetter(post.tags[0])}</a
					>
				</div>
				<div class="group relative">
					<h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
						<a href={`posts/${post.id}`}>
							<span class="absolute inset-0"></span>
							{post.title}
						</a>
					</h3>
					<p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
						{post.body}
					</p>
				</div>
				{#if users[post.userId]}
					<div class="relative mt-8 flex items-center gap-x-4">
						<img src={users[post.userId].image} alt="" class="size-10 rounded-full bg-gray-50" />
						<div class="text-sm/6">
							<p class="font-semibold text-gray-900">
								<a href="#">
									<span class="absolute inset-0"></span>
									{users[post.userId].firstName}
									{users[post.userId].lastName}
								</a>
							</p>
							<p class="text-gray-600">{users[post.userId].company.title}</p>
						</div>
					</div>
				{/if}
			</article>
		{/each}
	{:else}
		<p>Loading posts...</p>
	{/if}
</div>