
let pong = (function(){

    const keyStates = {};

    //DOM
    let playerLeft = document.querySelector(".playerLeft");
    let playerRight = document.querySelector(".playerRight");
    let ballSelector = document.querySelector(".ball");

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

    class ball{

        constructor(pos, selector, directionX, directionY){
            this.ballPos = pos;
            this.selector = selector;
            this.directionX = directionX;
            this.directionY = directionY;
        }

        moveBall(){

            switch(this.directionX){
                case "left":
                    this.ballPos[1]--;
                break;
                case "right":
                    this.ballPos[1]++;
                break;
            }
            
            switch(this.directionY){
                case "up":
                    this.ballPos[0]--;
                break;
                case "down":
                    this.ballPos[0]++;
                break;
            }

            this.selector.style.gridRow = this.ballPos[0];
            this.selector.style.gridColumn = this.ballPos[1];
        }

        collide(){

            if(this.ballPos[1] === 4 && playerL.position[0] <= this.ballPos[0] && this.ballPos[0] <= playerL.position[1]){
                this.directionX = "right";
            }

            if(this.ballPos[1] === 45 && playerR.position[0] <= this.ballPos[0] && this.ballPos[0] <= playerR.position[1]){
                this.directionX = "left";
            }

            if(this.ballPos[0] === 2){
                this.directionY = "down";

            } else if(this.ballPos[0] === 23){
                this.directionY = "up";

            }

            if(this.ballPos[1] === 1 || this.ballPos[1] === 48){
                this.directionX = "";
                this.directionY = "";
                alert("GOAL");
                clearInterval(this.gameLoop);
                location.reload();

            }

        }

        gameLoop = setInterval(() => {
            this.moveBall();
            this.collide();
        }, 100);
    }

    let playerL = new player([10, 15], "KeyW", "KeyS", playerLeft);
    let playerR = new player([10, 15], "ArrowUp", "ArrowDown", playerRight);
    let gameBall = new ball([12, 24], ballSelector, "right", "down");

    document.addEventListener("keydown", (event) => {
        keyStates[event.code] = true;
        
    });

    document.addEventListener("keyup", (event) => {
        keyStates[event.code] = false;
        
    });


}());

