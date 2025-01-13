<script context="module">
	// export async function load({ fetch }) {
	const getPosts = async () => {
		const res = await fetch('https://dummyjson.com/posts?limit=12');
		const data = await res.json();
		const posts = data.posts;
		if (res.ok) {
			return posts;
		}
		return {
			status: res.status,
			error: new Error('Failed to fetch posts')
		};
	};
	const getUser = async (id) => {
		const res = await fetch(`https://dummyjson.com/users/${id}`);
		const users = await res.json();
		if (res.ok) {
			return users;
		}
		return {
			status: res.status,
			error: new Error('Failed to fetch users')
		};
	};
</script>

<script>
	function capitalizeFirstLetter(val) {
		return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}
</script>

{#await getPosts()}
	<p>Loading...</p>
{:then posts}
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
			{#await getUser(post.userId) then user}
				<div class="relative mt-8 flex items-center gap-x-4">
					<img src={user.image} alt="" class="size-10 rounded-full bg-gray-50" />
					<div class="text-sm/6">
						<p class="font-semibold text-gray-900">
							<a href="#">
								<span class="absolute inset-0"></span>
								{user.firstName}
								{user.lastName}
							</a>
						</p>
						<p class="text-gray-600">{user.company.title}</p>
					</div>
				</div>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</article>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
