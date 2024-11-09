<script>
    const imageUrl1 = "/src/public/element/otherthing/otherelement/background.png";
    const imageUrl2 = "/src/public/element/otherthing/otherelement/nextbotten.png";
    const imageUrl3 = "/src/public/element/otherthing/otherelement/fly.png";

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div style="position: relative; width: 100%; height: 100%;">  
    <img src={imageUrl1} alt="배경 이미지" class="back" />

    <div style="position: absolute; top: 20px; left: 10px; transform: translate(-50%, -50%);">  
        <img src={imageUrl3} alt="현수막" class="fly" />

        <div class="wall"></div>
        
        <img src={imageUrl2} alt="단추" class="botten" />
        
        <button class="Strong" type="button">강력분</button>
        <button class="middle" type="button">중력분</button>
        <button class="park" type="button">박력분</button>
        <button class="butter" type="button">버터</button>
        <button class="margarine" type="button">마가린</button>


    </div>
</div>


<slot />

<style>
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
        left: 10px;
        width: 179vh;
        height: 18vh;
        padding: 0;
        z-index: 1;
    }

    .botten {
        position: absolute;
        margin: 0;
        width: 10vh;
        height: 10vh;
        padding: 0;
        z-index: 1;
        top: 60vh;
        left: 164vh;
    }

    .Strong {
        position: absolute;
        width: 25vh;
        height: 10vh;
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

        top: 77vh;
        left: 80px;
    }
    .Strong:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .middle {
        position: absolute;
        width: 25vh;
        height: 10vh;
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

        top: 77vh;
        left: 390px;
    }
    .middle:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .park {
        position: absolute;
        width: 25vh;
        height: 10vh;
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

        top: 77vh;
        left: 710px;
    }
    .park:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }

    .butter {
        position: absolute;
        width: 25vh;
        height: 10vh;
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

        top: 77vh;
        left: 1030px;
    }
    .butter:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
    
    .margarine {
        position: absolute;
        width: 25vh;
        height: 10vh;
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

        top: 77vh;
        left: 1360px;
    }
    .margarine:hover {
        background-color: #FDFECF;
        border: 4px solid yellow;
    }
</style>
    