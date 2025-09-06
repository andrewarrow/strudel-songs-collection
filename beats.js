setcps(140/60/4)
// LETS MAKE ACIDDDD with SWITCH ANGEL
$: s("[sbd4]").scope()

duck("[2:3:4]").duckattack(.2).duckdepth(.8)
bass: n(rand.range(0,10).sub(7).seg(16)).scale("c:minor").rib(46,1).distort("2.2:.3")
  .s("sawtooth").lp(200).lpenv(slider(2.28,0,8))
  .lpq(12).orbit(2)

$: s("supersaw").detune(1).rel(5).beat(2, 32).slow(2).fm("2")
