setcps(128/60/4)
// DARKER ACID VIBES with POLYRHYTHMIC MADNESS
$: s("[bd8]").scope()

duck("[1:2:3:1]").duckattack(.15).duckdepth(.9)

$: n(rand.range(-3,7).seg(32)).scale("f:dorian")
  .s("triangle").distort("[1.5,2,1.8]*2").lp(180).lpenv(slider(1.8,0,6))
  .lpq(8).orbit(1).delay(.25).dt(.2).dfb(.4)

$: n("[0 2 4 ~]*2 [~ 1 3 5]*2").scale("f4:dorian")
  .s("square").clip(.8)
  .hp(400).hpenv(2).gain(.6).pan(sine.range(-.7,.7))

$: stack(
  s("bd*2 ~ bd ~").gain(.8),
  s("~ cp ~ cp").delay(.1).dt(.3),
  s("hh*8").gain(rand.range(.2,.5).seg(16)).hpf(8000),
  s("~ ~ oh ~").gain(.7).pan(.3)
).slow(2)

$: s("pad*4").n(rand.range(0,8).seg(16))
  .gain(sine.range(.1,.3)).room(.8).delay(.5).dt(.7).dfb(.3)
  .lp(2000).orbit(3)

all(x=>x.room(.2))