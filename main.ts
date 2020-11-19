input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 10; index++) {
        music.setVolume(randint(40, 127))
        music.playTone(175 + index * 32, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
    }
})
basic.forever(function () {
	
})
