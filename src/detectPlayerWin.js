class DetectWin
{
    constructor(placeOpp)
    {
        this.placeOpp = placeOpp;
    };
    winningCombinations(board)
    {
        if(this.checkHorizontalB(board) || this.checkHorizontalBCenter(board) || this.checkHorizontalBViseVersa(board) || this.checkHorizontalC(board) || this.checkHorizontalCCenter(board) || this.checkHorizontalCViseVersa(board) || this.checkHorizontalT(board) || this.checkHorizontalTCenter(board) || this.checkHorizontalTViseVersa(board) || this.checkLRDiagonal(board) || this.checkLRDiagonalCenter(board) || this.checkLRDiagonalViseVersa(board) || this.checkRLDiagonal(board) || this.checkRLDiagonalCenter(board) || this.checkRLDiagonalViseVersa(board) || this.checkVerticalC(board) || this.checkVerticalCCenter(board) || this.checkVerticalCViseVersa(board) || this.checkVerticalL(board) || this.checkVerticalLCenter(board) || this.checkVerticalLViseVersa(board) || this.checkVerticalR(board) || this.checkVerticalRCenter(board) || this.checkVerticalRViseVersa(board)){
            console.log("YOU HAVE WON!!! 😍👌");
            return true;
        }
        else return false;
    };

    
    checkVerticalL(board)
    {
         if((board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(4)))
        {
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkVerticalLViseVersa(board)
    {
         if((board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(4)))
        {
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkVerticalLCenter(board)
    {
     if((board.playerScoreBoard.includes(4)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(1)))
        {
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkVerticalRCenter(board)
    {
     if((board.playerScoreBoard.includes(6)) && (board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(9)))
        {
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkVerticalRViseVersa(board)
    {
     if((board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(6)) && (board.playerScoreBoard.includes(9)))
        {
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkVerticalR(board)
    {
    if((board.playerScoreBoard.includes(9)) && (board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(6)))
        {
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkVerticalC(board)
    {
     if((board.playerScoreBoard.includes(8)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(2)))
        {
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkVerticalCViseVersa(board)
    {
      if((board.playerScoreBoard.includes(2)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(8)))
        {
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkVerticalCCenter(board)
    {
     if((board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(2)) && (board.playerScoreBoard.includes(8)))
        {
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    //Horizontal
    checkHorizontalT(board)
    {
      if((board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(2)))
        {
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkHorizontalTViseVersa(board)
    {
     if((board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(2)) && (board.playerScoreBoard.includes(3)))
        {
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };    

    checkHorizontalTCenter(board)
    {
     if((board.playerScoreBoard.includes(2)) && (board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(3)))
        {
            document.querySelector(`#box${2}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkHorizontalC(board)
    {
     if((board.playerScoreBoard.includes(6)) && (board.playerScoreBoard.includes(4)) && (board.playerScoreBoard.includes(5)))
        {
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };    

    checkHorizontalCViseVersa(board)
    {
      if((board.playerScoreBoard.includes(4)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(6)))
        {
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    }; 

    checkHorizontalCCenter(board)
    {
     if((board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(4)) && (board.playerScoreBoard.includes(6)))
        {
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${4}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${6}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    checkHorizontalB(board)
    {
     if((board.playerScoreBoard.includes(9)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(8)))
        {
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };    

    checkHorizontalBViseVersa(board)
    {
     if((board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(8)) && (board.playerScoreBoard.includes(9)))
        { 
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    }; 

    checkHorizontalBCenter(board)
    {
      if((board.playerScoreBoard.includes(8)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(9)))
        {
            document.querySelector(`#box${8}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            return true;
        }
        else return false;
    };

    //diagonal
    checkLRDiagonal(board)
    {
        if((board.playerScoreBoard.includes(9)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(1)))
          {
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
              return true;
          }
          else return false;
    };

    checkLRDiagonalViseVersa(board)
    {
       if((board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(5)))
          {
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
              return true;
          }
          else return false;
    };

    checkLRDiagonalCenter(board)
    {
     if((board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(9)))
          {
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
              return true;
          } 
          else return false;
    };

    checkRLDiagonal(board)
    {
     
       if((board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(3)))
          { 
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
              return true;
          }
          else return false;
    };

    checkRLDiagonalViseVersa(board)
    {
        if((board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(9)))
          {
            document.querySelector(`#box${1}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${9}`).style.backgroundColor="#FFD700";
              return true;
          }
          else return false;
    };

    checkRLDiagonalCenter(board)
    {
       if((board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(7)))
          {
            document.querySelector(`#box${5}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${3}`).style.backgroundColor="#FFD700";
            document.querySelector(`#box${7}`).style.backgroundColor="#FFD700";
              return true;
          } 
          else return false;
    };
};