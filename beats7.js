setcps(100/60/4)
// TRAP BEAST MODE
$: s("[bd7]").scope()

$: s("808*2 ~ 808 ~").tune(rand.range(-12,-8).seg(4))
  .gain(1.3).distort(.8).lpf(150)

$: n("<0 2 ~ 0 3 ~ 0 1>*2").scale("fs:minor")
  .s("triangle").clip(.7).hpf(400)
  .delay(.125).dt(.3).dfb(.5).gain(.6)

$: stack(
  s("bd ~ ~ ~").gain(1.1),
  s("~ ~ sd:3 ~").room(.4).gain(.8),
  s("hh ~ hh:2 hh").gain(rand.range(.3,.6)).hpf(5000),
  s("~ ~ ~ rim").gain(.5)
)

$: s("vinyl*8").n(rand.range(0,4).seg(8))
  .speed(rand.range(.8,1.3).seg(16)).gain(sine.range(.2,.5).slow(4))
  .lpf(800).orbit(3)

$: chord("<F#m A E B>").voicing().slow(4)
  .s("pad").att(.5).rel(1).gain(.3).room(.7)

all(x=>x.room(.3).hpf(20))