<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    
    let inseonId: number;

    const posX = tweened(0, { duration: 600, easing: cubicOut });
    const posY = tweened(0, { duration: 600, easing: cubicOut });

    $: inseonId = +$page.params.inseonId;

    const stories = [
        {
            img: "/src/public/illustration/미사용/심사배경.png",
            text: "Fuxx off, It's fuxxing raw! Get out!",
            simtext: "고든램지",
            pieimg:"/src/public/element/pie/goodpie/정어리 파이.png",
            tu:"/src/public/illustration/미사용/투명.png",
            he:"/src/public/illustration/pie-ending/고든램지.png",
            she:"/src/public/illustration/미사용/우울.png",
            sujo:"/src/public/illustration/pie-ending/수조.png"
        },
        {
            img: "/src/public/illustration/미사용/심사배경.png",
            text: "(풍덩)",
            simtext: "",
            pieimg:"/src/public/element/pie/goodpie/정어리 파이.png",
            tu:"/src/public/illustration/미사용/투명.png",
            he:"/src/public/illustration/pie-ending/고든램지.png",
            she:"/src/public/illustration/미사용/대우울.png",
            sujo:"/src/public/illustration/pie-ending/수조.png"
        },
        {
            img: "/src/public/illustration/pie-ending/야생 마크 화면 1.png",
            text: "스티브가 호박파이를 훔치고 야생으로 달아나 버렸다...",
            simtext: "",
            pieimg:"/src/public/element/pie/goodpie/호박 파이.png",
            steve:"/src/public/illustration/pie-ending/뛰는 스티브.png",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: "/src/public/illustration/미사용/검은사진.jpeg",
            text: "호박 파이 엔딩"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };

    function moveToPositions() {
        posX.set(500); 
        posY.set(-400);  

        setTimeout(() => {
            posX.set(550);  
            posY.set(-20);  
        }, 500);
    }

    $: if (inseonId === 2) {
        console.log('Starting moveToPositions for inseonId 2');
        moveToPositions();
    } else {
        posX.set(0);
        posY.set(0);
    }
    console.log(posX);
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (inseonId == 2)}
    <button on:click|stopPropagation={() => refresh(`/inseon-pie/${inseonId + 1}`)} class="button">
        <img alt={`${inseonId}번이미지`} src={stories[inseonId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${inseonId}번스토리`} src={stories[inseonId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${inseonId}파이`} src={stories[inseonId - 1].pieimg} class="pie" style="transform: translate({$posX}px, {$posY}px);"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[inseonId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[inseonId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
    <div class="sujobox">
        <img alt={`${inseonId}수조`} src={stories[inseonId - 1].sujo} class="sujo"/>
    </div>
    <div class="upbar">
        <img alt={`${inseonId}고든램지`} src={stories[inseonId - 1].he} class="he"/>
        <img alt={`${inseonId}쥔공`} src={stories[inseonId - 1].she} class="she"/>
    </div>
{:else if inseonId == 3}
    <button on:click|stopPropagation={() => refresh(`/inseon-pie/${inseonId + 1}`)} class="button">
        <img alt={`${inseonId}번이미지`} src={stories[inseonId - 1].tu} class="tu"/>
    </button>
    <div class="stevebox2">
        <img alt={`${inseonId}스티브`} src={stories[inseonId - 1].steve} class="steve2"/>
    </div>
    <div>
        <img alt={`${inseonId}번스토리`} src={stories[inseonId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[inseonId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[inseonId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
{:else if inseonId == 4}
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">돌아가기</div>
    </button>
    <div>
        <img alt={`${inseonId}번스토리`} src={stories[inseonId - 1].img} class="story"/>
    </div>
    <div class="textbox2">
        <div class="text2">
            {stories[inseonId - 1].text}
        </div>  
    </div>
{:else if stories[inseonId - 1]}
    <button on:click|stopPropagation={() => refresh(`/inseon-pie/${inseonId + 1}`)} class="button">
        <img alt={`${inseonId}번이미지`} src={stories[inseonId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${inseonId}번스토리`} src={stories[inseonId - 1].img} class="story"/>
    </div>
    <div class="piebox">
        <img alt={`${inseonId}파이`} src={stories[inseonId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[inseonId - 1].simtext}
        </p>
        <p class="textmal">
            {stories[inseonId - 1].text.replace(/\n/g, "<br>")}
        </p>
    </div>
    <div class="sujobox">
        <img alt={`${inseonId}수조`} src={stories[inseonId - 1].sujo} class="sujo"/>
    </div>
    <div class="upbar">
        <img alt={`${inseonId}고든램지`} src={stories[inseonId - 1].he} class="he"/>
        <img alt={`${inseonId}쥔공`} src={stories[inseonId - 1].she} class="she"/>
    </div>
{:else}
    존재하지 않는 페이지
{/if}

<style>

    .sujobox{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 1;
    }

    .sujo{
        width: 25%;
        height: 45vh;

        margin-top: 26vh;
        margin-left: 75vw;
    }

    .upbar {
        width: 100%;
        height: 100vh;
        gap: 2vw;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 2;
    }

    .he{
        width: 40%;
        height: 40vh;
        margin-top: 24vh;
    }

    .she{
        width: 20%;
        height: 40vh;
        margin-top: 24vh;
    }


    .stevebox2{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        z-index: 3;
    }


    .story {
        margin: 0;
        padding: 0;

        width: 100%;
        height: 100%;

        position: absolute;
        z-index: 1;
    }

    .button {
        margin: 0;
        padding: 0;

        width: 100vw;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0);
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 4;
    }

    .textbox2{
        
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 4;
    }

    .text2{
        color: white;
        font-size: 15vh;
        font-family: "Jua", sans-serif;
    }


    .textbox {
        margin-left: 20%;
        margin-top: 80vh;
        padding: 5vh;

        width: 60%;
        height: 9vh;

        background-color: black;

        display: flex;
        align-items: center;

        position: absolute;
        z-index: 3;
    }

    .textmal{
        width: 85%;
        height: 9vh;
        margin-right: 20%;

        color: white;
        text-align: center;
        font-size: x-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;
        
        display: flex;
        justify-content: center;
        align-items: center;

        
    }
    .simtext{
        width: 40%;
        height: 9vh;
        margin-bottom: 7%;

        color: white;
        text-align: center;
        font-size: x-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        display: flex;
    }


    .piebox{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        

        position: absolute;
        z-index: 2;
    }

    .pie{
        width: 26%;
        height: 50vh;
        margin-top: 46vh;
    }


    .tu{
        width: 100%;
        height: 90vh;
    }

    .botten {
        display: flex;
        position: absolute;
        background-color: #FFD400;

        font-size: 6vb;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.8;

        text-align: center;

        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        width: 13vw;
        height: 11vh;
        z-index: 5;

        margin-top: 10vh;
        margin-left: 10vw;

        align-items: center;
        justify-content: center;
    }
    .botten:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .bot {
        position: absolute;

        top: 70vh;
        margin-left: 72%;
    }


</style>