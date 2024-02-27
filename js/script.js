
let pong = (function(){

    //DOM
    let playerLeft = document.querySelector(".playerLeft");
    let playerRight = document.querySelector(".playerRight");

    //Player constructor
    class player{

        constructor(pos, codeU, codeD, selector){
            this.position = pos;
            this.codeUp = codeU;
            this.codeDown = codeD;
            this.selector = selector;
        }

        setPosition(e){

            if(e.keyCode === this.codeUp && this.position[0] != 2){
                this.position[0]--;
                this.position[1]--;

            } else if(e.keyCode === this.codeDown && this.position[1] != 24){
                this.position[0]++;
                this.position[1]++;

            }

            this.selector.style.gridRow = `${this.position[0]} / ${this.position[1]}`;
        }
    }

    let playerL = new player([10, 15], 87, 83, playerLeft);
    let playerR = new player([10, 15], 38, 40, playerRight);

    window.addEventListener("keydown", (event) => {
        playerL.setPosition(event);
        playerR.setPosition(event);
    });

}());

