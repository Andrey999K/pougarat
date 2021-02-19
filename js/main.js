const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// const startHeigth = window.height;
// console.log(startHeigth);

class Player {

    clear() {
        ctx.beginPath();
        ctx.moveTo(this.contur[0][0], this.contur[0][1]);
        for (let i = 1; i < this.contur.length; i++) {
            ctx.lineTo(this.contur[i][0], this.contur[i][1]);
        }
        ctx.fillStyle = "#000";
        ctx.strokeStyle = "#000";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.clearRect(this.headCoord[0], this.headCoord[1], this.headCoord[2], this.headCoord[3]);
    }

    playerRender() {
        ctx.fillStyle = "#ffffff";
        // ctx.fillRect(player.x, player.y, player.width, player.height);
        ctx.beginPath();
        ctx.moveTo(this.contur[0][0], this.contur[0][1]);
        for (let i = 1; i < this.contur.length; i++) {
            ctx.lineTo(this.contur[i][0], this.contur[i][1]);
        }
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();
        console.log(this);
        ctx.drawImage(
            this.headImage,
            this.headCoord[0],
            this.headCoord[1],
            this.headCoord[2],
            this.headCoord[3]
        );
    }

    jump() {
        let height = 50;
        let bottom = false;
        let speed = 1000;
        let timerJump = setInterval(() => {
            if (height != 0) {
                if (!bottom) {
                    speed -= 20;
                    this.clear();
                    this.y -= speed / 100;
                    for (let i = 0; i < this.contur.length; i++) {
                        this.contur[i][1] -= speed / 100;
                    }
                    this.headCoord[1] -= speed / 100;
                    this.playerRender();
                    height--;
                } else {
                    speed += 20;
                    if (height == 50) {
                        clearInterval(timerJump);
                        console.dir(timerJump);
                        return;
                    }
                    this.clear();
                    this.y += speed / 100;
                    for (let i = 0; i < this.contur.length; i++) {
                        this.contur[i][1] += speed / 100;
                    }
                    this.headCoord[1] += speed / 100;
                    this.playerRender();
                    height++;
                }
            } else {
                console.log("вниз");
                height++;
                bottom = true;
            }
        }, 10);

    }

    constructor(options) {
        this.x = options.x
        this.y = options.y
        this.contur = options.contur
        this.speed = options.speed
        this.headImage = options.headImage
        this.headCoord = options.headCoord
        // this.width = options.width
        // this.height = options.height

    }
}

// let a = 271;
// let b = -140;

let contur = [
    [311, 245 + 140],
    [316, 245 + 140],
    [340, 261 + 140],
    [334, 292 + 140],
    [329, 289 + 140],
    [333, 264 + 140],
    [311, 245 + 140],
    [304, 267 + 140],
    [274, 270 + 140],
    [273, 265 + 140],
    [298, 260 + 140],
    [303, 244 + 140],
    [303, 210 + 140],
    [280, 220 + 140],
    [290, 232 + 140],
    [284, 235 + 140],
    [271, 217 + 140],
    [298, 203 + 140],
    [311, 198 + 140],
    [324, 198 + 140],
    [333, 219 + 140],
    [354, 211 + 140],
    [358, 218 + 140],
    [334, 227 + 140],
    [319, 212 + 140],
    [316, 244 + 140]
];

let timer;

setTimeout(() => {

    const keyImage = document.querySelector(".key");
    keyImage.classList.add("visibile");

    let image1 = new Image();
    image1.src = "img/01.png";
    image1.addEventListener("load", () => {
        // ctx.drawImage(image1, 100, 100, 100, 100);
        player.headImage = image1
        player.headCoord = [287, 290, 50, 52]
        // ctx.drawImage(
        //     player.headImage,
        //     player.headCoord[0],
        //     player.headCoord[1],
        //     player.headCoord[2],
        //     player.headCoord[3]
        // );
        player.playerRender();

    });



    window.addEventListener("keydown", () => {
        // console.log(event);
        switch (event.code) {

            case "ArrowUp":
                // clearTimeout(timer);
                // timer = setInterval(() => {
                //     player.clear();
                //     player.x += 1;
                //     for (let i = 0; i < player.contur.length; i++) {
                //         player.contur[i][0]++;
                //     }
                //     player.playerRender();
                // }, 10);
                player.jump();
                break;
            case "ArrowRight":
                clearTimeout(timer);
                timer = setInterval(() => {
                    player.clear();
                    player.x += player.speed;
                    for (let i = 0; i < player.contur.length; i++) {
                        player.contur[i][0] += player.speed;
                    }
                    player.headCoord[0] += player.speed;
                    player.playerRender();
                    console.log(timer);
                }, 10);
                break;
                // case "ArrowDown":
                //     clearTimeout(timer);
                //     timer = setInterval(() => {
                //         player.clear();
                //         player.y += 1;
                //         for (let i = 0; i < player.contur.length; i++) {
                //             player.contur[i][1]++;
                //         }
                //         player.playerRender();
                //     }, 10);
                //     break;
            case "ArrowLeft":
                clearTimeout(timer);
                timer = setInterval(() => {
                    player.clear();
                    player.x -= player.speed;
                    for (let i = 0; i < player.contur.length; i++) {
                        player.contur[i][0] -= player.speed;
                    }
                    player.headCoord[0] -= player.speed;
                    player.playerRender();
                }, 10);
                break;

            default:
                break;
        }
    });

    window.addEventListener("keyup", () => {
        switch (event.code) {
            // case "ArrowUp":
            //     clearTimeout(timer);
            //     break;
            case "ArrowRight":
                console.log("Клавиша оджата");
                clearTimeout(timer);
                break;
                // case "ArrowDown":
                //     clearTimeout(timer);
                //     break;
            case "ArrowLeft":
                clearTimeout(timer);
                break;
            default:
                break;
        }
    });
}, 1500);

const player = new Player({
    x: 311,
    y: 245,
    contur: contur,
    speed: 5
})