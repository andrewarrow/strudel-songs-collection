setcps(138/60/4)
// PSYTRANCE HYPNOSIS
$: s("[bd6]").scope()

duck("[3:2:3:2]").duckattack(.1).duckdepth(.75)

$: n("<0 2 4 2>*2").scale("d:mixolydian")
  .s("sawtooth").lpf(sine.range(300,800).slow(2))
  .distort(1.5).gain(.7).orbit(1)

$: n("[0 ~ 2 ~]*4").scale("d4:mixolydian")
  .s("square").clip(.7)
  .hp(250).gain(.6).pan(cosine.range(-.5,.5))

$: stack(
  s("bd*2 ~ bd ~").gain(.9),
  s("~ cp ~ cp").room(.2).gain(.8),
  s("hh*8").gain(rand.range(.2,.5).seg(8)).hpf(7000),
  s("~ ~ rim ~").gain(.5)
)

$: s("pad*2").n(rand.range(0,6).seg(4))
  .speed(rand.range(.8,1.2).seg(8)).gain(sine.range(.2,.4).slow(2))
  .lpf(1400).room(.7).orbit(2)

all(x=>x.room(.3))