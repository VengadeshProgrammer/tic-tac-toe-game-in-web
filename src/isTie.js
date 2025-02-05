class IsTie
{
    constructor()
    {
        this.boxs = [1,2,3,4,5,6,7,8,9];
        this.combo = 0;
    };
    check(board)
    {
        for(let i = 0; i < this.boxs.length; ++i)
        {
            if(board.getTotalScoreBoard().includes(this.boxs[i])) ++this.combo;
        };
        if(this.combo==9) 
        {
            console.log("Its A TIE!");
            return true;
        }
        else
        {
            return false;
        }
    };
};