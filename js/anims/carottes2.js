var center = view.center;
var width = view.size.width;
var height = view.size.height;

// Cette fonction permet de créer un objet carotte qu'on pourra ensuite ajouter dans la scène
function Carotte(_radius, _destination, _position){
  this.radius = _radius;
  this.destination = _destination;
  this.position = _position;

  // CREATE THE SHAPE
  // Ici je définis la forme de mes carottes, un rectangle 
  this.path = new Path.Rectangle(new Point(50, 50), new Point(250, 100));
  // ici je définis la couleur
  this.path.fillColor = '#e94e1b';
  this.path.position = this.position;
  // ici je définis leurs taille en %
  this.path.scale(0.8);
  // ici je définis leur opacity - 1 pour totalement opaque et 0 pour totalement transparent
  this.path.opacity = 0.8;
}

// Et là j'ajoute des actions à mon objet carotte
Carotte.prototype = {
// Ici j'ajoute la fonction "bouger de manière aléatoire dans la scène"
  move: function(event, i){
    var vector = this.destination - this.position;
    this.position += vector /100;
    if (vector.length < 5){
      this.destination = Point.random() * view.size;
    }
    var delta = (this.destination - this.position) / (i+100);
    this.path.rotate(Math.sin((event.count + i) / 50 + (i*2)) * 2);
    if (delta.length > 0.1){
      this.position += delta;
    }
    this.path.position = this.position;
  }
}

//--------------------- main ---------------------

//  maintenant je vais ajouter mes carottes dans la scène
var carottes = [];
// ici je peux changer le nombre de carottes que je veux
var number = 5;

for (var i = 0; i < number; i++) {
  // Je définis un point de destination aléatoire pour leur mouvement
  var destination = Point.random() * view.size;
  //  je définis une position de départ aléatoire
  var position = Point.random() * view.size;
  // je définis un radius aléatoire c'est à dire un diamètre mais ici ça ne sert à rien
  var radius = Math.random() * 3 + 1;
  // je crée mes carottes
  carottes.push(new Carotte(radius, destination, position));
}

//  j'anime mes carottes avec la fonction move que j'ai crée avant
function onFrame(event) {
  for (var i = 0, l = carottes.length; i < l; i++) {
    carottes[i].move(event, i);
  }
}
