//Lets Start.
//define all variables
var path,
  boy,
  cash,
  diamonds,
  ruby,
  jwellery,
  e,
  eImg,
  d,
  dImg,
  f,
  fImg,
  g,
  gImg,
  h,
  hImg,
  i,
  iImg,
  j,
  jImg,
  k,
  kImg,
  l,
  lImg,
  m,
  mImg,
  n,
  nImg,
  o,
  oImg,
  p,
  pImg,
  q,
  qImg,
  r,
  rImg,
  s,
  sImg,
  t,
  tImg,
  u,
  uImg,
  v,
  vImg,
  w,
  wImg,
  x,
  xImg,
  y,
  yImg,
  z,
  zImg,
  sword,
  end;
var pathImg,
  boyImg,
  cashImg,
  diamondsImg,
  jwelleryImg,
  swordImg,
  rubyImg,
  endImg,
  stop,
  ready;

var aSound, bSound, cSound, dSound, eSound,fSound,gSound,hSound,iSound,jSound,kSound,lSound,mSound,nSound,oSound,pSound,qSound,rSound,sSound,tSound,uSound,vSound,wSound,xSound,ySound,zSound;
var treasureCollection = 0;
var cashG, diamondsG, jwelleryG, RubyG, swordGroup;

var START = 0;
var PLAY = 1;
var OVER = 2;
var gameState = START;

function preload() {
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png", "runner2.png");
  cashImg = loadImage("A.png");
  diamondsImg = loadImage("B.png");
  jwelleryImg = loadImage("C.png");
  rubyImg = loadImage("D.png");
  dImg = loadImage("D.png");
  eImg = loadImage("E.png");
  fImg = loadImage("F.png");
  gImg = loadImage("G.png");
  hImg = loadImage("H.png");
  iImg = loadImage("I.png");
  jImg = loadImage("J.png");
  kImg = loadImage("K.png");
  lImg = loadImage("L.png");
  mImg = loadImage("M.png");
  nImg = loadImage("N.png");
  oImg = loadImage("O.png");
  pImg = loadImage("P.png");
  qImg = loadImage("Q.png");
  rImg = loadImage("R.png");
  sImg = loadImage("S.png");
  tImg = loadImage("T.png");
  uImg = loadImage("U.png");
  vImg = loadImage("V.png");
  wImg = loadImage("W.png");
  xImg = loadImage("X.png");
  yImg = loadImage("Y.png");
  zImg = loadImage("Z.png");
  aSound = loadSound("A1.mp3");
  bSound = loadSound("B1.mp3");
  cSound = loadSound("C1.mp3");
  dSound = loadSound("D1.mp3");
  eSound = loadSound("E1.mp3");
  fSound = loadSound("F1.mp3");
  gSound = loadSound("G1.mp3")
  hSound = loadSound("H1.mp3");
  iSound = loadSound("I1.mp3");
  jSound = loadSound("J.mp3");
  kSound = loadSound("K.mp3");
  lSound = loadSound("L.mp3");
  mSound = loadSound("M.mp3");
  nSound = loadSound("N.mp3");
  oSound = loadSound("O.mp3");
  qSound = loadSound("Q.mp3");
  pSound = loadSound("P.mp3");
  rSound = loadSound("R.mp3");
  sSound = loadSound("S.mp3");
  tSound = loadSound("T.mp3");
  uSound = loadSound("U.mp3");
  vSound = loadSound("V.mp3");
  wSound = loadSound("W.mp3");
  xSound = loadSound("X.mp3");
  ySound = loadSound("Y.mp3");
  zSound = loadSound("Z.mp3");
  swordImg = loadImage("sword.png");
  endImg = loadImage("gameOver.png");
  stop = loadAnimation("runner1.png");
  ready = loadAnimation("runner2.png");
}

function setup() {
  createCanvas(800, 820);

  // Moving background
  path = createSprite(300, -20);
  path.addImage(pathImg);
  path.velocityY = 2;

  //creating moving boy
  boy = createSprite(100, 460, 20, 20);
  boy.addAnimation("SweenyRunning", boyImg);
  boy.scale = 0.08;
  //boy.debug = true;
  boy.setCollider("circle", 0, 0, 610);

  //creating all items Groups
  cashG = new Group();
  diamondsG = new Group();
  jwelleryG = new Group();
  rubyG = new Group();
  eG = new Group();
  dG = new Group();
  fG = new Group();
  gG = new Group();
  hG = new Group();
  iG = new Group();
  jG = new Group();
  kG = new Group();
  lG = new Group();
  mG = new Group();
  nG = new Group();
  oG = new Group();
  pG = new Group();
  qG = new Group();
  rG = new Group();
  sG = new Group();
  tG = new Group();
  uG = new Group();
  vG = new Group();
  wG = new Group();
  xG = new Group();
  yG = new Group();
  zG = new Group();
  swordGroup = new Group();
}

