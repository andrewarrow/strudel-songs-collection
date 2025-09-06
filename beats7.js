setcps(125/60/4)
// TRAP BEAST MODE
$: s("[bd7]").scope()

duck("[2:4:2:4]").duckattack(.15).duckdepth(.8)

$: n("<0 3 ~ 0>*2").scale("fs:minor")
  .s("sawtooth").lpf(400).distort(1.5)
  .delay(.125).dt(.2).dfb(.4).gain(.8).orbit(1)

$: n("[0 ~ 2 0]*2").scale("fs4:minor")
  .s("triangle").clip(.6)
  .hp(300).gain(.5).pan(sine.range(-.4,.4))

$: stack(
  s("bd ~ bd ~").gain(1.0),
  s("~ ~ sd:3 ~").room(.3).gain(.8),
  s("hh*8").gain(rand.range(.2,.5).seg(8)).hpf(6000),
  s("~ 808 ~ ~").tune("-10").gain(.7)
)

$: s("jazz*2").n(rand.range(0,5).seg(4))
  .speed(rand.range(.9,1.2).seg(8)).gain(cosine.range(.3,.6).slow(2))
  .lpf(1200).room(.6).orbit(2)

all(x=>x.room(.25))