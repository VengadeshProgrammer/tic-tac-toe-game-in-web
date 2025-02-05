class PlaceOpponent
{
    constructor()
    {};
    placePlayer(boxNumber, userPlayer)
    {
        if(userPlayer=="/assets/cross.png")
        {
            this.oppPlayer = "/assets/o.png";
        }
        else
        {
            this.oppPlayer = "/assets/cross.png";
        }
        this.player = document.querySelector(`#box${boxNumber} img[src="${this.oppPlayer}"]`);
        if(this.player.classList.contains("hidden"))
        {
            this.player.classList.remove("hidden");
        }
    };
};