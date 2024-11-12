<script lang="ts">
  const background = "/src/public/element/otherthing/otherelement/background.png";
  const next = "/src/public/element/otherthing/otherelement/nextbotten.png";
  const chep = "/src/public/element/otherthing/otherelement/파이굽기 간판.png";
  const one = "/src/public/element/otherthing/otherelement/1분.png";
  const onethr = "/src/public/element/otherthing/otherelement/1분30초.png";
  const eig = "/src/public/element/otherthing/otherelement/8분.png";
  const thr = "/src/public/element/otherthing/otherelement/30초.png";
  const oven = "/src/public/element/otherthing/otherelement/오븐.png";
  const danger = "/src/public/element/otherthing/otherelement/오븐시간 선택x.png";

  let selectedtime = '';

  function select(timeId: string) {
    console.log("Selected time: ", timeId);
    selectedtime = timeId;
  }





let nextclick=false;
function click(){
   setTimeout(()=>{
    nextclick=false;
   },3000);
}













</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">


<div class="container">
  <div class="back">
    <img src={background} alt="배경" />
  </div>

  <div class="n">
    <img src={next} alt="다음" />
  </div>

  <div class="c">
    <img src={chep} alt="단계" />
  </div>

  <div class="foot">
    <button id="Thr" on:click={() => select('thr')} class:active={selectedtime === 'thr'} class="thr" type="button">0:30</button>
    <button id="One" on:click={() => select('one')} class:active={selectedtime === 'one'} class="one" type="button">1:00</button>
    <button id="OneThr" on:click={() => select('onethr')} class:active={selectedtime === 'onethr'} class="onethr" type="button">1:30</button>
    <button id="Eig" on:click={() => select('eig')} class:active={selectedtime === 'eig'} class="eig" type="button">8:00</button>
  </div>
<button class="Next">다음</button>
<div class="dan">
    <img src={danger} alt="경고">
</div>
  <div class="o">
    <img src={oven} alt="오븐" />
  </div>
</div>

<div class="selected"></div>



<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;} 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background-color: #B071CD;
    overflow: hidden; 
  }

  .back {
    width: 90%;
    height: 80%;
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

  .foot {
    width: 100vw;
    height: 20vh;
    background-color: #9744BF;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10%;
    gap: 10%;
  }

  .thr, .one, .onethr, .eig {
    width: 25vh;
    height: 10vh;
    background-color: #FFD400;
    margin: 0;
    padding: 0;
    font-size: 55px;
    font-family: "Jua", sans-serif;
    font-style: normal;
    line-height: 1.6;
    color: #FF7F00;
    text-align: center;
    border-radius: 10px;
    text-shadow: 1px 1px 1px #E89D3A;
    text-shadow: 5px 2px 3px #FDFECF;
    border: none;
    z-index: 3;

    background-image: linear-gradient(
      to top left,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0)
    );
  }

  .one:hover, .thr:hover, .onethr:hover, .eig:hover,
  .one:active, .thr:active, .onethr:active, .eig:active {
    background-color: #FDFECF;
    border: 4px solid yellow;
  }

  .selected {
    background-color: #FDFECF;
    border: 4px solid yellow;
  }

  .n {
    position: absolute;
    right: 7%;
    top: 65%;
    transform: translateY(-50%);
  }

  .o {
    position: absolute;
    left: 10.35%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 12.5%;
  }

  .c {
    position: absolute;
    left: 2.5%;
    top: 1%;
  }

  .Next{
    width: 2%;
    height: 4%;
    position: absolute;
    right: 8%;
    top: 64.5%;
    transform: translateY(-50%);
  }

  .dan{
    position: absolute;
    top:20%;
    left:32.5%;
    z-index: 10000;
    cursor: pointer;
  }
</style>
