setcps(85/60/4)
// MINIMAL DUBSTEP with HEAVY WOBBLES
$: s("[bd4]").scope()

duck("[1:4:1:4]").duckattack(.3).duckdepth(.95)

$: n("<0 ~ 0 ~>*4").scale("d1:minor")
  .s("sawtooth").lpf(sine.range(100,800).slow(4))
  .distort(3).gain(.8).orbit(1)

$: n("[7 5 3 2]*8").scale("d4:minor")
  .s("triangle").vib(8).vibmod(.3)
  .delay(.25).dt(.5).dfb(.4).gain(.5)

$: stack(
  s("bd ~ ~ ~").gain(1.2).lpf(100),
  s("~ ~ sd:2 ~").room(.8).gain(.9),
  s("~ 808:3 ~ 808:5").tune("-12").gain(.7)
).slow(2)

$: s("white*32").gain(sine.range(0,.2).fast(16))
  .hpf(8000).room(.5)

all(x=>x.room(.4))