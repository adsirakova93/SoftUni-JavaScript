function createAssemblyLine() {
    let result = {

        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = function adjustTemp() {
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp += 1;
                } else {
                    myCar.temp -= 1;
                }
            }
        },

        hasAudio(myCar) {
            myCar.currentTrack = { name: null, artist: null };
            myCar.nowPlaying = function nowPlaying() {
                if (myCar.currentTrack !== 'null') {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            }
        },

        hasParktronic(myCar) {
            myCar.checkDistance = function checkDistance(distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (0.1 <= distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (0.25 <= distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }
    return result
}

const assemblyLine = createAssemblyLine();
const myCar = { make: 'Toyota', model: 'Avensis' };

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
