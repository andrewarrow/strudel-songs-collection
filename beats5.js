setcps(140/60/4)
// HARDCORE GABBER MAYHEM
$: s("[bd9]").scope()

$: s("bd*4").gain(1.2).distort(1.5).lpf(200).tune("-5")

$: n("<0 1 0 2>*8").scale("a:phrygian")
  .s("square").clip(.9).hpf(300)
  .delay(.0625).dt(.1).dfb(.8).gain(.6)

$: s("hoover*16").n(rand.range(0,8).seg(32))
  .speed(rand.range(.8,1.5).seg(16))
  .lpf(sine.range(200,2000).fast(8)).gain(.4)

$: stack(
  s("~ cp ~ cp").gain(1.3).distort(1.5),
  s("hh*32").gain(rand.range(.05,.3)).hpf(12000),
  s("~ ~ ~ crash").gain(.8).room(.3)
)

$: s("industrial*2").n(rand.range(0,4).seg(4))
  .speed(rand.range(.5,2).seg(8)).gain(.3).orbit(3)

all(x=>x.distort(.5).room(.1))