setcps(140/60/4)
// PSYTRANCE HYPNOSIS
$: s("[bd6]").scope()

$: s("bd*4").gain(.9).tune("-3").lpf(200)

$: n("<0 2 4 2 0 3 5 3>*4").scale("d:mixolydian")
  .s("sawtooth").lpf(sine.range(400,1600).fast(16))
  .distort(1.2).gain(.5).pan(sine.range(-.3,.3).fast(8))

$: n("[0 0 2 0]*8").scale("d2:mixolydian")
  .s("triangle").clip(.8).lpf(300)
  .delay(.0625).dt(.15).dfb(.7).gain(.7).orbit(2)

$: stack(
  s("~ ~ ~ rim:2").gain(.6),
  s("hh*16").gain(rand.range(.1,.4)).hpf(8000),
  s("perc*8").n(rand.range(0,6)).gain(sine.range(.2,.5).fast(4))
).fast(2)

$: s("space*2").n(rand.range(0,5).seg(8))
  .speed(rand.range(.6,1.4).seg(16)).gain(cosine.range(.1,.3).slow(8))
  .room(.9).lpf(1500)

all(x=>x.room(.4).delay(.05))