class WinningMove
{
    constructor(placeOpp)
    {
        this.placeOpp = placeOpp;
    };
    tryAllCombinations(board, userPlayer)
    {
        if(this.checkHorizontalB(board, userPlayer) || this.checkHorizontalBCenter(board, userPlayer) || this.checkHorizontalBViseVersa(board, userPlayer) || this.checkHorizontalC(board, userPlayer) || this.checkHorizontalCCenter(board, userPlayer) || this.checkHorizontalCViseVersa(board, userPlayer) || this.checkHorizontalT(board, userPlayer) || this.checkHorizontalTCenter(board, userPlayer) || this.checkHorizontalTViseVersa(board, userPlayer) || this.checkLRDiagonal(board, userPlayer) || this.checkLRDiagonalCenter(board, userPlayer ) || this.checkLRDiagonalViseVersa(board, userPlayer) || this.checkRLDiagonal(board, userPlayer ) || this.checkRLDiagonalCenter(board, userPlayer) || this.checkRLDiagonalViseVersa(board, userPlayer) || this.checkVerticalC(board, userPlayer) || this.checkVerticalCCenter(board, userPlayer) || this.checkVerticalCViseVersa(board, userPlayer) || this.checkVerticalL(board, userPlayer) || this.checkVerticalLCenter(board, userPlayer) || this.checkVerticalLViseVersa(board, userPlayer) || this.checkVerticalR(board, userPlayer) || this.checkVerticalRCenter(board, userPlayer) || this.checkVerticalRViseVersa(board, userPlayer)){
            console.log("You Lose the GAME!!🤣");
            return "Lose";
        }
        else
        {
            return false;
        };
    };


