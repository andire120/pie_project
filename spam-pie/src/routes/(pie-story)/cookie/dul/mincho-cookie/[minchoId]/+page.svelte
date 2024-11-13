<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	const storyId = $page.params.storyId;
    let count = 1;

    import story1 from "/src/public/illustration/미사용/심사배경.png";
    import pie from "/src/public/element/cookie/dul-cookie/mincho-cookie.png";



    

    function handleClick(e) {
        count++;
        if (count == 2) {
            goto("/cookie-end/dul");
        }
        console.log(count);
        console.log(e);
    }
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

{#if count == 1}
    <button on:click|stopPropagation={e => handleClick('button')} class="button">
        <img alt="1번스토리" src={story1} class="story"/>
    </button>
    <div class="textbox" style="font-size: xx-large;">
        이봐, 대회 규정 좀 읽어봐. 파이라니까, 쿠키가 아니라.<br>게다가,덜 익었잖아? 넌 탈락이야.
    </div>
    
   

{/if} 

<div class="pies">
<img src={pie} alt="mincho" class="pie1">
<img src={pie} alt="mincho" class="pie2">
<img src={pie} alt="mincho" class="pie3">
</div>


<style>
    .story{
        margin: 0;
        padding: 0;

        padding: 0;
        width: 100%;
        height: 100%;

        position: absolute;
        z-index: 1;
    }

    .button{
        margin: 0;
        padding: 0;

        width: 100vw;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 1;

    }
    .textbox{
        margin-left: 20%;
        margin-top: 79vh;
        padding: 5vh;

        width: 60%;
        height: 10vh;

        background-color: black;
        opacity: 0.7;

        display: flex;

        display: table-cell;
        vertical-align: middle;

        color: white;
        text-align: center;
        justify-content: center;
        font-size: x-large;
        

        position: absolute;
        z-index: 2;

        font-family: "Jua", sans-serif;
    }



    .pies{
     display: flex;
     justify-content: center;
     gap: 1px;
    }

    .pie1,.pie2,.pie3{
        margin : 0;
        width: 15%;
        z-index: 1;
        margin-top: 57vh;
    }
</style>
