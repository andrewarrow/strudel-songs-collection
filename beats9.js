setcps(95/60/4)
// IDM GLITCH EXPERIMENT
$: s("[bd2]").scope()

duck("[3:1:2:1]").duckattack(.1).duckdepth(.8)

$: n(rand.range(0,12).seg(64)).scale("bb:locrian")
  .s("square").clip(.6).lpf(rand.range(200,800).seg(32))
  .chop(rand.range(4,16).seg(8)).rev()
  .gain(.4).orbit(1)

$: s("glitch*16").n(rand.range(0,8).seg(32))
  .speed(rand.range(.3,3).seg(64)).gain(rand.range(.1,.6).seg(16))
  .pan(rand.range(-.8,.8).seg(8)).hpf(300)

$: stack(
  s("[bd ~] [~ bd] ~ [bd ~]").gain(.8).tune(rand.range(-5,2).seg(4)),
  s("~ sd:4 ~ ~").chop(4).gain(.7).room(.3),
  s("tick*32").gain(rand.range(.05,.2)).hpf(12000)
).slow(rand.range(1,3).seg(8))

$: s("drone").tune(rand.range(-12,-3).seg(16))
  .lpf(sine.range(100,400).slow(12)).gain(.3)
  .delay(.75).dt(.8).dfb(.2).orbit(3)

all(x=>x.room(.5).hpf(30))