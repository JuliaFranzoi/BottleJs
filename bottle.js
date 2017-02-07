var bottle = {
  volume: 0,
  
  fill:function(){
    this.volume = 100;
  },

  drink:function(){
    if (this.volume === 0){
      return "can't drink!"
    }
    else
      {
        this.volume -= 10
      }
  },
  
  empty:function(){
    this.volume = 0;
  },


};

module.exports = bottle;