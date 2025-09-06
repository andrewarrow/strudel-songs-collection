setcps(140/60/4)
// FUNKY HOUSE GROOVES
$: s("[bd5]").scope()

duck("[2:4:2:4]").duckattack(.2).duckdepth(.75)

$: chord("<Am F C G>*2").voicing().slow(2)
  .s("electric").clip(.7).lpf(800)
  .delay(.125).dt(.25).dfb(.3).gain(.6)

$: n("[0 ~ 2 0 ~ 3 ~ 0]*2").scale("a3:minor")
  .s("triangle").vib(6).vibmod(.2)
  .hp(400).gain(.7).pan(sine.range(-.4,.4).fast(2))

$: stack(
  s("bd ~ bd ~").layer(x=>x.speed(.95)),
  s("~ cp:2 ~ cp:2").room(.2).gain(.8),
  s("hh ~ hh:2 hh").gain(sine.range(.3,.6).fast(8)).hpf(7000),
  s("~ perc:3 ~ perc:1").gain(.5).pan(.2)
)

$: s("jazz*4").n(rand.range(0,6).seg(8))
  .speed(rand.range(.8,1.2).seg(4)).gain(cosine.range(.2,.4).slow(4))
  .lpf(1200).room(.6).orbit(2)

$: s("vocal*8").n(rand.range(0,4).seg(16))
  .speed(rand.range(.5,1.5).seg(8)).gain(sine.range(.1,.3).fast(2))
  .hpf(500).delay(.25).dfb(.2)

all(x=>x.room(.35))