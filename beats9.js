setcps(120/60/4)
// IDM GLITCH EXPERIMENT
$: s("[bd2]").scope()

duck("[2:3:1:3]").duckattack(.2).duckdepth(.7)

$: n("<0 3 5 2>*2").scale("bb:minor")
  .s("sawtooth").lpf(400).distort(1.2)
  .chop(8).rev().delay(.125).dt(.3).dfb(.4)
  .gain(.6).orbit(1)

$: n("[0 ~ 2 ~]*4").scale("bb4:minor")
  .s("square").clip(.7)
  .hp(200).gain(.5).pan(sine.range(-.3,.3))

$: stack(
  s("bd ~ bd ~").gain(.9),
  s("~ ~ sd:4 ~").room(.2).gain(.8),
  s("hh*8").gain(rand.range(.2,.4).seg(8)).hpf(8000),
  s("~ perc ~ ~").n(rand.range(0,3)).gain(.4)
)

$: s("field*2").n(rand.range(0,4).seg(4))
  .speed(rand.range(.7,1.3).seg(8)).gain(cosine.range(.1,.3).slow(4))
  .lpf(1600).room(.8).orbit(2)

all(x=>x.room(.4))