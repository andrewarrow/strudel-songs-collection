setcps(130/60/4)
// MINIMAL DUBSTEP with HEAVY WOBBLES
$: s("[bd4]").scope()

duck("[2:3:2:3]").duckattack(.2).duckdepth(.75)

$: n("<0 ~ 3 ~>*2").scale("d:minor")
  .s("sawtooth").lpf(sine.range(150,600).slow(2))
  .distort(1.8).gain(.8).orbit(1)

$: n("[0 2 ~ 4]*2").scale("d4:minor")
  .s("square").clip(.6)
  .hp(300).gain(.6).pan(cosine.range(-.5,.5))

$: stack(
  s("bd ~ bd ~").gain(1.1),
  s("~ ~ sd:2 ~").room(.4).gain(.8),
  s("hh*8").gain(rand.range(.2,.4).seg(8)).hpf(6000),
  s("~ 808:3 ~ ~").tune("-8").gain(.6)
)

$: s("pad*2").n(rand.range(0,4).seg(8))
  .gain(sine.range(.2,.4)).room(.7).delay(.3).dfb(.2)
  .lpf(1500).orbit(2)

all(x=>x.room(.3))