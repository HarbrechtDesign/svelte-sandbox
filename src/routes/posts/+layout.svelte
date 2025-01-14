<script lang="ts">
	let { children } = $props();
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
				From the blog
			</h2>
			<p class="mt-2 text-lg/8 text-gray-600">
				Learn how to grow your business with our expert advice.
			</p>
		</div>
		{@render children()}
	</div>
</div>
