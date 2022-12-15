document.addEventListener('DOMContentLoaded', function() {
    let canvas = document.getElementsByClassName("canvas");
    let ctx = canvas[0].getContext("2d");
    let x = canvas[0].width/2;
    let y = canvas[0].height-30;
    let dx = 2;
    let dy = -2;
    let ballRadius = 10;
    let paddleHeight = 10;
    let paddleWidth = 100;
    let xMousePos = 0;

    let brickWidth = 150;
    let brickHeight = 20;
    let brickPadding = 10;
    let brickOffsetTop = 30;
    let brickRowCount = 3;
    let brickColumnCount = Math.floor(canvas[0].width/(brickWidth+brickPadding));
    let brickOffsetLeft = (canvas[0].width-(brickColumnCount*(brickWidth+brickPadding)))/2;

    let gagne = document.getElementsByClassName('gagne');
    let perdu = document.getElementsByClassName('perdu');

    let score = 0;

    let bricks = [];
    for(var c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(var r=0; r<brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }
    
    document.onmousemove = function(e)
    {
        xMousePos = e.clientX + window.pageXOffset; 
    };

    function collisionDetection() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                var b = bricks[c][r];
                if(b.status == 1) {
                    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                        dy = -dy;
                        b.status = 0;
                        score++;
                        console.log(score);
                        if(score == brickRowCount*brickColumnCount) {
                            gagne[0].style.display = 'block';
                            canvas[0].style.display = 'none';
                            clearInterval(interval); 
                        }
                    }
                }
            }
        }
    }
  
    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "azure";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(xMousePos, 390, paddleWidth, paddleHeight);
        ctx.fillStyle = "azure";
        ctx.fill();
        ctx.closePath();
    }

    function drawBricks() {
        for(var c=0; c<brickColumnCount; c++) {
            for(var r=0; r<brickRowCount; r++) {
                if(bricks[c][r].status == 1) {
                    var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                    var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "azure";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
    

    function draw() {
        ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
        drawBall();
        drawPaddle();
        drawBricks();
        collisionDetection();

        
        if(x + dx > canvas[0].width-ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy < ballRadius) {
            dy = -dy;
        } else if(y + dy > canvas[0].height-ballRadius) {
            if(x > xMousePos && x < xMousePos + paddleWidth) {
                dy = -dy;
            }
            else {
                perdu[0].style.display = 'block';
                canvas[0].style.display = 'none';
                clearInterval(interval);
            }
        }
        
        console.log(brickOffsetLeft);
        
        x += dx;
        y += dy;
    }


    setInterval(draw, 5);
      
});