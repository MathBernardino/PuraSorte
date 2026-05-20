
let vt_cavalo1 = [];
let vt_cavalo2 = [];
let vt_cavalo3 = [];
let vt_cavalo4 = [];
let vt_cavalo5 = [];



function apostar() {
        let valorapostado = Number(ipt_valor.value);
        let rodadas = 0;      
        if (ipt_valor.value = '') {
            div_msg.innerHTML = ''
            
        } else {

        }

    }

function jogar() {
    let cavalo1 = Number(0);
    let cavalo2 = Number(0);
    let cavalo3 = Number(0);
    let cavalo4 = Number(0);
    let cavalo5 = Number(0);

    let acm1 = Number(0);
    let acm2 = Number(0);
    let acm3 = Number(0);
    let acm4 = Number(0);
    let acm5 = Number(0);



    for (i = 0; i < 7; i++) {
        cavalo1 = (Math.random() * 2 + 7).toFixed(1);
        cavalo2 = (Math.random() * 2 + 7).toFixed(1);
        cavalo3 = (Math.random() * 2 + 7).toFixed(1);
        cavalo4 = (Math.random() * 2 + 7).toFixed(1);
        cavalo5 = (Math.random() * 2 + 7).toFixed(1);

        vt_cavalo1.push(cavalo1);
        vt_cavalo2.push(cavalo2);
        vt_cavalo3.push(cavalo3);
        vt_cavalo4.push(cavalo4);
        vt_cavalo5.push(cavalo5);

        console.log(`Cavalo 1: ${cavalo1} Cavalo 2: ${cavalo2} Cavalo 3: ${cavalo3} Cavalo 4: ${cavalo4} Cavalo 4: ${cavalo4} Cavalo 5: ${cavalo5}`)

        acm1 += cavalo1;
        acm2 += cavalo2;
        acm3 += cavalo3;
        acm4 += cavalo4;
        acm5 += cavalo5;
        
        div_msg.innerHTML += `<b> Volta: ${i + 1} </b> <br><br>
        Cavalo01 – ${cavalo1} – ${acm1} <br>
        Cavalo02 – ${cavalo2} – ${acm2} <br>
        Cavalo03 – ${cavalo3} – ${acm3} <br>
        Cavalo04 – ${cavalo4} – ${acm4} <br>
        Cavalo05 – ${cavalo5} – ${acm5} <br><br>
        `


    }


    


}

function selecionar() {
    

    
}