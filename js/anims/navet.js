var center = view.center;
var width = view.size.width;
var height = view.size.height;

function Navet(_destinationX, _destinationY, _position){
  this.destinationX = _destinationX;
  this.destinationY = _destinationY;
  this.position = _position;
  this.Color = "#f2b7d1";
  var chicoreeTarget = [];
  var chicoreeBalls = [];

  var pathData = "m 35.493787,129.19534 -0.009,0 c -5.25371,-5.67178 -8.72831,-15.44061 -5.20725,-23.15163 l 0.22761,-0.39019 c 5.10971,-7.139661 5.56029,-19.054571 1.00801,-26.565841 l -0.19046,-0.39949 c -1.9231,-5.22584 -0.89652,-11.80343 2.74996,-17.60991 3.64647,-5.82507 9.15567,-9.61554 14.71596,-10.16367 l 0.45523,0 c 8.70044,0.82684 19.25431,-4.74274 23.5093,-12.42124 l 0.25549,-0.371616 c 3.30273,-3.92983 8.78405,-6.271006 15.04112,-6.415007 7.36727,-0.181162 14.153893,2.666339 17.735343,7.655273 l 0.22761,0.3902 c 0.88723,1.93239 2.1693,3.79976 3.79047,5.56029 4.96107,5.35126 12.30047,8.72831 18.70618,8.60289 l 0.44594,0.0372 c 3.65577,0.63639 7.15824,2.66634 10.11722,5.85294 5.25371,5.67177 8.72832,15.44061 5.20726,23.16091 l -0.22761,0.38091 c -5.10971,7.13965 -5.56029,19.063861 -1.00801,26.565841 l 0.19975,0.40877 c 1.91381,5.21655 0.88723,11.80343 -2.75925,17.60992 -3.65576,5.81578 -9.15567,9.61554 -14.71596,10.16367 l -0.44594,0 c -8.71902,-0.82684 -19.25895,4.74274 -23.51395,12.42124 l -0.25548,0.36233 c -3.302733,3.93912 -8.784063,6.28029 -15.041133,6.42429 -7.35798,0.18116 -14.16318,-2.66634 -17.73533,-7.66456 l -0.22762,-0.38091 c -0.88723,-1.9324 -2.16001,-3.79976 -3.79047,-5.56029 -4.95177,-5.35126 -12.30046,-8.72831 -18.70618,-8.60289 l -0.44594,-0.0372 c -3.66041,-0.64568 -7.15359,-2.66634 -10.11258,-5.86223 z m -1.06839,-21.03806 c -2.19717,5.10041 -0.288,12.73711 4.47332,17.88398 l 0,0 c 2.20646,2.37833 4.7288,3.90195 7.30224,4.39899 7.61346,-0.065 16.20242,3.88338 21.9671,10.08935 1.90453,2.05782 3.40957,4.26429 4.50119,6.5683 2.67563,3.56751 8.04547,5.69965 13.73582,5.56029 4.76132,-0.10684 9.02561,-1.83485 11.45969,-4.60803 5.179383,-9.1185 17.238303,-15.47777 27.662103,-14.60912 4.0088,-0.47381 8.22199,-3.52105 11.02304,-7.98508 2.83821,-4.51048 3.73008,-9.48083 2.39691,-13.33634 -5.34196,-9.03489 -4.82635,-22.663881 1.18917,-31.271421 2.19718,-5.09112 0.2973,-12.72782 -4.47331,-17.87468 -2.20647,-2.37834 -4.72881,-3.90196 -7.30224,-4.399 -7.61347,0.0558 -16.20242,-3.88337 -21.96711,-10.09864 -1.89523,-2.04853 -3.40956,-4.25499 -4.50118,-6.55901 -2.712793,-3.609308 -8.054763,-5.708934 -13.735833,-5.569578 -4.76132,0.11613 -9.0256,1.839495 -11.45968,4.608028 -5.17939,9.1278 -17.2383,15.48706 -27.65282,14.60912 -4.01809,0.4831 -8.22663,3.52106 -11.03232,7.98508 -2.83821,4.51977 -3.73009,9.49012 -2.39692,13.34563 5.34197,9.03489 4.82635,22.65923 -1.18917,31.262131 z";

  this.myNavet = new Path(pathData);
  this.myNavet.fillColor = this.Color;

  this.myNavet.scale(0.7);
  this.myNavet.position = this.position;

  // for(var i=0; i<4; i++){
  //   var myCircle = new Path.Circle(new Point(100, 70), 50 *i);
  //   chicoreeTarget.push(myCircle);
  // }

  // for(var i=0; i<8; i++){
  //   var myPoint = new Path.Circle(new Point(100, 70), 5);
  //   myPoint.position.x+= Math.random() * 80 - 30;
  //   myPoint.position.y+= Math.random() * 80 - 30 ;
  //   var radius = Math.random() * 0.6 + 0.3;
  //   chicoreeBalls.push(myPoint);
  //   myPoint.scale(radius);
  // }

  // this.chicoree = new CompoundPath({
  //   children: chicoreeTarget,
  //   strokeColor: this.Color,
  //   strokeWidth: 3,
  //   strokeCap: 'round',
  // });

  // this.chicoreeBalls = new CompoundPath({
  //   children: chicoreeBalls,
  //   fillColor: this.Color,
  // });

  // this.item = new Group({
  //   children: [this.chicoree, this.chicoreeBalls],
  //   transformContent: false,
  //   position: this.position
  // });

  // this.chicoree.scale(0.2);


}

Navet.prototype = {
  move: function(event, i){
    this.position.x +=this.destinationX;
    this.position.y +=this.destinationY;
    if(this.position.x > width || this.position.x < 0){
      this.destinationX = -this.destinationX;
    }
    if(this.position.y > height || this.position.y < 0){
      this.destinationY = -this.destinationY;
    }
    this.item.position = this.position;
  },
  zumba: function(event, i){
    for(var a=0; a<this.chicoreeBalls.children.length; a++){
      var itemXPos = this.chicoreeBalls.children[a].position.x;
      var itemYPos = this.chicoreeBalls.children[a].position.y;
      var itemXSpeed = Math.random() * 0.3 - 0.15;
      var itemYSpeed = Math.random() * 0.3 - 0.15;   
      this.chicoreeBalls.children[a].position.x+=itemXSpeed;
      this.chicoreeBalls.children[a].position.y+=itemYSpeed;
    }
  }
}

//--------------------- main ---------------------

var allNavet = [];
var number = 15;

for (var i = 0; i < number; i++) {
  var destinationX = Math.random() * 1 - 0.5;
  var destinationY = Math.random() * 1 - 0.5;
  var position = Point.random() * view.size;
  allNavet.push(new Navet(destinationX, destinationY, position));
}

function onFrame(event) {
  for (var i = 0, l = allNavet.length; i < l; i++) {
    // allNavet[i].move(event, i);
    // allNavet[i].zumba(event, i);
  }
}
