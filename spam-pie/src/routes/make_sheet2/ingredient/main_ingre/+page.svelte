<script>
// @ts-nocheck
    import { page } from '$app/stores';
    import { onMount } from 'svelte';   
    const background1 = "/src/public/element/otherthing/otherelement/background.png";
    const next_button = "/src/public/element/otherthing/otherelement/nextbotten.png";
    const bowl = "/src/public/element/otherthing/otherelement/what.png";
    const ganpan ="/src/public/element/otherthing/otherelement/piesokmandulgi.png";
    const dot1 = "/src/public/element/otherthing/otherelement/nodelete1.png";
    const warn = "/src/public/element/otherthing/otherelement/waring_main.png";
    let ingredient = null;

    const ingred = {
        apple:"/src/public/element/otherthing/otherelement/bowlapple.png",
        berry:"/src/public/element/otherthing/otherelement/bowlberry.png",
        mint:"/src/public/element/otherthing/otherelement/bowlmincho.png",
        inseon:"/src/public/element/otherthing/otherelement/bowlinseon.png",
        pump:"/src/public/element/otherthing/otherelement/bowlpump.png",
        spam:"/src/public/element/otherthing/otherelement/bowlspam.png",
        meat:"/src/public/element/otherthing/otherelement/bowlmeat.png"
    };

    let selectedIngredient = null;
    let selectedIngredient2 = null;
    let id;
    let id_liquid;
    let id_main;
    function updateIngredientImage(ingredient) {
        selectedIngredient = ingredient;
        document.querySelector('.bowl').src = ingred[ingredient];
    }
//id를 받아옵시다. 순서: water, milk, juice, 
        onMount(() => {
    const queryParams = new URLSearchParams($page.url.search);
    id = queryParams.get('id');
    id_liquid = queryParams.get('id_liquid');
    });

    

    
function send() {
    if (selectedIngredient != null) {
        if (selectedIngredient === 'apple') {
            id_main = "apple";
        } else if (selectedIngredient === 'inseon') {
            id_main = "inseon";
        } else if (selectedIngredient === 'berry') {
            id_main = "blueberry";
        } else if (selectedIngredient === 'mint') {
            id_main = "mintchoco";
        } else if (selectedIngredient === 'meat') {
            id_main = "meat";
        } else if (selectedIngredient === 'pump') {
            id_main = 'pump';
        } else if (selectedIngredient === 'spam') {
            id_main = 'spam';
        }
    }
}

    function go()  {
        send();
        if(selectedIngredient == null){
            document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/waring_main.png";
            setTimeout(function(){
                document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/nodelete1.png";
            }, 1500);
        }
        else {
            window.location.href = (`/oven?id=${id}&id_liquid=${id_liquid}&main_ingredient=${id_main}`);
        }
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

    <img src={background1} alt="메인보드" class="paochai">
    
    <div class="sidebar"></div>
    <img class="pan" src={ganpan} alt="간판">
    <img class="bowl" src={bowl} alt="뚝배기">
    <img src={dot1} alt="노딜리트" class="dot">
    <button  onclick={go()} class= "bugton">
        <img src={next_button} alt="버튼" class="buten"/>
    </button>

    <div class="Button">
        <button
        class="spam {selectedIngredient === 'spam' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('spam')}>스팸</button>

    <button
        class="apple {selectedIngredient === 'apple' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('apple')}>사과</button>

    <button
        class="berry {selectedIngredient === 'berry' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('berry')}>베리</button>

    <button
        class="inseon {selectedIngredient === 'inseon' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('inseon')}>정어리</button>
</div>

<div class="Button2">
    <button
        class="mincho {selectedIngredient === 'mint' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('mint')}>민초</button>

    <button
        class="meat {selectedIngredient === 'meat' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('meat')}>고기</button>

    <button
        class="pump {selectedIngredient === 'pump' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('pump')}>호박</button>
</div>

<style>
    .dot{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 8;
    }

    .Button2{
    display: flex;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: space-around;
    gap: 2vh;
    z-index: 3; 
    }
    .Button {
        display: flex;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: space-around;
    gap: 2vh;
    z-index: 5; 
    }
    .bugton {
        position: absolute;
        top: 50%;
        left: 85%;
        z-index: 1;
    }

    .buten{
        position: absolute;
        z-index: 3;
        width: 10vh;
        height: 10vh;
        top: -500%;
        left: -300%;
        z-index: 2;
    }

    .paochai{
        overflow: hidden;
        position: relative;
        height: 99.6%;
        width: 100%;
        background-color: #B475D0;
        
    }/*배경 대각선 그거*/

    .bowl{
        overflow: hidden;
        position: absolute;
        width: 70vh;
        height: 70vh;
        top: -5vh;
        left: 55vh;
    }
    .pan{
        position: absolute;
        top: 25%;
        transform: translate(-50%, -50%);
        position: absolute;
        width: 15%;
        left: 9%;

    }

    .sidebar{
        position: absolute;
        width: 80%;
        height: 35%;
        top: 77%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #9744bf;
        z-index: 2;
    }

    .spam{
        grid-area: g;

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

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    .apple{
        grid-area: a;
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

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }    
    .mincho{
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

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }   
    .meat{
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

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }

    .berry{
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

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    .inseon{
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

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    .pump{
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

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }

/*버튼 반짝*/
.apple:hover, .inseon:hover, .berry:hover, .pump:hover, .meat:hover, .mincho:hover, .spam:hover,
.apple:active, .inseon:active, .berry:active, .pump:active, .meat:active, .mincho:active, .spam:active 
{
    background-color: #FDFECF;
    border: 4px solid yellow;
}
.selected {
    background-color: #FDFECF;
    border: 4px solid yellow;
}
</style>