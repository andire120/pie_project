<script>
    const background = "/src/public/element/otherthing/otherelement/background.png";
    const next = "/src/public/element/otherthing/otherelement/nextbotten.png";
    const chep = "/src/public/element/otherthing/otherelement/파이굽기 간판.png";
    const time1= "/src/public/element/otherthing/otherelement/1분.png";
    const time130="/src/public/element/otherthing/otherelement/1분30초.png";
    const time8="/src/public/element/otherthing/otherelement/8분.png";
    const time30="/src/public/element/otherthing/otherelement/30초.png";
    const oven="/src/public/element/otherthing/otherelement/오븐.png";
    const danger="/src/public/element/otherthing/otherelement/오븐시간 선택x.png";

    let showDanger = false; // danger 이미지 표시 여부
    let buttonClicked = false; // 버튼 클릭 여부

    // next 이미지 클릭 이벤트
    function handleNextClick() {
        if (!buttonClicked) {
            showDanger = true;
        }
    }

    // 버튼 클릭 이벤트
    function handleButtonClick() {
        buttonClicked = true;
        showDanger = false; // 버튼이 클릭되면 danger 이미지 숨김
    }

    // danger 이미지 닫기
    function closeDanger() {
        showDanger = false;
    }
    
</script>


<div class="container">
    <div class="back">
        <img src={background} alt="배경">
    </div>
    
    <div class="n">
        <img src={next} alt="다음">
    </div>
    
    <div class="c">
        <img src={chep} alt="단계">
    </div>
    <div class="foot">
        <button class="th">0:30</button>
        <button class="on" >1:00</button>
        <button class="on_th">1:30</button>
        <button class="eig" >8:00</button>
    </div>        
    <div class="o">
        <img src={oven} alt="오븐">
    </div>

    {#if showDanger}
        <button class="overlay" on:click={closeDanger} aria-label="Close overlay"></button>


        <div class="modal">
            <img src={danger} alt="오븐 시간 선택 안 함">
        </div>
    {/if}
</div>





<style>
    

    .modal {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1001;
    }

    .modal img {
        max-width: 90vw;
        max-height: 80vh;
    }

    .foot button {
        cursor: pointer;
        z-index: 1002;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .th{
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
        z-index: 3;
        
        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0))
        
    }

    .on{
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
        z-index: 3;
        
        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0))
        
    }

    .on_th{
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
        z-index: 3;
        
        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0))
        
    }

    .eig{
        width: 25vh;
        height: 10vh;
        background-color: #FFD400;
        margin: 0;
        padding: 0;

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
        z-index: 3;
        
        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0))
        
    }
    .container {
        position: relative;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        background-color: #B071CD;
        z-index: -1;
        overflow: hidden;
    }

    .back {
        width:90%;
        height:  80%;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 5%;
    }

    .back img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    

    .c {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    
    .foot {
        width: 100vw;
        height: 20vh;
        background-color: #9744BF;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 10%;
        gap:10%;
    }

    .o{
        width: 100%;
        height: 100%;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2%;
    }

    .n{
        z-index: 1002;
        display: flex;
        position: absolute;
        bottom: 35%;
        right: 5%;
    }

</style>
