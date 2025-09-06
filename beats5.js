setcps(135/60/4)
// HARDCORE RAVE ENERGY
$: s("[bd9]").scope()

duck("[1:3:1:3]").duckattack(.1).duckdepth(.8)

$: n("<0 2 4 2>*2").scale("a:minor")
  .s("sawtooth").distort(1.8).lpf(250)
  .delay(.125).dt(.2).dfb(.5).gain(.7).orbit(1)

$: n("[0 ~ 3 ~]*4").scale("a4:minor")
  .s("square").clip(.7)
  .hp(200).gain(.6).pan(sine.range(-.6,.6))

$: stack(
  s("bd*2 ~ bd ~").gain(1.1),
  s("~ cp ~ cp").room(.2).gain(.9),
  s("hh*8").gain(rand.range(.1,.4).seg(8)).hpf(8000),
  s("~ ~ oh ~").gain(.6)
)

$: s("rave*4").n(rand.range(0,6).seg(8))
  .speed(rand.range(.9,1.3).seg(4)).gain(cosine.range(.2,.5).slow(2))
  .lpf(1000).room(.5).orbit(2)

all(x=>x.room(.25))