function createAssemblyLine() {
    let result = {
        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = function adjustTemp() {
                if (myCar.temp < myCar.tempSettings){
                    myCar.temp += 1;
                } else {
                    myCar.temp -= 1;
                }
            }
        },

        hasAudio(myCar) {
            myCar.currentTrack = {name: null, artist: null};
            myCar.nowPlaying = function nowPlaying() {
                if (myCar.currentTrack !== 'null') {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
                }
            }


        }




    }
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
