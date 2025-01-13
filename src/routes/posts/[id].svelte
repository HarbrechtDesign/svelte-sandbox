<script context="module">
	export async function load({ fetch, page }) {
	// const getPost = async () => {
		const id = page.params.id;
		const res = await fetch(`https://dummyjson.com/posts/${id}`);
		const data = await res.json();
		if (res.ok) {
			return props: {data};
		}
		return {
			status: res.status,
			error: new Error('Failed to fetch posts')
		};
	};
</script>

{#await getPost()}
	<p>Loading...</p>
{:then data}
	article here!
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
