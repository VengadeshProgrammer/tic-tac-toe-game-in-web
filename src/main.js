window.addEventListener("load", ()=>{
    const board = new Board();
    // const basicTechnique = new Boturn();
    const placeOpp = new PlaceOpponent();
    const basicTechnique = new BasicTechniques(placeOpp);
    const advanceTechnique = new AdvanceTechniques(placeOpp);
    const winningMoves = new WinningMove(placeOpp);
    const detectPlayerWin = new DetectWin(placeOpp);
    const isTie = new IsTie();
    const choosePlayerDialogBox = document.querySelector(".choosePlayerDialogBox");
    const choosePlayerCrossBtn = document.getElementById("choosePlayerCross");
    const playerLabel = document.getElementById("playerLabel");
    const main = document.getElementsByTagName("main")[0];
    let boxs = document.querySelectorAll("main div");
    const choosePlayerOByn = document.getElementById("choosePlayerO");
    const muteIcon = document.getElementById("muteIcon");
    const soundIcon = document.getElementById("soundIcon");
    let userPlayer;
    let oppPlayer;
    const container = document.querySelector(".container");
    const loseBox = document.querySelector(".gameOver");
    const wonBox = document.querySelector(".gameWon");
    const tieBox = document.querySelector(".gameTie");
    var stop = false;
    const gameClickSound = new Audio('/assets/musics/select-sound-121244.mp3');
    const gameOverSound = new Audio('/assets/musics/game-over-arcade-6435.mp3');
    const gameStartSound = new Audio('/assets/musics/game-start-6104.mp3');
    const gameWonSound = new Audio('/assets/musics/game-level-complete-143022.mp3');
    const gameTieSound = new Audio('/assets/musics/game-tie.mp3');
    choosePlayerCrossBtn.addEventListener("click", ()=>{
        choosePlayerDialogBox.classList.toggle("hidden");
        main.classList.remove("blur");
        gameStartSound.play(); 
        userPlayer = "/assets/cross.png";
        fillBoxesWithPlayers();
        showPlayersLabel();
    });
    choosePlayerOByn.addEventListener("click", ()=>{
        choosePlayerDialogBox.classList.toggle("hidden");
        main.classList.remove("blur");
        const gameStartSound = new Audio('/assets/musics/game-start-6104.mp3'); // Replace with your sound file
        gameStartSound.play(); 
        userPlayer = "/assets/o.png";
        fillBoxesWithPlayers();
        showPlayersLabel();
    });
    function showPlayersLabel()
    {
        playerLabel.innerHTML= `<span class="yourPlayer">You:</span>
        <img src="${userPlayer}" width="40">`;

    };
    muteIcon.addEventListener("click", ()=>{
        muteIcon.style.opacity=0;
        soundIcon.style.zIndex=1;
        soundIcon.style.opacity=1;
        muteIcon.style.zIndex=-1;
    });
    soundIcon.addEventListener("click", ()=>{
        soundIcon.style.opacity=0;
        muteIcon.style.zIndex=1;
        muteIcon.style.opacity=1;
        soundIcon.style.zIndex=-1;
    });
    function fillBoxesWithPlayers()
    {
        boxs.forEach(box=>{
          if(box.id!="")
          {
            box.innerHTML=`
            <img src="/assets/redWinLine.png" alt="boxCrossPlayer" width="15" height="200" class="boxCrossPlayer hidden">
            <img src="/assets/greenWinLine.png" alt="boxCrossPlayer" width="15" height="200" class="boxCrossPlayer hidden">
            <img src="/assets/cross.png" alt="boxCrossPlayer" width="150" class="boxCrossPlayer hidden">
            <img src="/assets/o.png" alt="boxOPlayer" width="150" class="boxOPlayer hidden">`;
          };
        });
    };
    main.addEventListener("click",e=>{
        // Get the choosen div
        let clickedDiv;
      if(e.target.tagName=="IMG")
      {
        clickedDiv = e.target.closest("div");
      }
      else if(e.target.id.includes("box"))
      {
        clickedDiv = e.target;
      }
      const gameClickSound = new Audio('/assets/musics/select-sound-121244.mp3'); // Replace with your sound file
      gameClickSound.play(); 
      showPlayer(clickedDiv);
    });
    function chooseOppPlayer()
    {
      if(userPlayer=="/assets/cross.png")
        {
            oppPlayer = "/assets/o.png";
        }
        else
        {
            oppPlayer = "/assets/cross.png";
        }
    }; 
    function randomSpan()
    {
        // place opponent anywhere on the corners!
        let TotalScoreBoard = board.getTotalScoreBoard();
          let spaces = [1,2,3,4,5,6,7,8,9].filter(item=>{
            if(TotalScoreBoard.includes(item)==false)
            {
              return item;
            };
          });
          
        const randomIndex = Math.floor(Math.random()*(4-0));
        let corner = spaces[randomIndex];
        if(corner!=undefined){
        placeOpp.placePlayer(corner, userPlayer);
        board.addOpponentPoint(`box${corner}`);
         }
         else
         {
          // Match TIE!
          console.log("It's A TIE!");
          stop=true;
          container.classList.toggle("blinkGrey");
          setTimeout(()=>{
            container.classList.toggle("blinkGrey");
          },510);
         
          tieBox.classList.toggle("hidden");  //open the dialog box
          document.querySelector("main").classList.toggle("blur"); // make background blur
          gameTieSound.play();
          document.querySelector(".tryAgainTie").addEventListener("click", (e)=>{
            stop=false;
            if(!(tieBox.classList.contains("hidden"))){
              gameClickSound.play();
              tieBox.classList.toggle("hidden"); // close the dialog box
            document.querySelector("main").classList.toggle("blur"); // remove blur background
          //  implement clearing gameBoard visually and background.
            board.getTotalScoreBoard().forEach(item=>{
                const playerEL = document.querySelector(`#box${item} img[src="${userPlayer}"]`);
                const oppPlayerEL = document.querySelector(`#box${item} img[src="${oppPlayer}"]`);
                if(document.querySelector(`#box${item}`).style.backgroundColor=="rgb(255, 215, 0)") document.querySelector(`#box${item}`).style.backgroundColor="#f7f7f7";
                if(!(playerEL.classList.contains("hidden"))){
                  playerEL.classList.toggle("hidden");
                }
                else if(!(oppPlayerEL.classList.contains("hidden")))
                {
                  oppPlayerEL.classList.toggle("hidden");
                };
              });
              board.opponentScoreBoard = [];
              board.playerScoreBoard = [];
              board.totalScoreBoard = [];
            }
            });
            //handle if user clicked cross icon
            document.querySelector(".closeBtnTie").addEventListener("click", (e)=>{
              if(!tieBox.classList.contains("hidden")){
                gameClickSound.play();
                tieBox.classList.toggle("hidden"); // close the dialog box
                document.querySelector("main").classList.toggle("blur"); // remove blur background
                document.querySelector(".restartBtn").classList.toggle("broken");
              }
            });
  
            document.querySelector(".restartBtn").addEventListener("click", ()=>{
              if(!(document.querySelector(".restartBtn").classList.contains("broken"))){
              stop=false;
              gameClickSound.play();
              board.getTotalScoreBoard().forEach(item=>{
                const playerEL = document.querySelector(`#box${item} img[src="${userPlayer}"]`);
                const oppPlayerEL = document.querySelector(`#box${item} img[src="${oppPlayer}"]`);
                if(document.querySelector(`#box${item}`).style.backgroundColor=="rgb(255, 215, 0)") document.querySelector(`#box${item}`).style.backgroundColor="#f7f7f7";
                if(!(playerEL.classList.contains("hidden"))){
                  playerEL.classList.toggle("hidden");
                }
                else if(!(oppPlayerEL.classList.contains("hidden")))
                {
                  oppPlayerEL.classList.toggle("hidden");
                };
              });
              board.opponentScoreBoard = [];
              board.playerScoreBoard = [];
              board.totalScoreBoard = [];
              document.querySelector(".restartBtn").classList.toggle("broken");
            }
            });
         }
    };
    function showPlayer(clickedDiv)
    {
      if(!stop){
        chooseOppPlayer();
        const playerEl = document.querySelector(`#${clickedDiv.id} img[src="${userPlayer}"]`);
        const oppPlayerEl = document.querySelector(`#${clickedDiv.id} img[src="${oppPlayer}"]`);
        
        if(playerEl.classList.contains("hidden") && oppPlayerEl.classList.contains("hidden")){
          playerEl.classList.remove("hidden");
        board.addPlayerPoint(clickedDiv.id);

        if(detectPlayerWin.winningCombinations(board)){
          // player won the game!
          // blink the background color for 0.5s
          stop=true;
          container.classList.toggle("blinkGreen");
          setTimeout(()=>{
            container.classList.toggle("blinkGreen");
          },510);

          wonBox.classList.toggle("hidden");  //open the dialog box
          document.querySelector("main").classList.toggle("blur"); // make background blur
          gameWonSound.play();
          document.querySelector(".restart").addEventListener("click", (e)=>{
            stop=false;
            if(!wonBox.classList.contains("hidden")){
            wonBox.classList.toggle("hidden"); // close the dialog box
            document.querySelector("main").classList.toggle("blur"); // remove blur background
            gameClickSound.play(); 
          //  implement clearing gameBoard visually and background.
            board.getTotalScoreBoard().forEach(item=>{
                // document.querySelector("main").classList.toggle("blur");
                // wonBox.classList.toggle("hidden");
                const playerEL = document.querySelector(`#box${item} img[src="${userPlayer}"]`);
                const oppPlayerEL = document.querySelector(`#box${item} img[src="${oppPlayer}"]`);
                if(document.querySelector(`#box${item}`).style.backgroundColor=="rgb(255, 215, 0)") document.querySelector(`#box${item}`).style.backgroundColor="#f7f7f7";
                if(!(playerEL.classList.contains("hidden"))){
                  playerEL.classList.toggle("hidden");
                }
                else if(!(oppPlayerEL.classList.contains("hidden")))
                {
                  oppPlayerEL.classList.toggle("hidden"); 
                };
              });
              board.opponentScoreBoard = [];
              board.playerScoreBoard = [];
              board.totalScoreBoard = [];
            }
            });
            //handle if user clicked cross icon
          document.querySelector(".closeBtnWon").addEventListener("click", (e)=>{
            if(!wonBox.classList.contains("hidden")){
              gameClickSound.play(); 
              wonBox.classList.toggle("hidden"); // close the dialog box
              document.querySelector("main").classList.toggle("blur"); // remove blur background
              document.querySelector(".restartBtn").classList.toggle("broken");
            }
          });

          document.querySelector(".restartBtn").addEventListener("click", ()=>{
            if(!(document.querySelector(".restartBtn").classList.contains("broken"))){
            stop=false;
            gameClickSound.play(); 
            board.getTotalScoreBoard().forEach(item=>{
              const playerEL = document.querySelector(`#box${item} img[src="${userPlayer}"]`);
              const oppPlayerEL = document.querySelector(`#box${item} img[src="${oppPlayer}"]`);
              if(document.querySelector(`#box${item}`).style.backgroundColor=="rgb(255, 215, 0)") document.querySelector(`#box${item}`).style.backgroundColor="#f7f7f7";
              if(!(playerEL.classList.contains("hidden"))){
                playerEL.classList.toggle("hidden");
              }
              else if(!(oppPlayerEL.classList.contains("hidden")))
              {
                oppPlayerEL.classList.toggle("hidden");
              };
            });
            board.opponentScoreBoard = [];
            board.playerScoreBoard = [];
            board.totalScoreBoard = [];
            document.querySelector(".restartBtn").classList.toggle("broken");
          }
          });
        }
        if(!stop){
        if(winningMoves.tryAllCombinations(board, userPlayer)!="Lose"){
        if(basicTechnique.checkCenter(board, userPlayer, clickedDiv.id) || basicTechnique.checkVerticalL(board, userPlayer, clickedDiv.id) || basicTechnique.checkVerticalLViseVersa(board, userPlayer, clickedDiv.id) || basicTechnique.checkVerticalLCenter(board, userPlayer, clickedDiv.id)
        || basicTechnique.checkVerticalRCenter(board, userPlayer, clickedDiv.id) || basicTechnique.checkVerticalRViseVersa(board, userPlayer, clickedDiv.id) || basicTechnique.checkVerticalR(board, userPlayer, clickedDiv.id) || basicTechnique.checkVerticalC(board, userPlayer, clickedDiv.id) || basicTechnique.checkVerticalCViseVersa(board, userPlayer, clickedDiv.id) || basicTechnique.checkVerticalCCenter(board, userPlayer, clickedDiv.id) || basicTechnique.checkHorizontalT(board, userPlayer, clickedDiv) || basicTechnique.checkHorizontalTViseVersa(board, userPlayer, clickedDiv.id) || basicTechnique.checkHorizontalTCenter(board, userPlayer, clickedDiv.id) || basicTechnique.checkHorizontalC(board, userPlayer, clickedDiv.id) || basicTechnique.checkHorizontalCViseVersa(board, userPlayer, clickedDiv.id) || basicTechnique.checkHorizontalCCenter(board, userPlayer, clickedDiv.id) || basicTechnique.checkHorizontalB(board, userPlayer, clickedDiv.id) || basicTechnique.checkHorizontalBViseVersa(board, userPlayer, clickedDiv.id) || basicTechnique.checkHorizontalBCenter(board, userPlayer, clickedDiv.id) || basicTechnique.checkLRDiagonal(board, userPlayer, clickedDiv.id) || basicTechnique.checkRLDiagonal(board, userPlayer, clickedDiv.id) || basicTechnique.checkLRDiagonalViseVersa(board, userPlayer, clickedDiv.id) || basicTechnique.checkLRDiagonalCenter(board, userPlayer, clickedDiv.id) || basicTechnique.checkRLDiagonalViseVersa(board, userPlayer, clickedDiv.id) || basicTechnique.checkRLDiagonalCenter(board, userPlayer, clickedDiv.id) || advanceTechnique.moveOppPlayerIfPlayerUsingFormula1(board, userPlayer, clickedDiv.id) || advanceTechnique.moveOppPlayerIfPlayerUsingFormula2(board, userPlayer, clickedDiv.id))
        {
          // Todo List
          //code the opponent winning placement ✅
          //win logic ✅
          //lose logic ✅
          //restart logic ✅
          //sounds ✅
          //responsive UI&UX ✅
        }
        else
        {
           if(!isTie.check(board))
             randomSpan();
          else
          {
            // Match TIE!
            stop=true;
        container.classList.toggle("blinkGrey");
        setTimeout(()=>{
          container.classList.toggle("blinkGrey");
        },510);
       
        tieBox.classList.toggle("hidden");  //open the dialog box
        document.querySelector("main").classList.toggle("blur"); // make background blur
        gameTieSound.play(); 
        document.querySelector(".tryAgain").addEventListener("click", (e)=>{
          stop=false;
          gameClickSound.play(); 
          if(!tieBox.classList.contains("hidden")){
            tieBox.classList.toggle("hidden"); // close the dialog box
          document.querySelector("main").classList.toggle("blur"); // remove blur background
        //  implement clearing gameBoard visually and background.
          board.getTotalScoreBoard().forEach(item=>{
              const playerEL = document.querySelector(`#box${item} img[src="${userPlayer}"]`);
              const oppPlayerEL = document.querySelector(`#box${item} img[src="${oppPlayer}"]`);
              if(document.querySelector(`#box${item}`).style.backgroundColor=="rgb(255, 215, 0)") document.querySelector(`#box${item}`).style.backgroundColor="#f7f7f7";
              if(!(playerEL.classList.contains("hidden"))){
                playerEL.classList.toggle("hidden");
              }
              else if(!(oppPlayerEL.classList.contains("hidden")))
              {
                oppPlayerEL.classList.toggle("hidden");
              };
            });
            board.opponentScoreBoard = [];
            board.playerScoreBoard = [];
            board.totalScoreBoard = [];
          }
          });
          //handle if user clicked cross icon
          document.querySelector(".closeBtnTie").addEventListener("click", (e)=>{
            if(!tieBox.classList.contains("hidden")){
              gameClickSound.play(); 
              tieBox.classList.toggle("hidden"); // close the dialog box
              document.querySelector("main").classList.toggle("blur"); // remove blur background
              document.querySelector(".restartBtn").classList.toggle("broken");
            }
          });

          document.querySelector(".restartBtn").addEventListener("click", ()=>{
            if(!(document.querySelector(".restartBtn").classList.contains("broken"))){
            stop=false;
            gameClickSound.play(); 
            board.getTotalScoreBoard().forEach(item=>{
              const playerEL = document.querySelector(`#box${item} img[src="${userPlayer}"]`);
              const oppPlayerEL = document.querySelector(`#box${item} img[src="${oppPlayer}"]`);
              if(document.querySelector(`#box${item}`).style.backgroundColor=="rgb(255, 215, 0)") document.querySelector(`#box${item}`).style.backgroundColor="#f7f7f7";
              if(!(playerEL.classList.contains("hidden"))){
                playerEL.classList.toggle("hidden");
              }
              else if(!(oppPlayerEL.classList.contains("hidden")))
              {
                oppPlayerEL.classList.toggle("hidden");
              };
            });
            board.opponentScoreBoard = [];
            board.playerScoreBoard = [];
            board.totalScoreBoard = [];
            document.querySelector(".restartBtn").classList.toggle("broken");
          }
          });
          }
        }
      }
      else
      {
        //player lose the game!
        stop=true;
        container.classList.toggle("blinkRed");
        setTimeout(()=>{
          container.classList.toggle("blinkRed");
        },510);
       
        loseBox.classList.toggle("hidden");  //open the dialog box
        document.querySelector("main").classList.toggle("blur"); // make background blur
        gameOverSound.play(); 
        document.querySelector(".tryAgain").addEventListener("click", (e)=>{
          stop=false;
          if(!loseBox.classList.contains("hidden")){
            gameClickSound.play(); 
          loseBox.classList.toggle("hidden"); // close the dialog box
          console.log(loseBox.className);
          document.querySelector("main").classList.toggle("blur"); // remove blur background
        //  implement clearing gameBoard visually and background.
          board.getTotalScoreBoard().forEach(item=>{
              const playerEL = document.querySelector(`#box${item} img[src="${userPlayer}"]`);
              const oppPlayerEL = document.querySelector(`#box${item} img[src="${oppPlayer}"]`);
              if(document.querySelector(`#box${item}`).style.backgroundColor=="rgb(255, 215, 0)") document.querySelector(`#box${item}`).style.backgroundColor="#f7f7f7";
              if(!(playerEL.classList.contains("hidden"))){
                playerEL.classList.toggle("hidden");
              }
              else if(!(oppPlayerEL.classList.contains("hidden")))
              {
                oppPlayerEL.classList.toggle("hidden");
              };
            });
            board.opponentScoreBoard = [];
            board.playerScoreBoard = [];
            board.totalScoreBoard = [];
          }
          });
          //handle if user clicked cross icon
          document.querySelector(".closeBtnOver").addEventListener("click", (e)=>{
            if(!loseBox.classList.contains("hidden")){
              gameClickSound.play(); 
              loseBox.classList.toggle("hidden"); // close the dialog box
              document.querySelector("main").classList.toggle("blur"); // remove blur background
              document.querySelector(".restartBtn").classList.toggle("broken");
            }
          });

          document.querySelector(".restartBtn").addEventListener("click", ()=>{
            if(!(document.querySelector(".restartBtn").classList.contains("broken"))){
            stop=false;
            gameClickSound.play(); 
            board.getTotalScoreBoard().forEach(item=>{
              const playerEL = document.querySelector(`#box${item} img[src="${userPlayer}"]`);
              const oppPlayerEL = document.querySelector(`#box${item} img[src="${oppPlayer}"]`);
              if(document.querySelector(`#box${item}`).style.backgroundColor=="rgb(255, 215, 0)") document.querySelector(`#box${item}`).style.backgroundColor="#f7f7f7";
              if(!(playerEL.classList.contains("hidden"))){
                playerEL.classList.toggle("hidden");
              }
              else if(!(oppPlayerEL.classList.contains("hidden")))
              {
                oppPlayerEL.classList.toggle("hidden");
              };
            });
            board.opponentScoreBoard = [];
            board.playerScoreBoard = [];
            board.totalScoreBoard = [];
            document.querySelector(".restartBtn").classList.toggle("broken");
          }
          });
      }
    }
        }
        else
        {
          return;
        }
      }
    };
});