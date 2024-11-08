<script>
	import { page } from '$app/stores' 
	const storyId = $page.params.storyId;

    function handleClick(e) {
        console.log(e);
    }
</script>

<div>
    <h1>{storyId}</h1>
    <a href="\storys\{storyId}" role="button">
        <button on:click|stopPropagation={e => handleClick('button')}>
            Click me
        </button>
        <div role="button" tabindex="0" 
            on:click={handleClick} 
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
            >
        </div>
    </a>
</div>
