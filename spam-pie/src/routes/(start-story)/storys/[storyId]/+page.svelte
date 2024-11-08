<script>
	import { page } from '$app/stores' 
	const storyId = $page.params.storyId;

    function handleClick(e) {
        console.log(e);
    }
</script>

<div>
    <h1>{storyId}</h1>
    <a href="\storys\{storyId}" role="button" class="w-full h-full">
        <button on:click|stopPropagation={e => handleClick('button')}>
            Click me
        </button>
    </a>
</div>
