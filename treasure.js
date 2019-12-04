
// Hello! This is a generative art project by https://artsable.com/Rhys
// I'd recomend starting at the 'setup' function.
// Keep in mind this isn't really made to be read by anyone other than myself.

// Please reference or message me if you intend to use this for something other than inspiration/learning.
// I hope you enjoy it.

// Artsable workspace: https://artsable.com/workspace/5de82cbc9ef5ad001fcdd8f9

function getUrlVars() {
  var vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1){
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

var seed = getUrlParam('seed', Math.floor(Math.random() * 100000));
var newPageTitle = 'Treasure - ' + seed;
history.pushState({
  seed: seed
}, newPageTitle, '?seed=' + seed);

var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

// Random seed code.
!function(a,b){var l,c=eval("this"),d=256,g="random",h=b.pow(d,6),i=b.pow(2,52),j=2*i,k=d-1;function m(r,t,e){var u=[],f=q(function n(r,t){var e,o=[],i=typeof r;if(t&&"object"==i)for(e in r)try{o.push(n(r[e],t-1))}catch(n){}return o.length?o:"string"==i?r:r+"\0"}((t=1==t?{entropy:!0}:t||{}).entropy?[r,s(a)]:null==r?function(){try{var n;return l&&(n=l.randomBytes)?n=n(d):(n=new Uint8Array(d),(c.crypto||c.msCrypto).getRandomValues(n)),s(n)}catch(n){var r=c.navigator,t=r&&r.plugins;return[+new Date,c,t,c.screen,s(a)]}}():r,3),u),p=new n(u),m=function(){for(var n=p.g(6),r=h,t=0;n<i;)n=(n+t)*d,r*=d,t=p.g(1);for(;j<=n;)n/=2,r/=2,t>>>=1;return(n+t)/r};return m.int32=function(){return 0|p.g(4)},m.quick=function(){return p.g(4)/4294967296},m.double=m,q(s(p.S),a),(t.pass||e||function(n,r,t,e){return e&&(e.S&&o(e,p),n.state=function(){return o(p,{})}),t?(b[g]=n,r):n})(m,f,"global"in t?t.global:this==b,t.state)}function n(n){var r,t=n.length,u=this,e=0,o=u.i=u.j=0,i=u.S=[];for(t||(n=[t++]);e<d;)i[e]=e++;for(e=0;e<d;e++)i[e]=i[o=k&o+n[e%t]+(r=i[e])],i[o]=r;(u.g=function(n){for(var r,t=0,e=u.i,o=u.j,i=u.S;n--;)r=i[e=k&e+1],t=t*d+i[k&(i[e]=i[o=k&o+r])+(i[o]=r)];return u.i=e,u.j=o,t})(d)}function o(n,r){return r.i=n.i,r.j=n.j,r.S=n.S.slice(),r}function q(n,r){for(var t,e=n+"",o=0;o<e.length;)r[k&o]=k&(t^=19*r[k&o])+e.charCodeAt(o++);return s(r)}function s(n){return String.fromCharCode.apply(0,n)}if(q(b.random(),a),"object"==typeof module&&module.exports){module.exports=m;try{l=require("crypto")}catch(n){}}else"function"==typeof define&&define.amd?define(function(){return m}):b["seed"+g]=m}([],Math);

Math.seedrandom(String(seed));

// Colors from:
// https://github.com/Jam3/nice-color-palettes
var hundredColors = [["#112", "#fafafa"],["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"],["#ecd078","#d95b43","#c02942","#542437","#53777a"],["#556270","#4ecdc4","#c7f464","#ff6b6b","#c44d58"],["#774f38","#e08e79","#f1d4af","#ece5ce","#c5e0dc"],["#e8ddcb","#cdb380","#036564","#033649","#031634"],["#490a3d","#bd1550","#e97f02","#f8ca00","#8a9b0f"],["#594f4f","#547980","#45ada8","#9de0ad","#e5fcc2"],["#00a0b0","#6a4a3c","#cc333f","#eb6841","#edc951"],["#e94e77","#d68189","#c6a49a","#c6e5d9","#f4ead5"],["#3fb8af","#7fc7af","#dad8a7","#ff9e9d","#ff3d7f"],["#d9ceb2","#948c75","#d5ded9","#7a6a53","#99b2b7"],["#ffffff","#cbe86b","#f2e9e1","#1c140d","#cbe86b"],["#efffcd","#dce9be","#555152","#2e2633","#99173c"],["#343838","#005f6b","#008c9e","#00b4cc","#00dffc"],["#413e4a","#73626e","#b38184","#f0b49e","#f7e4be"],["#ff4e50","#fc913a","#f9d423","#ede574","#e1f5c4"],["#99b898","#fecea8","#ff847c","#e84a5f","#2a363b"],["#655643","#80bca3","#f6f7bd","#e6ac27","#bf4d28"],["#00a8c6","#40c0cb","#f9f2e7","#aee239","#8fbe00"],["#351330","#424254","#64908a","#e8caa4","#cc2a41"],["#554236","#f77825","#d3ce3d","#f1efa5","#60b99a"],["#5d4157","#838689","#a8caba","#cad7b2","#ebe3aa"],["#8c2318","#5e8c6a","#88a65e","#bfb35a","#f2c45a"],["#fad089","#ff9c5b","#f5634a","#ed303c","#3b8183"],["#ff4242","#f4fad2","#d4ee5e","#e1edb9","#f0f2eb"],["#f8b195","#f67280","#c06c84","#6c5b7b","#355c7d"],["#d1e751","#ffffff","#000000","#4dbce9","#26ade4"],["#1b676b","#519548","#88c425","#bef202","#eafde6"],["#5e412f","#fcebb6","#78c0a8","#f07818","#f0a830"],["#bcbdac","#cfbe27","#f27435","#f02475","#3b2d38"],["#452632","#91204d","#e4844a","#e8bf56","#e2f7ce"],["#eee6ab","#c5bc8e","#696758","#45484b","#36393b"],["#f0d8a8","#3d1c00","#86b8b1","#f2d694","#fa2a00"],["#2a044a","#0b2e59","#0d6759","#7ab317","#a0c55f"],["#f04155","#ff823a","#f2f26f","#fff7bd","#95cfb7"],["#b9d7d9","#668284","#2a2829","#493736","#7b3b3b"],["#bbbb88","#ccc68d","#eedd99","#eec290","#eeaa88"],["#b3cc57","#ecf081","#ffbe40","#ef746f","#ab3e5b"],["#a3a948","#edb92e","#f85931","#ce1836","#009989"],["#300030","#480048","#601848","#c04848","#f07241"],["#67917a","#170409","#b8af03","#ccbf82","#e33258"],["#aab3ab","#c4cbb7","#ebefc9","#eee0b7","#e8caaf"],["#e8d5b7","#0e2430","#fc3a51","#f5b349","#e8d5b9"],["#ab526b","#bca297","#c5ceae","#f0e2a4","#f4ebc3"],["#607848","#789048","#c0d860","#f0f0d8","#604848"],["#b6d8c0","#c8d9bf","#dadabd","#ecdbbc","#fedcba"],["#a8e6ce","#dcedc2","#ffd3b5","#ffaaa6","#ff8c94"],["#3e4147","#fffedf","#dfba69","#5a2e2e","#2a2c31"],["#fc354c","#29221f","#13747d","#0abfbc","#fcf7c5"],["#cc0c39","#e6781e","#c8cf02","#f8fcc1","#1693a7"],["#1c2130","#028f76","#b3e099","#ffeaad","#d14334"],["#a7c5bd","#e5ddcb","#eb7b59","#cf4647","#524656"],["#dad6ca","#1bb0ce","#4f8699","#6a5e72","#563444"],["#5c323e","#a82743","#e15e32","#c0d23e","#e5f04c"],["#edebe6","#d6e1c7","#94c7b6","#403b33","#d3643b"],["#fdf1cc","#c6d6b8","#987f69","#e3ad40","#fcd036"],["#230f2b","#f21d41","#ebebbc","#bce3c5","#82b3ae"],["#b9d3b0","#81bda4","#b28774","#f88f79","#f6aa93"],["#3a111c","#574951","#83988e","#bcdea5","#e6f9bc"],["#5e3929","#cd8c52","#b7d1a3","#dee8be","#fcf7d3"],["#1c0113","#6b0103","#a30006","#c21a01","#f03c02"],["#000000","#9f111b","#b11623","#292c37","#cccccc"],["#382f32","#ffeaf2","#fcd9e5","#fbc5d8","#f1396d"],["#e3dfba","#c8d6bf","#93ccc6","#6cbdb5","#1a1f1e"],["#f6f6f6","#e8e8e8","#333333","#990100","#b90504"],["#1b325f","#9cc4e4","#e9f2f9","#3a89c9","#f26c4f"],["#a1dbb2","#fee5ad","#faca66","#f7a541","#f45d4c"],["#c1b398","#605951","#fbeec2","#61a6ab","#accec0"],["#5e9fa3","#dcd1b4","#fab87f","#f87e7b","#b05574"],["#951f2b","#f5f4d7","#e0dfb1","#a5a36c","#535233"],["#8dccad","#988864","#fea6a2","#f9d6ac","#ffe9af"],["#2d2d29","#215a6d","#3ca2a2","#92c7a3","#dfece6"],["#413d3d","#040004","#c8ff00","#fa023c","#4b000f"],["#eff3cd","#b2d5ba","#61ada0","#248f8d","#605063"],["#ffefd3","#fffee4","#d0ecea","#9fd6d2","#8b7a5e"],["#cfffdd","#b4dec1","#5c5863","#a85163","#ff1f4c"],["#9dc9ac","#fffec7","#f56218","#ff9d2e","#919167"],["#4e395d","#827085","#8ebe94","#ccfc8e","#dc5b3e"],["#a8a7a7","#cc527a","#e8175d","#474747","#363636"],["#f8edd1","#d88a8a","#474843","#9d9d93","#c5cfc6"],["#046d8b","#309292","#2fb8ac","#93a42a","#ecbe13"],["#f38a8a","#55443d","#a0cab5","#cde9ca","#f1edd0"],["#a70267","#f10c49","#fb6b41","#f6d86b","#339194"],["#ff003c","#ff8a00","#fabe28","#88c100","#00c176"],["#ffedbf","#f7803c","#f54828","#2e0d23","#f8e4c1"],["#4e4d4a","#353432","#94ba65","#2790b0","#2b4e72"],["#0ca5b0","#4e3f30","#fefeeb","#f8f4e4","#a5b3aa"],["#4d3b3b","#de6262","#ffb88c","#ffd0b3","#f5e0d3"],["#fffbb7","#a6f6af","#66b6ab","#5b7c8d","#4f2958"],["#edf6ee","#d1c089","#b3204d","#412e28","#151101"],["#9d7e79","#ccac95","#9a947c","#748b83","#5b756c"],["#fcfef5","#e9ffe1","#cdcfb7","#d6e6c3","#fafbe3"],["#9cddc8","#bfd8ad","#ddd9ab","#f7af63","#633d2e"],["#30261c","#403831","#36544f","#1f5f61","#0b8185"],["#aaff00","#ffaa00","#ff00aa","#aa00ff","#00aaff"],["#d1313d","#e5625c","#f9bf76","#8eb2c5","#615375"],["#ffe181","#eee9e5","#fad3b2","#ffba7f","#ff9c97"],["#73c8a9","#dee1b6","#e1b866","#bd5532","#373b44"],["#805841","#dcf7f3","#fffcdd","#ffd8d8","#f5a2a2"]];;
var palette;
var backgroundGroundColorKey;
var backgroundStroke;
var baseStrokeKey;
var baseStroke;

var newColorEveryLevel;
var levelColors;
var strokeTheShapes;

var maxLevel;
var children;
var shapeSize;
var distanceTravelMax;
var zIncrease;
var randomYRotation = 0;
var randomXRotation = 0;


var hasWind;
var theEnvironmentDensity;

var envXRotate = 0;
var envYRotate = 0;
var envZRotate = 0;

var rotateWithSin;

var baseShape;
// 0 is sphere
// 1 is box
// 2 is torus

var torusBuild;
var torusBuildReverse;
var torusXSize;
var torusTubeRadiusMultiplier;

var baseZBump = 0;
var thelights = [];
var ambientIntensity = 125;
var zPos = 0;
var useOtherPal;

function earthing(level, zBump) {
  if (level > maxLevel) {
    return;
  }
  
  for (var i = 0; i < children; i++) {
    push();
    var newnewBump = (i / children) * Math.PI * 2;
    var newZBump = zBump + (newnewBump);
    rotateZ(newnewBump);
    if (randomYRotation) {
      rotateY(randomYRotation);
    }

    if (randomXRotation) {
      rotateX(randomXRotation);
    }
    
    var rotateExtra = rotateWithSin ? Math.abs(Math.sin(frameCount * 0.01)) : 1;
    if (envXRotate !== 0) {
      rotateX(rotateExtra * frameCount * envXRotate * ((level / 4) + 1));
    }
    if (envYRotate !== 0) {
      rotateY(rotateExtra * frameCount * envYRotate * ((level / 4) + 1));
    }
    if (envZRotate !== 0) {
      rotateZ(rotateExtra * frameCount * envZRotate * ((level / 4) + 1));
    }

    translate(distanceTravelMax * (1 - (level / (maxLevel + 1))), distanceTravelMax * (1 - (level / (maxLevel + 1))), zIncrease);
    
    if (hasWind) {
      var inTheUniverse = noise(newZBump * theEnvironmentDensity);
      translate(0, 0, inTheUniverse * newZBump);
    }
    
    if (newColorEveryLevel) {
      // Try this outside too.
      if (strokeTheShapes) {
        stroke(levelColors[level]);
        noFill();
      } else {
        fill(levelColors[level]);
        noStroke();
      }
    }
    
    if (baseShape === 0) {
      box(shapeSize * (1 - (level / (maxLevel + 1))));
    } else if (baseShape === 1) {
      sphere(shapeSize * (1 - (level / (maxLevel + 1))));
    } else if (baseShape === 2) {
      var torusInnerRadius = shapeSize * (1 - (level / (maxLevel + 1)));
      var torusTubeRadius = shapeSize * (1 - (level / (maxLevel + 1))) * (torusTubeRadiusMultiplier);
      
      if (torusBuild) {
        torus(torusInnerRadius, torusTubeRadius, torusBuildReverse ? 3 + ((maxLevel + 1) - (level)) : (level + 3), 16);
      } else {
        torus(torusInnerRadius, torusTubeRadius, torusXSize, 16);
      }
    }

    earthing(level + 1);
    pop();
  }
}

// This function resets and sets up a new world.
function unearthing() {
  document.getElementById('seed').innerHTML = 'seed: ' + seed;

  palette = hundredColors[Math.floor(hundredColors.length * Math.random())];
  backgroundGroundColorKey = Math.floor(Math.random() * palette.length);
  backgroundStroke = palette[backgroundGroundColorKey];
  baseStrokeKey = Math.floor(1 + backgroundGroundColorKey + (Math.random() * palette.length)) % palette.length;
  baseStroke = palette[baseStrokeKey];

  newColorEveryLevel = Math.random() > 0.6;
  levelColors = [];
  strokeTheShapes = Math.random() > 0.75;
  
  maxLevel = 1 + Math.floor(Math.random() * 8);
  children = 2 + Math.floor(Math.random() * (8 - maxLevel));
  if (maxLevel > 4 && children > 4) {
    if (Math.random() > 0.5) {
      maxLevel = Math.round(maxLevel / 2);
    } else {
      children = Math.round(children / 2);
    }
  }
  shapeSize = (canvasWidth / 120) + (Math.random() * (canvasWidth / 40));
  distanceTravelMax = (shapeSize * 2) + (Math.random() * shapeSize * 20);
  zIncrease = Math.random() > 0.5 ? Math.random() * distanceTravelMax : 0;
  randomYRotation = Math.random() > 0.6 ? Math.random() * Math.PI * 2 : 0;
  randomXRotation = Math.random() > 0.6 ? Math.random() * Math.PI * 2 : 0;
  
  hasWind = false;
  theEnvironmentDensity = 0.0003 + (Math.random() * 0.002);  

  envXRotate = 0;
  envYRotate = 0;
  envZRotate = 0;

  if (Math.random() > 0.9) {
    envXRotate = Math.random() * 0.02;
    envYRotate = Math.random() * 0.02;
    envZRotate = Math.random() * 0.02;
  } else if (Math.random() > 0.9) {
    envXRotate = Math.random() * 0.02;
    envYRotate = Math.random() * 0.02;
  } else if (Math.random() > 0.9) {
    envXRotate = Math.random() * 0.02;
  } else if (Math.random() > 0.9) {
    envYRotate = Math.random() * 0.02;
  } else {
    envZRotate = Math.random() * 0.02;
  }
  
  envXRotate = envXRotate * (Math.random() > 0.5 ? 1 : -1);
  envYRotate = envYRotate * (Math.random() > 0.5 ? 1 : -1);
  envZRotate = envZRotate * (Math.random() > 0.5 ? 1 : -1);

  rotateWithSin = false;

  baseShape = Math.floor(Math.random() * 3);
  // 0 is sphere
  // 1 is box
  // 2 is torus

  torusBuild = Math.random() > 0.8;
  torusBuildReverse = Math.random() > 0.5;
  torusXSize = 2 + Math.floor(Math.random() * 20);
  torusTubeRadiusMultiplier = 0.1 + (0.9 * Math.random());

  coneDetailX = Math.random() > 0.5 ? 1 : (1 + Math.floor(Math.random() * 20))
  coneWidthMultiplier = 0.5 + (3.5 * Math.random());

  baseZBump = 0;
  thelights = [];
  zPos = 0;

  useOtherPal = Math.random() > 0.9;

  noStroke();
  
  ambientIntensity = Math.random() * 255;
  
  if (newColorEveryLevel) {
    for (var i = 0; i < maxLevel + 1; i++) {
      var levelStrokeKey = Math.floor(1 + backgroundGroundColorKey + (Math.random() * palette.length)) % palette.length;
  
      levelColors.push(color(palette[levelStrokeKey]));
    }
  }
  
  if (Math.random() > 0.3) {
    directionalLight(250, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 250, canvasWidth, canvasHeight, 250);
  } else {
    var amountOfLights = 1 + Math.floor(Math.random() * 4);
    for (var i = 0; i < amountOfLights; i++) {
      var lightColorKey = Math.floor(1 + backgroundGroundColorKey + (Math.random() * palette.length)) % palette.length;
      var lightColor = color(palette[lightColorKey]);
      
      var lightX = -(canvasWidth / 2) + (Math.random() * canvasWidth * 1.5);
      var lightY = -(canvasHeight / 2) + (Math.random() * canvasHeight * 1.5);
      
      var isDirectional = Math.random() > 0.5;
      
      thelights.push({
        lightColor: lightColor,
        x: lightX,
        y: lightY,
        z: isDirectional ? Math.random() * 100 : Math.random() * 500,
        directional: isDirectional
      });
    }
  }
  
  if (Math.random() > 0.25) {
    baseZBump = Math.random() * Math.PI * 2;
  }
  
  if (strokeTheShapes) {
    strokeWeight(canvasWidth / (200 + (Math.random() * 1200)));
  }
}

window.onpopstate = function(event) {
  seed = event.state.seed;
  Math.seedrandom(String(seed));
  unearthing();
}

function touchStarted() {
  seed = Math.floor(Math.random() * 100000);
  Math.seedrandom(String(seed));

  var newPageTitle = 'Treasure - ' + seed;
  history.pushState({
    seed: seed
  }, newPageTitle, '?seed=' + seed);

  unearthing();
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);

  unearthing();

  // After this function is run, p5js repeatedly calls
  // the 'draw' function, which runs a frame of the animation.
}

function draw() {
  push();
  
  if (useOtherPal) {
    background('#EEEEFB');
    fill(255);
    noStroke();
  } else {
    background(backgroundStroke);
    if (strokeTheShapes) {
      stroke(baseStroke);
      noFill();
    } else {
      fill(baseStroke);
      noStroke();
    }
  }
  
  ambientLight(ambientIntensity);
  
  if (thelights.length === 0) {
    directionalLight(250, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 250, canvasWidth, canvasHeight, 250);
  } else {
    for (var i = 0; i < thelights.length; i++) {
      var thelight = thelights[i];
      
      if (thelight.directional) {
        directionalLight(thelight.lightColor, thelight.x, thelight.y, thelight.z);
      } else {
        pointLight(thelight.lightColor, thelight.x, thelight.y, thelight.z);
      }
    }
  }
  
  if (baseZBump > 0) {
    rotateZ(baseZBump);
  }
  
  translate(0, 0, zPos + (-distanceTravelMax * 10));
  earthing(0, baseZBump);
  pop();
}
