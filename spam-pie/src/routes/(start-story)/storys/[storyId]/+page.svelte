<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	const storyId = $page.params.storyId;
    let count = 1;

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
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="1번스토리" src={story1} class="story"/>
    </button>
    <div class="textbox">
        치료제가 없는 불치병에 몸서리를 치는 주인공의 가족들.<br>병원비를 지불하는 주인공의 지갑은 점점<br>텅텅 비어가는데...
    </div>
{:else if count == 2}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="2번스토리" src={story2} class="story"/>
    </button>
{:else if count == 3}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="3번스토리" src={story3} class="story"/>
    </button>
{:else if count == 4}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="4번스토리" src={story4} class="story"/>
    </button>
{:else if count == 5}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="5번스토리" src={story5} class="story"/>
    </button>
{/if}

<style>
    .story{
        margin: 0;
        padding: 0;

        padding: 0;
        width: 100%;
        height: 100%;

        position: relative;
    }

    .button{
        margin: 0;
        padding: 0;

        width: 100vw;
        height: 100vh;

        display: flex;
        align-item: center;
        justify-content: center;

        position: relative;

    }
    .textbox{
        margin-left: 20vw;
        width: 60vw;
        height: 25vh;

        background-color: black;

        color: white;

        position: relative;
    }

</style>
