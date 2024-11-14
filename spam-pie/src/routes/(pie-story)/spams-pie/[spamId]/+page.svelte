<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    
    let spamId: number;

    $: spamId = +$page.params.spamId;

    const stories = [
        {
            img: "/src/public/illustration/미사용/심사배경.png",
            simtext: "심사위원1",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: "/src/public/illustration/미사용/심사배경.png",
            text: "아니?, 저 파이가 보라색이라는데에 내 말목을 걸겠어.",
            simtext: "심사위원3",
            pieimg:"/src/public/element/pie/goodpie/스팸 파이.png",
            sim: "/src/public/illustration/미사용/2.png",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: "/src/public/illustration/미사용/심사배경2.png",
            text: "안타깝지만, 둘다 틀렸어요.",
            simtext: "심사위원2",
            pieimg:"/src/public/element/pie/goodpie/스팸 파이.png",
            sim: "/src/public/illustration/미사용/2.png",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: "/src/public/illustration/미사용/심사배경.png",
            text: "이 파이는 #353B5C색 이에요!!!!!!",
            simtext: "심사위원2",
            pieimg:"/src/public/element/pie/goodpie/스팸 파이.png",
            sim: "/src/public/illustration/미사용/2.png",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: "/src/public/illustration/미사용/심사배경.png",
            text: "...",
            simtext: "",
            pieimg:"/src/public/element/pie/goodpie/스팸 파이.png",
            sim: "/src/public/illustration/미사용/2.png",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: "/src/public/illustration/미사용/심사배경.png",
            text: "..................",
            simtext: "",
            pieimg:"/src/public/element/pie/goodpie/스팸 파이.png",
            sim: "/src/public/illustration/미사용/2.png",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: "/src/public/illustration/미사용/심사배경.png",
            text: "싸해진 분위기 속에 고기파이가 식어버렸다...",
            simtext: "",
            pieimg:"/src/public/element/pie/goodpie/스팸 파이.png",
            sim: "/src/public/illustration/미사용/2.png",
            tu:"/src/public/illustration/미사용/투명.png"
        },
        {
            img: "/src/public/illustration/미사용/검은사진.jpeg",
            text: "고기 파이 엔딩"
        }
    ];

    const refresh = (url: string) => {
        goto(url);
    };
</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">



{#if (spamId == 2)}
    <button on:click|stopPropagation={() => refresh(`/spams-pie/${spamId + 1}`)} class="button">
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </button>
    <div class="piebox">
        <img alt={`${spamId}파이`} src={stories[spamId - 1].pieimg} class="pie"/>
        <img alt={`${spamId}파이`} src={stories[spamId - 1].pieimg} class="pie"/>
        <img alt={`${spamId}파이`} src={stories[spamId - 1].pieimg} class="pie"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[spamId - 1].simtext}
        </p>
    </div>
{:else if spamId == 8}
    <button on:click={() => refresh(`/main_menu`)} class="bot">
        <div class="botten">돌아가기</div>
    </button>
    <div>
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </div>
    <div class="textbox2">
        <div class="text2">
            {stories[spamId - 1].text}
        </div>  
    </div>
{:else if stories[spamId - 1]}
    <button on:click|stopPropagation={() => refresh(`/spams-pie/${spamId + 1}`)} class="button">
        <img alt={`${spamId}번이미지`} src={stories[spamId - 1].tu} class="tu"/>
    </button>
    <div>
        <img alt={`${spamId}번스토리`} src={stories[spamId - 1].img} class="story"/>
    </div>
    <div class="textbox">
        <p class="simtext">
            {stories[spamId - 1].simtext}
        </p>
        <div class="chose">
            <button class="cbutton">yes</button>
            <button class="cbutton">no</button>
        </div>
    </div>
{:else}
    존재하지 않는 페이지
{/if}

<style>

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
        z-index: 3;
    }


    .textbox {
        margin-left: 20%;
        margin-top: 10vh;
        padding: 5vh;

        width: 60%;
        height: 70vh;

        background-color: black;

        position: absolute;
        z-index: 3;
    }

    .simtext{
        width: 100%;
        height: 9vh;

        color: white;
        text-align: center;
        font-size: x-large;
        overflow: hidden;
        font-family: "Jua", sans-serif;

        display: flex;
        justify-content: center;
    }

    .chose{
        width: 100%;
        height: 10vh;

        display: flex;
        justify-content: center;
    }



    .piebox{
        width: 100%;
        height: 38vh;
        margin-top: 62vh;

        display: flex;
        justify-content: center;
        

        position: absolute;
        z-index: 3;
    }

    .pie{
        width: 16%;
        height: 25vh;
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