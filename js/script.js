
let pong = (function(){

    const keyStates = {};

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

        setPosition(key){

            if(key === this.codeUp && this.position[0] != 2){
                this.position[0]--;
                this.position[1]--;

            } else if(key === this.codeDown && this.position[1] != 24){
                this.position[0]++;
                this.position[1]++;

            }

            this.selector.style.gridRow = `${this.position[0]} / ${this.position[1]}`;
        }

        checkMove(){
            if(keyStates[this.codeUp]){
                this.setPosition(this.codeUp);

            }
            if(keyStates[this.codeDown]){
                this.setPosition(this.codeDown);

            }
        }

        gameLoop = setInterval(() => {
            this.checkMove();
        }, 50);

    }

    let playerL = new player([10, 15], "KeyW", "KeyS", playerLeft);
    let playerR = new player([10, 15], "ArrowUp", "ArrowDown", playerRight);

    document.addEventListener("keydown", (event) => {
        keyStates[event.code] = true;
        
    });

    document.addEventListener("keyup", (event) => {
        keyStates[event.code] = false;
        
    });


}());

