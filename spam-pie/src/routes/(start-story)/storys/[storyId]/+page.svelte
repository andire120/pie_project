<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	const storyId = $page.params.storyId;
    let count = 0;

    import story1 from "/src/public/illustration/game-story/1.png";
    import story2 from "/src/public/illustration/game-story/2.png";
    import story3 from "/src/public/illustration/game-story/3.png";
    import story4 from "/src/public/illustration/game-story/4.png";
    import story5 from "/src/public/illustration/game-story/6.png";



    function handleClick(e) {
        count++;
        if (count == 6) {
            goto("/");
        } 
        else {
            goto(`/storys/${count}`);
        }
        console.log(count);
        console.log(e);
    }
</script>

{#if count == 1}
    <img alt="1번스토리" src={story1} />
{:else if count == 2}
    <img alt="2번스토리" src={story2} />
{:else if count == 3}
    <img alt="3번스토리" src={story3} />
{:else if count == 4}
    <img alt="4번스토리" src={story4} />
{:else if count == 5}
    <img alt="5번스토리" src={story5} />
{/if}

<div>
    <h1>{storyId}</h1>
    <button on:click|stopPropagation={e => handleClick('button')}>
        Click me
    </button>
</div>

