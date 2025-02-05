// botTurn.js file deleted for organization. Just below and advanceTechniques are the codes of that file. 
class BasicTechniques
{
    constructor(placeOpp)
    {
        // this.placeOpp = new PlaceOpponent();
        this.placeOpp = placeOpp;
    };
    checkCenter(board,userPlayer, boxNumeber)
    {
        if(typeof(boxNumeber) === "string"){
            boxNumeber = boxNumeber.slice(3);
        }
   // check the fifth box if it exist on the board=>dont'move orthwise=> place the oppoent center of the board by placing it visually and also updaing the board array.
        if(board.opponentScoreBoard.includes(5))
        {
            // fifth box occupied so don't
            return false;
        }
        else if(!(board.playerScoreBoard.includes(5)))
        {
            this.placeOpp.placePlayer(5, userPlayer);
            board.addOpponentPoint("box5");
            return true;
        }
    };

    checkVerticalL(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(7))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(7)) && !(board.opponentScoreBoard.includes(1)) && !(board.opponentScoreBoard.includes(4)) && !(board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(4)))
        {
            this.placeOpp.placePlayer(7, userPlayer);
            board.addOpponentPoint("box7");
            return true;
        }
    };

    checkVerticalLViseVersa(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(1))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(1)) && !(board.opponentScoreBoard.includes(7)) && !(board.opponentScoreBoard.includes(4)) && !(board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(4)))
        {
            this.placeOpp.placePlayer(1, userPlayer);
            board.addOpponentPoint("box1");
            return true;
        }
    };

    checkVerticalLCenter(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(4))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(4)) && !(board.opponentScoreBoard.includes(7)) && !(board.opponentScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(4)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(1)))
        {
            this.placeOpp.placePlayer(4, userPlayer);
            board.addOpponentPoint("box4");
            return true;
        }
    };

    checkVerticalRCenter(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(6))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(6)) && !(board.opponentScoreBoard.includes(3)) && !(board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(6)) && (board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(9)))
        {
            this.placeOpp.placePlayer(6, userPlayer);
            board.addOpponentPoint("box6");
            return true;
        }
    };

    checkVerticalRViseVersa(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(3))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(3)) && !(board.opponentScoreBoard.includes(6)) && !(board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(6)) && (board.playerScoreBoard.includes(9)))
        {
            this.placeOpp.placePlayer(3, userPlayer);
            board.addOpponentPoint("box3");
            return true;
        }
    };

    checkVerticalR(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(9))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(9)) && !(board.opponentScoreBoard.includes(3)) && !(board.opponentScoreBoard.includes(6)) &&  !(board.playerScoreBoard.includes(9)) && (board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(6)))
        {
            this.placeOpp.placePlayer(9, userPlayer);
            board.addOpponentPoint("box9");
            return true;
        }
    };

    checkVerticalC(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(8))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(8)) && !(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(2)) && !(board.playerScoreBoard.includes(8)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(2)))
        {
            this.placeOpp.placePlayer(8, userPlayer);
            board.addOpponentPoint("box8");
            return true;
        }
    };

    checkVerticalCViseVersa(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(2))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(2)) && !(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(2)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(8)))
        {
            this.placeOpp.placePlayer(2, userPlayer);
            board.addOpponentPoint("box2");
            return true;
        }
    };

    checkVerticalCCenter(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(5))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(2)) && !(board.opponentScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(2)) && (board.playerScoreBoard.includes(8)))
        {
            this.placeOpp.placePlayer(5, userPlayer);
            board.addOpponentPoint("box5");
            return true;
        }
    };

    //Horizontal
    checkHorizontalT(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(3))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(3)) && !(board.opponentScoreBoard.includes(1)) && !(board.opponentScoreBoard.includes(2)) && !(board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(2)))
        {
            this.placeOpp.placePlayer(3, userPlayer);
            board.addOpponentPoint("box3");
            return true;
        }
    };

    checkHorizontalTViseVersa(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(1))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(1)) && !(board.opponentScoreBoard.includes(2)) && !(board.opponentScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(2)) && (board.playerScoreBoard.includes(3)))
        {
            this.placeOpp.placePlayer(1, userPlayer);
            board.addOpponentPoint("box1");
            return true;
        }
    };    

    checkHorizontalTCenter(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      };
      if(board.opponentScoreBoard.includes(2))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(2)) && !(board.opponentScoreBoard.includes(1)) && !(board.opponentScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(2)) && (board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(3)))
        {
            this.placeOpp.placePlayer(2, userPlayer);
            board.addOpponentPoint("box2");
            return true;
        }
    };

    checkHorizontalC(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      }
      if(board.opponentScoreBoard.includes(6))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(6)) && !(board.opponentScoreBoard.includes(4)) && !(board.opponentScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(6)) && (board.playerScoreBoard.includes(4)) && (board.playerScoreBoard.includes(5)))
        {
            this.placeOpp.placePlayer(6, userPlayer);
            board.addOpponentPoint("box6");
            return true;
        }
    };    

    checkHorizontalCViseVersa(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      }
      if(board.opponentScoreBoard.includes(4))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(4)) && !(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(6)) && !(board.playerScoreBoard.includes(4)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(6)))
        {
            this.placeOpp.placePlayer(4, userPlayer);
            board.addOpponentPoint("box4");
            return true;
        }
    }; 

    checkHorizontalCCenter(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      }
      if(board.opponentScoreBoard.includes(5))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(4)) && !(board.opponentScoreBoard.includes(6)) && !(board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(4)) && (board.playerScoreBoard.includes(6)))
        {
            this.placeOpp.placePlayer(5, userPlayer);
            board.addOpponentPoint("box5");
            return true;
        }
    };

    checkHorizontalB(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      }
      if(board.opponentScoreBoard.includes(9))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(9)) && !(board.opponentScoreBoard.includes(7)) && !(board.opponentScoreBoard.includes(8)) && !(board.playerScoreBoard.includes(9)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(8)))
        {
            this.placeOpp.placePlayer(9, userPlayer);
            board.addOpponentPoint("box9");
            return true;
        }
    };    

    checkHorizontalBViseVersa(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      }
      if(board.opponentScoreBoard.includes(7))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(7)) && !(board.opponentScoreBoard.includes(8)) && !(board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(8)) && (board.playerScoreBoard.includes(9)))
        {
            this.placeOpp.placePlayer(7, userPlayer);
            board.addOpponentPoint("box7");
            return true;
        }
    }; 

    checkHorizontalBCenter(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
      {
        boxNumeber = boxNumeber.slice(3);
      }
      if(board.opponentScoreBoard.includes(8))
        {
            // seventh box occupied so don't
            return false;
        }
        else if(!(board.opponentScoreBoard.includes(8)) && !(board.opponentScoreBoard.includes(7)) && !(board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(8)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(9)))
        {
            this.placeOpp.placePlayer(8, userPlayer);
            board.addOpponentPoint("box8");
            return true;
        }
    };

    //diagonal
    checkLRDiagonal(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
        {
          boxNumeber = boxNumeber.slice(3);
        }
        if(board.opponentScoreBoard.includes(9))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(9)) && !(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(1)) && !(board.playerScoreBoard.includes(9)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(1)))
          {
              this.placeOpp.placePlayer(9, userPlayer);
              board.addOpponentPoint("box9");
              return true;
          }
    };

    checkLRDiagonalViseVersa(board, userPlayer, boxNumeber)
    {
      
      if(typeof(boxNumeber) === "string")
        {
          boxNumeber = boxNumeber.slice(3);
        }
        if(board.opponentScoreBoard.includes(3))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(3)) && !(board.opponentScoreBoard.includes(7)) && !(board.opponentScoreBoard.includes(5)) && !(board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(5)))
          {
              this.placeOpp.placePlayer(3, userPlayer);
              board.addOpponentPoint("box3");
            
              return true;
          }
    };

    checkLRDiagonalCenter(board, userPlayer, boxNumeber)
    {
     
      if(typeof(boxNumeber) === "string")
        {
          boxNumeber = boxNumeber.slice(3);
        }
        if(board.opponentScoreBoard.includes(5))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(1)) && !(board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(9)))
          {
              this.placeOpp.placePlayer(5, userPlayer);
              board.addOpponentPoint("box5");
              
              return true;
          } 
    };

    checkRLDiagonal(board, userPlayer, boxNumeber)
    {
     
      if(typeof(boxNumeber) === "string")
        {
          boxNumeber = boxNumeber.slice(3);
        }
        if(board.opponentScoreBoard.includes(7))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(7)) && !(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(3)) && !(board.playerScoreBoard.includes(7)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(3)))
          {
              this.placeOpp.placePlayer(7, userPlayer);
              board.addOpponentPoint("box7");
              return true;
          }
    };

    checkRLDiagonalViseVersa(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
        {
          boxNumeber = boxNumeber.slice(3);
          console.log("box number:", boxNumeber);
        }
        if(board.opponentScoreBoard.includes(1))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(1)) && !(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(9)) && !(board.playerScoreBoard.includes(1)) && (board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(9)))
          {
              this.placeOpp.placePlayer(1, userPlayer);
              board.addOpponentPoint("box1");
              return true;
          }
    };

    checkRLDiagonalCenter(board, userPlayer, boxNumeber)
    {
      if(typeof(boxNumeber) === "string")
        {
          boxNumeber = boxNumeber.slice(3);
        }
        if(board.opponentScoreBoard.includes(5))
          {
              // seventh box occupied so don't
              return false;
          }
          else if(!(board.opponentScoreBoard.includes(5)) && !(board.opponentScoreBoard.includes(3)) && !(board.opponentScoreBoard.includes(7)) && !(board.playerScoreBoard.includes(5)) && (board.playerScoreBoard.includes(3)) && (board.playerScoreBoard.includes(7)))
          {
              this.placeOpp.placePlayer(5, userPlayer);
              board.addOpponentPoint("box5");
              return true;
          } 
    };
}