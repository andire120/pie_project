<script>
	import { page } from '$app/stores' 
	const storyId = $page.params.storyId;
    let count = 0;

    function handleClick(e) {
        count++;
        console.log(count);
        console.log(e);
    }
</script>

<div>
    <h1>{storyId}</h1>
    <button on:click|stopPropagation={e => handleClick('button')}>
        Click me
    </button>
</div>