function draw() {
  if (gameState === START) {
    background("red");
    path.velocityY = 0;
  }

  if (keyDown("space")) {
    gameState = PLAY;
  }

  if (gameState === PLAY) {
    path.velocityY = 2;
    boy.x = World.mouseX;

    edges = createEdgeSprites();
    boy.collide(edges);

    //code to reset the background
    if (path.y > 520) {
      path.y = height / 2;
    }

    createCash();
    createDiamonds();
    createJwellery();
    createE();
    createD();
    createF();
    createG();
    createH();
    createI();
    createJ();
    createK();
    createL();
    createM();
    createN();
    createO();
    createP();
    createQ();
    createR();
    createS();
    createT();
    createU();
    createV();
    createW();
    createX();
    createY();
    createZ();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      aSound.play()
      treasureCollection = treasureCollection + 100;
    }
    if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      bSound.play();
      treasureCollection = treasureCollection + 100;
    }
     
    if (jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      cSound.play()
      treasureCollection = treasureCollection + 100;
    }
  
    if (eG.isTouching(boy)) {
      eG.destroyEach();
      eSound.play()
      treasureCollection = treasureCollection + 100;
    }
  
    if (fG.isTouching(boy)) {
      fG.destroyEach();
      fSound.play()
      treasureCollection = treasureCollection + 100;
    }
  
    
    if (dG.isTouching(boy)) {
      dG.destroyEach();
      dSound.play()
      treasureCollection = treasureCollection + 100;
    }
  
    
    if (gG.isTouching(boy)) {
      gG.destroyEach();
      gSound.play()
      treasureCollection = treasureCollection + 100;
    }
  
    if (hG.isTouching(boy)) {
      hG.destroyEach();
      hSound.play();
      treasureCollection = treasureCollection + 100;
    }
  
    if (iG.isTouching(boy)) {
      iG.destroyEach();
      iSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (jG.isTouching(boy)) {
      jG.destroyEach();
      jSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (kG.isTouching(boy)) {
      kG.destroyEach();
      kSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (lG.isTouching(boy)) {
      lG.destroyEach();
      lSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (mG.isTouching(boy)) {
      mG.destroyEach();
      mSound.play();
      treasureCollection = treasureCollection + 100;
    }

    if (nG.isTouching(boy)) {
      nG.destroyEach();
      nSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (oG.isTouching(boy)) {
      oG.destroyEach();
      oSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (pG.isTouching(boy)) {
      pG.destroyEach();
      pSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (qG.isTouching(boy)) {
      qG.destroyEach();
      qSound.play();
      treasureCollection = treasureCollection + 100;
    }

    if (rG.isTouching(boy)) {
      rG.destroyEach();
      rSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (sG.isTouching(boy)) {
      sG.destroyEach();
      sSound.play();
      treasureCollection = treasureCollection + 100;
    }

    if (tG.isTouching(boy)) {
      tG.destroyEach();
      tSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (uG.isTouching(boy)) {
      uG.destroyEach();
      uSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (vG.isTouching(boy)) {
      vG.destroyEach();
      vSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (wG.isTouching(boy)) {
      wG.destroyEach();
      wSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (xG.isTouching(boy)) {
      xG.destroyEach();
      xSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (yG.isTouching(boy)) {
      yG.destroyEach();
      ySound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (zG.isTouching(boy)) {
      zG.destroyEach();
      zSound.play()
      treasureCollection = treasureCollection + 100;
    }

    if (boy.isTouching(swordGroup)) {
      gameState = OVER;
    }
  }

  if (gameState === OVER) {
    end = createSprite(300, 260);
    end.addImage(endImg);
    end.scale = 0.9;
    path.velocityY = 0;
    swordGroup.setVelocityYEach(0);
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    eG.destroyEach();
    dG.destroyEach();
    fG.destroyEach();
    gG.destroyEach();
    hG.destroyEach();
    iG.destroyEach();
    jG.destroyEach();
    kG.destroyEach();
    lG.destroyEach();
    mG.destroyEach();
    nG.destroyEach();
    oG.destroyEach();
    pG.destroyEach();
    qG.destroyEach();
    rG.destroyEach();
    sG.destroyEach();
    tG.destroyEach();
    uG.destroyEach();
    vG.destroyEach();
    wG.destroyEach();
    xG.destroyEach();
    yG.destroyEach();
    zG.destroyEach();
    boy.addAnimation("SweenyRunning", stop);
  }

  drawSprites();
  textSize(20);
  fill("white");
  text("Treasure : " + treasureCollection, 395, 30);
  if (gameState === START) {
    textSize(25);
    fill("white");
    text("Press 'space' To Start", 190, 220);
  }
}

function createCash() {
  if (World.frameCount % 100 == 0) {
    var cash = createSprite(3,1);
    cash.addImage(cashImg);
    cash.scale = 0.12;
    cash.velocityY = 3;
    cash.lifetime = 300;
    cashG.add(cash);
    //cash.debug = true;
    cash.setCollider("circle", 0, 0, 220);
  }
}

function createDiamonds() {
  if (World.frameCount % 220 == 0) {
    var diamonds = createSprite(200,17);
    diamonds.addImage(diamondsImg);
    diamonds.scale = 0.06;
    diamonds.velocityY = 3;
    diamonds.lifetime = 300;
    diamondsG.add(diamonds);
    //diamonds.debug = true;
    diamonds.setCollider("circle", 0, 0, 900);
  }
}

function createE() {
  if (World.frameCount % 220 == 0) {
    var e = createSprite(40,-15);
    e.addImage(eImg);
    e.scale = 0.1;
    e.velocityY = 3;
    e.lifetime = 300;
    eG.add(e);
    //diamonds.debug = true;
    e.setCollider("circle", 0, 0, 900);
  }
}

function createD() {
  if (World.frameCount % 220 == 0) {
    var d = createSprite(199, 120);
    d.addImage(dImg);
    d.scale = 0.1;
    d.velocityY = 3;
    d.lifetime = 300;
    dG.add(d);
    //diamonds.debug = true;
    d.setCollider("circle", 0, 0, 900);
  }
}

function createF() {
  if (World.frameCount % 220 == 0) {
    var f = createSprite(549,400);
    f.addImage(fImg);
    f.scale = 0.1;
    f.velocityY = 3;
    f.lifetime = 300;
    fG.add(f);
    //diamonds.debug = true;
    f.setCollider("circle", 0, 0, 900);
  }
}

function createH() {
  if (World.frameCount % 220 == 0) {
    var h = createSprite(400, 60);
    h.addImage(hImg);
    h.scale = 0.1;
    h.velocityY = 3;
    h.lifetime = 300;
    hG.add(h);
    //diamonds.debug = true;
    h.setCollider("circle", 0, 0, 900);
  }
}

function createG() {
  if (World.frameCount % 220 == 0) {
    var g = createSprite(310,169);
    g.addImage(gImg);
    g.scale = 0.1;
    g.velocityY = 3;
    g.lifetime = 300;
    gG.add(g);
    //diamonds.debug = true;
    g.setCollider("circle", 0, 0, 900);
  }
}

function createI() {
  if (World.frameCount % 220 == 0) {
    var i = createSprite(770,-60);
    i.addImage(iImg);
    i.scale = 0.1;
    i.velocityY = 3;
    i.lifetime = 300;
    iG.add(i);
    //diamonds.debug = true;
    i.setCollider("circle", 0, 0, 900);
  }
}

function createJ() {
  if (World.frameCount % 220 == 0) {
    var j = createSprite(520,-100);
    j.addImage(jImg);
    j.scale = 0.1;
    j.velocityY = 3;
    j.lifetime = 180;
    jG.add(j);
    //diamonds.debug = true;
    j.setCollider("circle", 0, 0, 900);
  }
}

function createK() {
  if (World.frameCount % 220 == 0) {
    var k = createSprite(740,-190);
    k.addImage(kImg);
    k.scale = 0.1;
    k.velocityY = 3;
    k.lifetime = 300;
    kG.add(k);
    //diamonds.debug = true;
    k.setCollider("circle", 0, 0, 900);
  }
}

function createL() {
  if (World.frameCount % 220 == 0) {
    var l = createSprite(344,359);
    l.addImage(lImg);
    l.scale = 0.1;
    l.velocityY = 3;
    l.lifetime = 300;
    lG.add(l);
    //diamonds.debug = true;
    l.setCollider("circle", 0, 0, 900);
  }
}

function createM() {
  if (World.frameCount % 220 == 0) {
    var m = createSprite(200,-300);
    m.addImage(mImg);
    m.scale = 0.1;
    m.velocityY = 3;
    m.lifetime = 300;
    mG.add(m);
    //diamonds.debug = true;
    m.setCollider("circle", 0, 0, 900);
  }
}

function createN() {
  if (World.frameCount % 220 == 0) {
    var n = createSprite(630,-95);
    n.addImage(nImg);
    n.scale = 0.1;
    n.velocityY = 3;
    n.lifetime = 300;
    nG.add(n);
    //diamonds.debug = true;
    n.setCollider("circle", 0, 0, 900);
  }
}

function createO() {
  if (World.frameCount % 220 == 0) {
    var o = createSprite(180,-401);
    o.addImage(oImg);
    o.scale = 0.1;
    o.velocityY = 3;
    o.lifetime = 300;
    oG.add(o);
    //diamonds.debug = true;
    o.setCollider("circle", 0, 0, 900);
  }
}

function createP() {
  if (World.frameCount % 220 == 0) {
    var p = createSprite(579,-219);
    p.addImage(pImg);
    p.scale = 0.1;
    p.velocityY = 3;
    p.lifetime = 300;
    pG.add(p);
    //diamonds.debug = true;
    p.setCollider("circle", 0, 0, 900);
  }
}

function createQ() {
  if (World.frameCount % 220 == 0) {
    var q = createSprite(180,-79);
    q.addImage(qImg);
    q.scale = 0.1;
    q.velocityY = 3;
    q.lifetime = 300;
    qG.add(q);
    //diamonds.debug = true;
    q.setCollider("circle", 0, 0, 900);
  }
}

function createR() {
  if (World.frameCount % 220 == 0) {
    var r = createSprite(496,-50);
    r.addImage(rImg);
    r.scale = 0.1;
    r.velocityY = 3;
    r.lifetime = 300;
    rG.add(r);
    //diamonds.debug = true;
    r.setCollider("circle", 0, 0, 900);
  }
}

function createS() {
  if (World.frameCount % 220 == 0) {
    var s = createSprite(28,-152);
    s.addImage(sImg);
    s.scale = 0.1;
    s.velocityY = 3;
    s.lifetime = 300;
    sG.add(s);
    //diamonds.debug = true;
    s.setCollider("circle", 0, 0, 900);
  }
}

function createT() {
  if (World.frameCount % 220 == 0) {
    var t = createSprite(386,107);
    t.addImage(tImg);
    t.scale = 0.1;
    t.velocityY = 3;
    t.lifetime = 300;
    tG.add(t);
    //diamonds.debug = true;
    t.setCollider("circle", 0, 0, 900);
  }
}

function createU() {
  if (World.frameCount % 220 == 0) {
    var u = createSprite(6,-64);
    u.addImage(uImg);
    u.scale = 0.1;
    u.velocityY = 3;
    u.lifetime = 300;
    uG.add(u);
    //diamonds.debug = true;
    u.setCollider("circle", 0, 0, 900);
  }
}

function createV() {
  if (World.frameCount % 220 == 0) {
    var v = createSprite(305,-131);
    v.addImage(vImg);
    v.scale = 0.1;
    v.velocityY = 3;
    v.lifetime = 300;
    vG.add(v);
    //diamonds.debug = true;
    v.setCollider("circle", 0, 0, 900);
  }
}

function createW() {
  if (World.frameCount % 220 == 0) {
    var w = createSprite(150,-27);
    w.addImage(wImg);
    w.scale = 0.1;
    w.velocityY = 3;
    w.lifetime = 300;
    wG.add(w);
    //diamonds.debug = true;
    w.setCollider("circle", 0, 0, 900);
  }
}

function createX() {
  if (World.frameCount % 220 == 0) {
    var x = createSprite(52,-97);
    x.addImage(xImg);
    x.scale = 0.1;
    x.velocityY = 3;
    x.lifetime = 300;
    xG.add(x);
    //diamonds.debug = true;
    x.setCollider("circle", 0, 0, 900);
  }
}

function createY() {
  if (World.frameCount % 220 == 0) {
    var y = createSprite(293,58);
    y.addImage(yImg);
    y.scale = 0.1;
    y.velocityY = 3;
    y.lifetime = 300;
    yG.add(y);
    //diamonds.debug = true;
    y.setCollider("circle", 0, 0, 900);
  }
}

function createZ() {
  if (World.frameCount % 220 == 0) {
    var z = createSprite(344,-38);
    z.addImage(zImg);
    z.scale = 0.1;
    z.velocityY = 3;
    z.lifetime = 300;
    zG.add(z);
    //diamonds.debug = true;
    z.setCollider("circle", 0, 0, 900);
  }
}

function createJwellery() {
  if (World.frameCount % 310 == 0) {
    var jwellery = createSprite(Math.round(random(50, 550), 40, 10, 10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale = 0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 200;
    jwelleryG.add(jwellery);
    //jwellery.debug = true;
    jwellery.setCollider("circle", 0, 0, 200);
  }
}

function createSword() {
  if (World.frameCount % 430 == 0) {
    var sword = createSprite(Math.round(random(50, 550), 40, 10, 10));
    sword.addImage(swordImg);
    sword.scale = 0.1;
    sword.velocityY = 3.5;
    swordGroup.add(sword);
    //sword.debug = true;
    sword.setCollider("circle", 0, 0, 300);
  }
}
//The End.
