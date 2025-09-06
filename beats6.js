setcps(120/60/4)
// AMBIENT TECHNO DREAMSCAPE
$: s("[bd3]").scope()

duck("[1:3:2:3]").duckattack(.8).duckdepth(.6)

$: n("<0@4 3@4 5@4 2@4>").scale("g:dorian")
  .s("sawtooth").lpf(cosine.range(300,1200).slow(4))
  .delay(.5).dt(.7).dfb(.3).gain(.7).orbit(2)

$: chord("<Gm Bb F C>*2").voicing()
  .s("pad").att(1).rel(2).gain(.4)
  .room(.9).delay(.25).dfb(.2)

$: stack(
  s("bd ~ bd ~").gain(.8),
  s("~ ~ rim ~").gain(.6).delay(.1),
  s("hh*8").gain(sine.range(.1,.3).fast(4)).hpf(8000),
  s("~ perc ~ perc").n(rand.range(0,5)).gain(.5)
)

$: s("field*4").n(rand.range(0,3).seg(16))
  .speed(rand.range(.5,1.2).seg(8)).gain(cosine.range(.1,.4).slow(16))
  .lpf(2000).room(.8)

all(x=>x.room(.6).delay(.2))