    checkVerticalL(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(7))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(7)) && (board.opponentScoreBoard.includes(1)) && (board.opponentScoreBoard.includes(4)) && !(board.playerScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(4)))
        {
            this.placeOpp.placePlayer(7, userPlayer);
            board.addOpponentPoint("box7");
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkVerticalLViseVersa(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(1))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(1)) && (board.opponentScoreBoard.includes(7)) && (board.opponentScoreBoard.includes(4)) && !(board.playerScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(4)))
        {
            this.placeOpp.placePlayer(1, userPlayer);
            board.addOpponentPoint("box1");
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkVerticalLCenter(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(4))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(4)) && (board.opponentScoreBoard.includes(7)) && (board.opponentScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(4)) && !(board.playerScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(1)))
        {
            this.placeOpp.placePlayer(4, userPlayer);
            board.addOpponentPoint("box4");
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkVerticalRCenter(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(6))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(6)) && (board.opponentScoreBoard.includes(3)) && (board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(6)) && !(board.playerScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(9)))
        {
            this.placeOpp.placePlayer(6, userPlayer);
            board.addOpponentPoint("box6");
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkVerticalRViseVersa(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(3))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(3)) && (board.opponentScoreBoard.includes(6)) && (board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(6)) && !(board.playerScoreBoard.includes(9)))
        {
            this.placeOpp.placePlayer(3, userPlayer);
            board.addOpponentPoint("box3");
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkVerticalR(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(9))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(9)) && (board.opponentScoreBoard.includes(3)) && (board.opponentScoreBoard.includes(6)) &&  !(board.playerScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(6)))
        {
            this.placeOpp.placePlayer(9, userPlayer);
            board.addOpponentPoint("box9");
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkVerticalC(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(8))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(8)) && (board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(2)) && !(board.playerScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(2)))
        {
            this.placeOpp.placePlayer(8, userPlayer);
            board.addOpponentPoint("box8");
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkVerticalCViseVersa(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(2))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(2)) && (board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(2)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(8)))
        {
            this.placeOpp.placePlayer(2, userPlayer);
            board.addOpponentPoint("box2");
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkVerticalCCenter(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(5))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(2)) && (board.opponentScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(2)) && !(board.playerScoreBoard.includes(8)))
        {
            this.placeOpp.placePlayer(5, userPlayer);
            board.addOpponentPoint("box5");
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    //Horizontal
    checkHorizontalT(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(3))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(3)) && (board.opponentScoreBoard.includes(1)) && (board.opponentScoreBoard.includes(2)) && !(board.playerScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(2)))
        {
            this.placeOpp.placePlayer(3, userPlayer);
            board.addOpponentPoint("box3");
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkHorizontalTViseVersa(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(1))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(1)) && (board.opponentScoreBoard.includes(2)) && (board.opponentScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(2)) && !(board.playerScoreBoard.includes(3)))
        {
            this.placeOpp.placePlayer(1, userPlayer);
            board.addOpponentPoint("box1");
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            return true;
        }
    };    

    checkHorizontalTCenter(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(2))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(2)) && (board.opponentScoreBoard.includes(1)) && (board.opponentScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(2)) && !(board.playerScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(3)))
        {
            this.placeOpp.placePlayer(2, userPlayer);
            board.addOpponentPoint("box2");
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkHorizontalC(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(6))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(6)) && (board.opponentScoreBoard.includes(4)) && (board.opponentScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(6)) && !(board.playerScoreBoard.includes(4)) && !(board.playerScoreBoard.includes(5)))
        {
            this.placeOpp.placePlayer(6, userPlayer);
            board.addOpponentPoint("box6");
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            return true;
        }
    };    

    checkHorizontalCViseVersa(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(4))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(4)) && (board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(6)) && !(board.playerScoreBoard.includes(4)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(6)))
        {
            this.placeOpp.placePlayer(4, userPlayer);
            board.addOpponentPoint("box4");
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            return true;
        }
    }; 

    checkHorizontalCCenter(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(5))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(4)) && (board.opponentScoreBoard.includes(6)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(4)) && !(board.playerScoreBoard.includes(6)))
        {
            this.placeOpp.placePlayer(5, userPlayer);
            board.addOpponentPoint("box5");
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    checkHorizontalB(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(9))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(9)) && (board.opponentScoreBoard.includes(7)) && (board.opponentScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(8)))
        {
            this.placeOpp.placePlayer(9, userPlayer);
            board.addOpponentPoint("box9");
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            return true;
        }
    };    

    checkHorizontalBViseVersa(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(7))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(7)) && (board.opponentScoreBoard.includes(8)) && (board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(9)))
        {
            this.placeOpp.placePlayer(7, userPlayer);
            board.addOpponentPoint("box7");
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            return true;
        }
    }; 

    checkHorizontalBCenter(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
      if(board.opponentScoreBoard.includes(8))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(8)) && (board.opponentScoreBoard.includes(7)) && (board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(9)))
        {
            this.placeOpp.placePlayer(8, userPlayer);
            board.addOpponentPoint("box8");
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            return true;
        }
    };

    //diagonal
    checkLRDiagonal(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
        if(board.opponentScoreBoard.includes(9))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(9)) && (board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(1)))
          {
              this.placeOpp.placePlayer(9, userPlayer);
              board.addOpponentPoint("box9");
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
              return true;
          }
    };

    checkLRDiagonalViseVersa(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
        if(board.opponentScoreBoard.includes(3))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(3)) && (board.opponentScoreBoard.includes(7)) && (board.opponentScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(5)))
          {
              this.placeOpp.placePlayer(3, userPlayer);
              board.addOpponentPoint("box3");
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
              return true;
          }
    };

    checkLRDiagonalCenter(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
        if(board.opponentScoreBoard.includes(5))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(1)) && (board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(9)))
          {
              this.placeOpp.placePlayer(5, userPlayer);
              board.addOpponentPoint("box5");
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
              return true;
          } 
    };

    checkRLDiagonal(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
        if(board.opponentScoreBoard.includes(7))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(7)) && (board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(3)))
          {
              this.placeOpp.placePlayer(7, userPlayer);
              board.addOpponentPoint("box7");
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
              return true;
          }
    };

    checkRLDiagonalViseVersa(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
        if(board.opponentScoreBoard.includes(1))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(1)) && (board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(9)))
          {
              this.placeOpp.placePlayer(1, userPlayer);
              board.addOpponentPoint("box1");
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
              return true;
          }
    };

    checkRLDiagonalCenter(board, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
            {
                this.oppPlayer = "/assets/o.png";
            }
            else
            {
                this.oppPlayer = "/assets/cross.png";
            }
        if(board.opponentScoreBoard.includes(5))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(5)) && (board.opponentScoreBoard.includes(3)) && (board.opponentScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(7)))
          {
              this.placeOpp.placePlayer(5, userPlayer);
              board.addOpponentPoint("box5");
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
              return true;
          } 
    };
};