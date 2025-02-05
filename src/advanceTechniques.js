class AdvanceTechniques
{
    constructor(placeOpp)
    {
        this.placeOpp = placeOpp;
    };
    moveOppPlayerIfPlayerUsingFormula1(board, userPlayer, boxNumeber)
    {
        if(board.playerScoreBoard.includes(1) && board.playerScoreBoard.includes(9)){
            if(!(board.opponentScoreBoard.includes(2))){
                this.placeOpp.placePlayer(2, userPlayer);
                board.addOpponentPoint("box2");
                return true;
            }
        }
        else
        {
            return false;
        }
    };
    moveOppPlayerIfPlayerUsingFormula2(board, userPlayer, boxNumeber)
    {
        if(board.playerScoreBoard.includes(7) && board.playerScoreBoard.includes(3)){
            if(!(board.opponentScoreBoard.includes(2))){
                this.placeOpp.placePlayer(2, userPlayer);
                board.addOpponentPoint("box2");
                return true;
            }
        }
        else
        {
            return false;
        }
    };
};