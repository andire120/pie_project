<script>
// @ts-nocheck    
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    const background1 = "/src/public/element/otherthing/otherelement/background.png";
    const next_button = "/src/public/element/otherthing/otherelement/nextbotten.png";
    const bowl = "/src/public/element/otherthing/otherelement/nodelete.png";
    const ganpan ="/src/public/element/otherthing/otherelement/piesokmandulgi.png";
    const dot1 = "/src/public/element/otherthing/otherelement/nodelete1.png";
    const warn = "/src/public/element/otherthing/otherelement/liquid_warn.png";
    let ingredient = null;

    const ingred = {
        ion:"/src/public/element/otherthing/otherelement/ion2.png",
        bod:"/src/public/element/otherthing/otherelement/bod2.png",
        juice:"/src/public/element/otherthing/otherelement/juice2.png",
        water:"/src/public/element/otherthing/otherelement/water2.PNG",
        milk:"/src/public/element/otherthing/otherelement/milk2.PNG",
        yorg:"/src/public/element/otherthing/otherelement/yorg2.PNG"
    };

    let selectedIngredient = null;
    let id1 = null;

    let id;
    let showImage = false;
//id 받아오기
    onMount(() => {
    const queryParams = new URLSearchParams($page.url.search);
    id = queryParams.get('id');
    if (id === 'parkmargarine') {
        document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/bowl_powder3_maga.png";
        }
    else if (id === 'parkbutter') {
        document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/bowl_powder3_butter.png";
        }
    else if (id === 'strongbutter') {
        document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/bowl_powder1_butter.png";
        }
    else if (id === 'strongmargarine') {
        document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/bowl_powder1_maga.png";
        }
    else if (id === 'middlebutter') {
        document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/bowl_powder2_butter.png";
        }
    else if (id === 'middlemargarine') {
        document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/bowl_powder2_maga.png";
        }
    });




    function updateIngredientImage(ingredient) {
        
        selectedIngredient = ingredient;
        document.querySelector('.bowl').src = ingred[ingredient];
    }

    function go()  {
        if(selectedIngredient == null){
            document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/liquid_warn.png";
            setTimeout(function(){
                document.querySelector('.dot').src = "/src/public/element/otherthing/otherelement/nodelete1.png";
            }, 1500);
        }
        else {
            window.location.href = ("make_sheet2/ingredient/main_ingre");
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

<<<<<<< HEAD
    <div class="Button">
    <button
        class="ion {selectedIngredient === 'ion' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('ion')}>이온음료</button>

    <button
    class="bod {selectedIngredient === 'bod' ? 'selected' : ''}"
    onclick={() => updateIngredientImage('bod')}>보드카</button>

    <button
        class="juice {selectedIngredient === 'juice' ? 'selected' : ''}"
        onclick={() => updateIngredientImage('juice')}>주스</button>
=======

<div class="Button">
    <button class="ion {selectedIngredient === 'ion' ? 'selected' : ''}" onclick={() => updateIngredientImage('ion')}>이온음료</button>
    <button class="bod {selectedIngredient === 'bod' ? 'selected' : ''}" onclick={() => updateIngredientImage('bod')}>보드카</button>
    <button class="juice {selectedIngredient === 'juice' ? 'selected' : ''}" onclick={() => updateIngredientImage('juice')}>주스</button>
>>>>>>> 4be7c012c733142d7a2947dca87cd84ef71c5905
</div>

<div class="Button2">
    <button class="water {selectedIngredient === 'water' ? 'selected' : ''}" onclick={() => updateIngredientImage('water')}>물</button>
    <button class="milk {selectedIngredient === 'milk' ? 'selected' : ''}" onclick={() => updateIngredientImage('milk')}>우유</button>
    <button class="yorg {selectedIngredient === 'yorg' ? 'selected' : ''}" onclick={() => updateIngredientImage('yorg')}>요구르트</button>
</div>

<style>


    .dot{
        position: absolute;
        top: 30vh;
        left: 100vh;
        transform: translate(-50%, -50%);
        width: 50%;
<<<<<<< HEAD
        height: 85%;
        z-index: 5;
    }

=======
        height: 100%;
        z-index: -5;
    }
>>>>>>> 4be7c012c733142d7a2947dca87cd84ef71c5905
    .Button2{
    display: flex;
    position: absolute;
    top: 92%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: space-around;
    gap: 18vh;
    z-index: 3; 
    }
    .Button {
        display: flex;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: space-around;
    gap: 18vh;
    z-index: 3; 
    }
    .bugton {
        position: absolute;
        top: 50%;
        left: 85%;
        z-index: -5;
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
<<<<<<< HEAD
        z-index: -100;
=======
        z-index: -10;
        
>>>>>>> 4be7c012c733142d7a2947dca87cd84ef71c5905
    }/*배경 대각선 그거*/

    .bowl{
        opacity: 70%;
        overflow: hidden;
        position: absolute;
        width: 100vh;
<<<<<<< HEAD
        height: 90vh;
        top: -15vh;
        left: 52vh;
        z-index: 6;
=======
        height: 100vh;
        top: -20vh;
        left: 40vh;
        z-index: -5;
>>>>>>> 4be7c012c733142d7a2947dca87cd84ef71c5905
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
        height: 30%;
        top: 84%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #9744bf;
        z-index: 2;
    }

    .ion{
        width: 35vh;
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
        z-index: 5;
        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    .bod{
        position: relative;
        width: 35vh;
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
        z-index: 5;
        

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }    
    .juice{
        width: 35vh;
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
        z-index: 5;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }   
    .water{
        width: 35vh;
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
        z-index: 5;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }

    .milk{
        width: 35vh;
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
        z-index: 5;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }
    .yorg{
        width: 35vh;
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
        z-index: 5;

        background-image: linear-gradient(
        to top left,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2) 30%,
        rgba(0, 0, 0, 0)
        )
    }

/*버튼 반짝*/
.ion:hover, .bod:hover, .milk:hover, .water:hover, .juice:hover, .yorg:hover,
.ion:active, .bod:active, .milk:active, .water:active, .juice:active, .yorg:active 
{
    background-color: #FDFECF;
    border: 4px solid yellow;
}
.selected {
    background-color: #FDFECF;
    border: 4px solid yellow;
}
</style>