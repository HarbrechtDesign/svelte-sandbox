<script>
    export let data;
    const post = data.postData;
    const user = data.userData
</script>
<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
                <address class="flex items-center mb-6 not-italic">
                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 ">
                        <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos">
                        <div>
                            <a href="#" rel="author" class="text-xl font-bold text-gray-900 ">{user.firstName} {user.lastName}</a>
                            <p class="text-base text-gray-500 dark:text-gray-500">{user.company.title}</p>
                            <p class="text-base text-gray-500 dark:text-gray-500"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                        </div>
                    </div>
                </address>
                <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{post.title}</h1>
            </header>
            {post.body}
        </article>
    </div>
</main>