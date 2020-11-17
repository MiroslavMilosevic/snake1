

export function promeniKordinate(zmijaNiz,setZmijaNiz, pravac){
//   console.log(zmijaNiz);
    if (pravac === 'levo') {
        let tmp = [...zmijaNiz];
        tmp[0].left -= 20;
        let div1 = document.getElementById('div1');
        if(tmp[0].left<-10){tmp[0].left=div1.offsetWidth}
        for (let i = 1; i < zmijaNiz.length; i++) {
            tmp[i].bottom=tmp[i].roditeljBottom;
            tmp[i].left=tmp[i].roditeljLeft;
            tmp[i].roditeljBottom=tmp[i-1].bottom
            tmp[i].roditeljLeft=tmp[i-1].left
        }
     
       setZmijaNiz(tmp)
    }
    else if (pravac === 'desno') {
        let tmp = [...zmijaNiz];
        tmp[0].left += 20;
        let div1 = document.getElementById('div1');
        if(tmp[0].left>=div1.offsetWidth){tmp[0].left=0}
        for (let i = 1; i < zmijaNiz.length; i++) {
          tmp[i].bottom=tmp[i].roditeljBottom;
          tmp[i].left=tmp[i].roditeljLeft;
          tmp[i].roditeljBottom=tmp[i-1].bottom
          tmp[i].roditeljLeft=tmp[i-1].left
        }
 
        setZmijaNiz(tmp)
    }
    else if (pravac === 'gore') {
        let tmp = [...zmijaNiz];
        tmp[0].bottom += 20;
        let div1 = document.getElementById('div1');
      //  console.log(div1.offsetHeight,' -visina');
        if(tmp[0].bottom>=div1.offsetHeight-50||(tmp[0].bottom>=div1.offsetHeight-60&&div1.offsetHeight%20!==0)){tmp[0].bottom=50}
        for (let i = 1; i < zmijaNiz.length; i++) {
            tmp[i].bottom=tmp[i].roditeljBottom;
            tmp[i].left=tmp[i].roditeljLeft;
            tmp[i].roditeljBottom=tmp[i-1].bottom
            tmp[i].roditeljLeft=tmp[i-1].left
        }
     
     setZmijaNiz(tmp)
    }
    else if (pravac === 'dole') {
        let tmp = [...zmijaNiz];
        tmp[0].bottom -= 20;
        let div1 = document.getElementById('div1');
        if(tmp[0].bottom<50){tmp[0].bottom=div1.offsetHeight-65}
        for (let i = 1; i < zmijaNiz.length; i++) {
            tmp[i].bottom=tmp[i].roditeljBottom;
            tmp[i].left=tmp[i].roditeljLeft;
            tmp[i].roditeljBottom=tmp[i-1].bottom
            tmp[i].roditeljLeft=tmp[i-1].left
        }
      
      setZmijaNiz(tmp)
    }


}

export function resizeScreen(div1, menuWraper, innerHeight){
    // let div1 = document.getElementById('div1');
    // let menuWraper = document.getElementById('menuWraper');

    let visina = innerHeight;
    let brojac = 0;
    while (visina % 20 !== 0) {
      visina--;
      brojac++;
    }
    div1.setAttribute('style', ` min-height:${visina}px; max-height:${visina}px`)
    menuWraper.setAttribute('style', `top:${brojac}px`)
   
   
}


export function pomeriHranu(setPozicija, height, width){

    console.log('pomeri hranu funkcija   !!!!!!!!!!!!!!!!!!!!!!');

    let bottomValue=Math.floor(Math.random() *height-80);
    while(bottomValue<80){
        bottomValue+=30;
    }
    let leftValue=Math.floor(Math.random() * width-30);
    while(leftValue<30){
        leftValue+=30;
    }
    setPozicija({
        left:leftValue,
        bottom:bottomValue
    })

}