setcps(160/60/4)
// BREAKBEAT MADNESS with JUNGLE VIBES
$: s("[amen]").chop(16).rev().speed("[1 .5 2]*2").scope()

duck("[1:1:2:2]").duckattack(.05).duckdepth(.7)

$: n("<0 2 4 0 2 5 0 2>*2").scale("e:minor")
  .s("sawtooth").distort(2.5).lp(300).lpenv(3)
  .delay(.125).dt(.2).dfb(.6).orbit(2)

$: s("reese*4").n(rand.range(0,5).seg(8))
  .speed("[.8 1.2]*2").lpf(400).gain(.7)
  .pan(sine.range(-.5,.5))

$: stack(
  s("[cp sd]*2").gain(.9).hpf(200),
  s("hh*16").gain(rand.range(.1,.4)).hpf(10000),
  s("crash ~ ~ ~").gain(.6)
).fast(2)

all(x=>x.room(.3).delay(.1))