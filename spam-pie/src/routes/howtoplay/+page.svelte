<script>
// @ts-nocheck
    import { goto } from "$app/navigation";
    const imageUrl1 = "/src/public/element/otherthing/otherelement/background.png";
    const imageUrl3 = "/src/public/element/otherthing/otherelement/게임방법간판.png";
    const imageUrl4 = "/src/public/element/otherthing/otherelement/게임방법 설명.png";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div style="position: relative; width: 100%; height: 100%; overflow:hidden">  
    <img src={imageUrl1} alt="배경 이미지" class="back" />

    <div style="position: absolute; top: 20px; left: 10px; transform: translate(-50%, -50%)">  
        <img src={imageUrl3} alt="현수막" class="fly" />

        <bo tten class="bot" onclick={() => goto('/main_menu')}>
            <div class="botten">돌아가기</div>
        </bo>
    </div>
    <div class="white">
        <img src={imageUrl4} alt="설명" class="caption"/>
    </div>
</div>

<slot />

<style>
    .fly {
        position: absolute;
        margin: 0;
        top: 10px;
        left: 10px;
        width: 27vh;
        height: 50vh;
        padding: 0;
        z-index: 1;
    }

    .white {
        position: absolute;
        background-color: white;
        margin: 0;
        top: 15vh;
        left: 37vh;
        width: 130vh;
        height: 70vh;
        padding: 0;
        z-index: 1;
        opacity: 0.7;
        border-radius: 50px;
    }

    .caption {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);   
        width: 78%;
        height: 50vh;
        padding: 0;
        justify-content: center;
        align-items: center;
    }

    .back {
        overflow: hidden;
        position: relative;
        margin: 0;
        width: 100%;
        height: 99.6%;
        background-color: #B475D0;
        padding: 0;
        z-index: -1;
        display: grid;
    }

    .botten {
        display: flex;
        position: absolute;
        background-color: #FFD400;

        font-size: 48px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.8;

        text-align: center;

        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        width: 180px;
        height: 11vh;
        z-index: 1;
        margin-top: 230px;
        margin-left: -50px;

        align-items: center;
        justify-content: center;
    }
    .botten:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .bot {
        position: absolute;
        top: 60vh;
        left: 164vh;
    }
</style>
