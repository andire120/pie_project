<script>
// @ts-nocheck

    const imageUrl1 = "/src/public/element/otherthing/otherelement/background.png";
    const imageUrl2 = "/src/public/element/otherthing/otherelement/nextbotten.png";
    const imageUrl3 = "/src/public/element/otherthing/otherelement/fly.png";
    const imageUrl4 = "/src/public/element/otherthing/otherelement/default.png"
    const imageUrl5 = "/src/public/element/otherthing/otherelement/nodelete.png"
    const imageUrl6 = "/src/public/element/otherthing/otherelement/nodelete1.png"

    const bowlImages1 = {
        strong: "/src/public/element/otherthing/otherelement/strong.png",
        middle: "/src/public/element/otherthing/otherelement/middle.png",
        park: "/src/public/element/otherthing/otherelement/park.png",

    };
    const bowlImages2 ={
        butter: "/src/public/element/otherthing/otherelement/butter-nuki.png",
        margarine: "/src/public/element/otherthing/otherelement/margarine.png"        
    }

    let selectedpowder = null;
    let selectedbutter = null;

    let id = null;

    function updateBowlImage(imageSrc) {
        document.querySelector('.default').src = imageSrc;
    }

    function addBowlImage(imageSrcc) {
        document.querySelector('.on1').src = imageSrcc;
    }

    function selectpowder(powderId) {
        selectedpowder = powderId;

        updateBowlImage(bowlImages1[powderId]);
    }

    function selectbutter(butterId) {
        selectedbutter = butterId;

        addBowlImage(bowlImages2[butterId]);
    }  
    
    function go() {
        if(selectedbutter == null && selectedpowder == null) {
            document.querySelector('.on2').src = "/src/public/element/otherthing/otherelement/warning1.png";
            setTimeout(function(){
                document.querySelector('.on2').src = "/src/public/element/otherthing/otherelement/nodelete1.png";
            }, 1000);
        }
        else if(selectedbutter != null && selectedpowder == null) {
            document.querySelector('.on2').src = "/src/public/element/otherthing/otherelement/powderwarning.png";
            setTimeout(function(){
                document.querySelector('.on2').src = "/src/public/element/otherthing/otherelement/nodelete1.png";
            }, 1000);
        }
        else if(selectedbutter == null && selectedpowder != null) {
            document.querySelector('.on2').src = "/src/public/element/otherthing/otherelement/miiwarning.png";
            setTimeout(function(){
                document.querySelector('.on2').src = "/src/public/element/otherthing/otherelement/nodelete1.png";
            }, 1000);
        }
        else if(selectedbutter != null && selectedpowder != null) {
            if(selectedpowder === 'strong') {
                if(selectedbutter === 'butter') {
                    id = "strongbutter";
                }
                else {
                    id = "strongmargarine";
                }
            }
            if(selectedpowder === 'middle') {
                if(selectedbutter === 'butter') {
                    id = "middlebutter";
                }
                else {
                    id = "middlemargarine";
                }
            }
            if(selectedpowder === 'park') {
                if(selectedbutter === 'butter') {
                    id = "parkbutter";
                }
                else {
                    id = "margarine";
                }
            }
            window.location.href = (`/make_sheet2/${id}`);
        }
    }

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="page">  
    <img src={imageUrl1} alt="배경 이미지" class="back" />
    <img src={imageUrl3} alt="현수막" class="fly" />
    
    <botten class="bot" onclick={go()} >
        <img src={imageUrl2} alt="단추" class="botten" />
    </botten>

    <img src={imageUrl5} alt="점1" class="on1" />
    <img src={imageUrl6} alt="점2" class="on2" />
    <img src={imageUrl4} alt="그릇" class="default" />
    
    <div class="wall">
        <button id="Strong" onclick={() => selectpowder('strong')}   class:active={selectedpowder === 'strong'} class="Strong" type="button">강력분</button>
        <button id="middle"onclick={() => selectpowder('middle')} class:active={selectedpowder === 'middle'} class="middle" type="button">중력분</button>
        <button id="park" onclick={() => selectpowder('park')}   class:active={selectedpowder === 'park'} class="park" type="button">박력분</button>
        <button id="butter" onclick={() => selectbutter('butter')}   class:active={selectedbutter === 'butter'} class="butter" type="button">버터</button>
        <button id="margarine" onclick={() => selectbutter('margarine')}   class:active={selectedbutter === 'margarine'} class="margarine" type="button">마가린</button>
    </div>
</div>



<slot />

<style>
    .page{
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow:hidden;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fly {
        position: absolute;
        margin: 0;
        top: 10px;
        left: 10px;
        width: 25vh;
        height: 50vh;
        padding: 0;
        z-index: 1;
        
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

    }

    .wall {
        position: absolute;
        background-color: #9744BF;
        margin: 0;
        top: 73vh;
        left: 4vw;
        width: 203vh;
        height: 20vh;

        display: flex;
        align-items: center;
        justify-content: space-around;
        

        z-index: 1;
    }

    .botten {
        position: absolute;
        width: 10vh;
        height: 10vh;
        margin-left: 33vh;
        z-index: 1;
    }

    .bot {
        position: absolute;
        top: 60vh;
        left: 164vh;
    }

    .default {
        position: absolute;
        margin: 0;
        width: 100vh;
        height: 100vh;
        padding: 0;
        z-index: 2;
        top: -20vh;
        left: 65vh;
    }
    .on1 {
        position: absolute;
        margin: 0;
        width: 100vh;
        height: 100vh;
        padding: 0;
        z-index: 3;
        top: -20vh;
        left: 65vh;
    }

    .on2 {
        position: absolute;
        margin: 0;
        width: 80vh;
        height: 45vh;
        padding: 0;
        z-index: 3;
        top: 15vh;
        left: 65vh;
    }

    .Strong {

        width: 30vh;
        height: 15vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        );

    }
    .Strong:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .Strong.active {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }


    .middle {

        width: 30vh;
        height: 15vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        );

    }
    .middle:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .middle.active {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .park {
        width: 30vh;
        height: 15vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        );

    }
    .park:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .park.active {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }


    .butter {
        width: 30vh;
        height: 15vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        );


    }
    .butter:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .butter.active {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    
    .margarine {
        width: 30vh;
        height: 15vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;
        z-index: 1;

        font-size: 55px;
        font-family: "Jua", sans-serif;
        font-style: normal;
        line-height: 1.6;
        text-align: center;
        border-radius: 10px;
        text-shadow: 1px 1px 1px #E89D3A;
        color: #FF7F00;      
        text-shadow: 5px 2px 3px #FDFECF;
        border: none;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        );


    }
    .margarine:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    .margarine.active {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
</style>
    