class Board
{
    constructor()
    {
        this.playerScoreBoard = [];
        this.opponentScoreBoard = [];
        this.totalScoreBoard = [];
    };
    addPlayerPoint(boxNumber)
    {
        if(typeof(boxNumber) === "string"){
        boxNumber = boxNumber.slice(3);
        }
     if(this.playerScoreBoard.length == 0)
     {
        this.playerScoreBoard.push(Number(boxNumber));
     }
     else
     {
        //check existing data exists.
       this.duplicate = this.playerScoreBoard.find(val=>{
            return (val==boxNumber);
        });
        if(this.duplicate==null)
        {
            // add boxNumber to playerScoreBoard.
            if(boxNumber!=0){
            this.playerScoreBoard.push(Number(boxNumber));
            }
        };
     };
    //  console.log("playerScoreBoard:", this.playerScoreBoard);
    };
    addOpponentPoint(boxNumber)
    {
        if(typeof(boxNumber) === "string"){
        boxNumber = boxNumber.slice(3);
        }
     if(this.opponentScoreBoard.length == 0)
     {
        this.opponentScoreBoard.push(Number(boxNumber));
     }
     else
     {
        //check existing data exists.
       this.duplicate = this.opponentScoreBoard.find(val=>{
            return (val==boxNumber);
        });
        if(this.duplicate==null)
        {
            // add boxNumber to opponentScoreBoard.
            if(boxNumber!=0){
            this.opponentScoreBoard.push(Number(boxNumber));
            }
        };
     };
    //  console.log("opponentScoreBoard:", this.opponentScoreBoard);
    };
    getPlayerPoints()
    {
        return this.playerScoreBoard;
    };
    getOpponentPoints()
    {
        return this.opponentScoreBoard;
    };
    getTotalScoreBoard()
    {
        this.totalScoreBoard = [...this.getOpponentPoints(), ...this.getPlayerPoints()];
        return this.totalScoreBoard;
    }
};